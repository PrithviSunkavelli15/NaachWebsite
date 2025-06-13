from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    JWTManager, create_access_token,
    jwt_required, get_jwt_identity
)
print("🔧 Starting Naach backend…")

app = Flask(__name__)

#db config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///naach.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

# JWT config
app.config['JWT_SECRET_KEY'] = 'fjakosdnfio23q4r5890uh2o3ndkm23bn4jk2b3kj4bnjkn234kmn234i3iubfjkds'
jwt = JWTManager(app)

#admin (set in ENV during prod)
import os
ADMIN_SECRET = os.environ.get('ADMIN_SECRET', 'fasdf89sjf9sf9sdfsdf0aew0krw0ekr9j4j345n')

#schema
class Team(db.Model):
    id = db.Column(db.Integer, primary_key =True)
    name = db.Column(db.String(128), unique = True, nullable = False)

    def to_dict(self):
        return {"id": self.id, "name": self.name}

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    team_id = db.Column(db.Integer, db.ForeignKey('team.id'),unique=True, nullable=False)
    team = db.relationship('Team', backref=db.backref('user', uselist=False))

    def set_password(self, pw):
        self.password_hash = generate_password_hash(pw)
    
    def check_password(self,pw):
        return check_password_hash(self.password_hash, pw)

#create tables
def create_tables():
    db.create_all()

#API endpoints
@app.route('/admin/create_user', methods=['POST'])
def admin_create_user():
    if request.headers.get('X-ADMIN-SECRET') != ADMIN_SECRET:
        return jsonify({"error": "Unauthorized"}), 401

    data = request.get_json()
    team_id = data.get('team_id')

   
    team = Team.query.get(team_id)
    if not team:
        return jsonify({"error": "Team not found"}), 404

    
    if User.query.filter_by(team_id=team_id).first():
        return jsonify({"error": "A user already exists for this team"}), 400

    user = User(
        username=data['username'],
        team_id=team_id
    )
    user.set_password(data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "Team user created"}), 201

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data.get('username')).first()
    if not user or not user.check_password(data.get('password')):
        return jsonify({"error": "Bad credentials"}), 401

    access_token = create_access_token(identity=str(user.id))
    return jsonify({"access_token": access_token}), 200

# view your own team’s info
@app.route('/team/details', methods=['GET'])
@jwt_required()
def team_details():
    user_id = int(get_jwt_identity())
    user = User.query.get(user_id)
    return jsonify(user.team.to_dict()), 200

# placeholder for future form submission
@app.route('/team/submit', methods=['POST'])
@jwt_required()
def submit_details():
    # later: process request.get_json() with form fields
    return jsonify({"msg": "Form-receive endpoint (to be implemented)"}), 200



if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    print("🚀 Launching server on http://127.0.0.1:5000 …")
    app.run(host='127.0.0.1', port=5000, debug=True)