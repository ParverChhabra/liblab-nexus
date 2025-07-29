import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Comprehensive Platform</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MoodyOS
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Your all-in-one platform for event management, volunteer coordination, 
          partner relationships, and comprehensive analytics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/dashboard">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/events">
            <Button variant="outline" size="lg">
              Explore Events
            </Button>
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Event Management</h3>
            <p className="text-sm text-gray-600">Organize and manage events with comprehensive tools</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Volunteer Platform</h3>
            <p className="text-sm text-gray-600">Connect and coordinate volunteer activities</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Partner Dashboard</h3>
            <p className="text-sm text-gray-600">Manage client and partner relationships</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
            <p className="text-sm text-gray-600">Comprehensive insights and reporting</p>
          </div>
        </div>
      </div>
    </div>
  );
}