import { useState, useContext } from 'react';
import API from '../api';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Card, CardBody, CardHeader, Link } from '@heroui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const { data } = await API.post('/login', { username, password });
      login(data.access_token);
      navigate('/portal');
    } catch (err) {
      setError('Invalid username or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 flex items-center justify-center px-4 py-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Sign in to your team portal
            </p>
          </CardHeader>

          <CardBody className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                label="Username"
                placeholder="Enter your username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                className="w-full"
                variant="bordered"
                classNames={{
                  input: "text-gray-900 dark:text-white",
                  inputWrapper: "border-gray-300 dark:border-gray-600 hover:border-indigo-500 focus-within:border-indigo-500",
                }}
              />

              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full"
                variant="bordered"
                classNames={{
                  input: "text-gray-900 dark:text-white",
                  inputWrapper: "border-gray-300 dark:border-gray-600 hover:border-indigo-500 focus-within:border-indigo-500",
                }}
              />

              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                isLoading={isLoading}
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Don't have an account?{' '}
                <Link
                  as={RouterLink}
                  to="/register"
                  className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                >
                  Contact your administrator
                </Link>
              </p>
            </div>

            <div className="text-center">
              <Link
                as={RouterLink}
                to="/"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm transition-colors duration-200"
              >
                ← Back to Home
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
