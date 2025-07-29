import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { useEvents, useEvent } from '@/lib/api';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Plus, 
  Search, 
  Filter,
  Clock,
  Edit,
  Eye
} from 'lucide-react';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  
  const { data: events, isLoading: eventsLoading, error: eventsError } = useEvents();
  const { data: eventDetails } = useEvent(selectedEvent || '');

  // Mock events data for demonstration
  const mockEvents = [
    {
      id: '1',
      name: 'Community Garden Cleanup',
      description: 'Join us for a day of beautifying our local community garden and promoting environmental sustainability.',
      date: '2024-03-15',
      time: '09:00',
      location: 'Riverside Community Garden, 123 Green St',
      volunteers: 45,
      maxVolunteers: 60,
      status: 'active',
      category: 'Environment'
    },
    {
      id: '2', 
      name: 'Food Bank Distribution',
      description: 'Help distribute food packages to families in need in our community.',
      date: '2024-03-18',
      time: '10:00',
      location: 'Central Food Bank, 456 Hope Ave',
      volunteers: 127,
      maxVolunteers: 150,
      status: 'active',
      category: 'Community Service'
    },
    {
      id: '3',
      name: 'Beach Cleanup Initiative', 
      description: 'Protect our marine environment by cleaning up Sunset Beach and educating others about ocean conservation.',
      date: '2024-03-22',
      time: '08:00',
      location: 'Sunset Beach, Ocean Drive',
      volunteers: 89,
      maxVolunteers: 100,
      status: 'active',
      category: 'Environment'
    },
    {
      id: '4',
      name: 'Senior Center Visiting',
      description: 'Spend time with elderly residents, play games, and provide companionship.',
      date: '2024-03-25',
      time: '14:00',
      location: 'Golden Years Senior Center, 789 Elder St',
      volunteers: 23,
      maxVolunteers: 40,
      status: 'planning',
      category: 'Social'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'planning': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Environment': return 'bg-emerald-100 text-emerald-800';
      case 'Community Service': return 'bg-purple-100 text-purple-800';
      case 'Social': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredEvents = mockEvents.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Events</h1>
            <p className="text-gray-600">Manage and organize volunteer events and activities.</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{event.name}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getStatusColor(event.status)} variant="secondary">
                        {event.status}
                      </Badge>
                      <Badge className={getCategoryColor(event.category)} variant="secondary">
                        {event.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{event.volunteers}/{event.maxVolunteers} volunteers</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(event.volunteers / event.maxVolunteers) * 100}%` }}
                  ></div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* API Error State */}
        {eventsError && (
          <Card className="mt-6">
            <CardContent className="p-6 text-center">
              <p className="text-gray-600 mb-4">
                Unable to load events from API. Showing demo data above.
              </p>
              <p className="text-sm text-gray-500">
                Error: {eventsError.message}
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Events;