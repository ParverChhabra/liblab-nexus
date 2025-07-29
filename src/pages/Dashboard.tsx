import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { 
  Calendar, 
  Users, 
  Building2, 
  TrendingUp, 
  Plus, 
  Activity,
  Clock,
  CheckCircle
} from 'lucide-react';

const Dashboard = () => {
  const quickStats = [
    { title: 'Active Events', value: '24', change: '+12%', icon: Calendar, color: 'text-blue-600' },
    { title: 'Registered Volunteers', value: '1,247', change: '+8%', icon: Users, color: 'text-purple-600' },
    { title: 'Partner Organizations', value: '45', change: '+15%', icon: Building2, color: 'text-green-600' },
    { title: 'This Month Events', value: '67', change: '+23%', icon: TrendingUp, color: 'text-orange-600' },
  ];

  const recentActivities = [
    { action: 'New volunteer registered', detail: 'Sarah Johnson joined Climate Action event', time: '2 mins ago', icon: Users },
    { action: 'Event published', detail: 'Community Garden Cleanup scheduled for next week', time: '15 mins ago', icon: Calendar },
    { action: 'Partner approved', detail: 'Green Earth Foundation partnership activated', time: '1 hour ago', icon: Building2 },
    { action: 'Registration milestone', detail: 'Food Bank Drive reached 100 volunteers', time: '2 hours ago', icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your platform.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-gray-100 ${stat.color}`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks to get you started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                Create New Event
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Invite Volunteers
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Building2 className="mr-2 h-4 w-4" />
                Add Partner
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Activity className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                    <div className="p-2 bg-white rounded-lg">
                      <activity.icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.detail}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events Preview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your next scheduled events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Community Garden Cleanup</h3>
                <p className="text-sm text-gray-600 mb-2">March 15, 2024 • 9:00 AM</p>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">45 registered volunteers</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Food Bank Drive</h3>
                <p className="text-sm text-gray-600 mb-2">March 18, 2024 • 10:00 AM</p>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">127 registered volunteers</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Beach Cleanup Initiative</h3>
                <p className="text-sm text-gray-600 mb-2">March 22, 2024 • 8:00 AM</p>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">89 registered volunteers</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;