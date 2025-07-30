import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import { AuthContext } from '../AuthContext';
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Button, 
  Avatar, 
  Chip,
  Divider,
  Spinner,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@heroui/react';

export default function TeamPortal() {
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/team/details')
      .then(res => {
        setTeam(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load team details');
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <Spinner size="lg" className="mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading your team portal...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 flex items-center justify-center">
        <Card className="max-w-md">
          <CardBody className="text-center">
            <div className="text-red-500 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Error</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()} color="primary">
              Try Again
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }

  if (!team) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{team.name} Portal</h1>
                <p className="text-gray-600 dark:text-gray-400">Team Dashboard</p>
              </div>
            </div>

            <Dropdown>
              <DropdownTrigger>
                <Button variant="light" className="flex items-center space-x-2">
                  <Avatar 
                    name={team.name} 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                  <span className="hidden sm:block text-gray-700 dark:text-gray-300">{team.name}</span>
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="User menu">
                <DropdownItem key="profile">Profile</DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Team Info Card */}
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <CardHeader className="pb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Team Information</h2>
              </CardHeader>
              <CardBody className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Team Name</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">{team.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Status</h3>
                    <Chip 
                      color="success" 
                      variant="flat" 
                      className="mt-1"
                    >
                      Active
                    </Chip>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Members</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {team.members?.length || 0} dancers
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Founded</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {team.founded || '2024'}
                    </p>
                  </div>
                </div>

                <Divider />

                <div>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Description</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {team.description || 'A competitive dance team dedicated to excellence and innovation in the art of dance.'}
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <CardHeader className="pb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Actions</h2>
              </CardHeader>
              <CardBody className="space-y-4">
                <Button 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  startContent={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  }
                >
                  Add Member
                </Button>
                <Button 
                  variant="bordered"
                  className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                  startContent={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  }
                >
                  View Schedule
                </Button>
                <Button 
                  variant="bordered"
                  className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                  startContent={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  }
                >
                  Watch Videos
                </Button>
              </CardBody>
            </Card>

            {/* Recent Activity */}
            <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <CardHeader className="pb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
              </CardHeader>
              <CardBody className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Practice session completed</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">New member joined</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Competition registration</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Team Members Section */}
        {team.members && team.members.length > 0 && (
          <div className="mt-8">
            <Card className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <CardHeader className="pb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Team Members</h2>
              </CardHeader>
              <CardBody>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {team.members.map((member, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                      <Avatar 
                        name={member.name} 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{member.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
