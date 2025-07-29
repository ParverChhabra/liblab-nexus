import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { useEvents, useEvent } from '@/hooks/usePocSdk';
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
  
  const { data: eventsResponse, isLoading: eventsLoading, error: eventsError } = useEvents();
  const { data: eventDetails } = useEvent(selectedEvent || '');

  // Process real API data from mock server
  const events = eventsResponse?.data || [];
  
  // Transform API data to expected format if needed
  const processedEvents = Array.isArray(events) ? events.map((event: any) => ({
    id: event.id || Math.random().toString(),
    name: event.title || event.name || 'Untitled Event',
    description: event.description || 'No description available',
    date: event.startDate || event.date || new Date().toISOString().split('T')[0],
    time: event.startTime || event.time || '00:00',
    location: event.location || event.address || 'Location TBD',
    volunteers: event.registeredVolunteers || event.volunteers || 0,
    maxVolunteers: event.maxVolunteers || event.capacity || 100,
    status: event.status || 'active',
    category: event.category || event.type || 'General',
    requirements: event.requirements || [],
    tags: event.tags || []
  })) : [];

  // Use processed events from API, or show fallback message
  const eventsToDisplay = processedEvents.length > 0 ? processedEvents : [];

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'planning': case 'upcoming': return 'bg-yellow-100 text-yellow-800';
      case 'completed': case 'finished': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category?.toLowerCase()) {
      case 'environment': case 'environmental': return 'bg-emerald-100 text-emerald-800';
      case 'community service': case 'community': return 'bg-purple-100 text-purple-800';
      case 'social': return 'bg-pink-100 text-pink-800';
      case 'education': return 'bg-blue-100 text-blue-800';
      case 'health': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredEvents = eventsToDisplay.filter(event =>
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
            <p className="text-gray-600">
              Manage and organize volunteer events and activities.
              {eventsLoading && ' (Loading events...)'}
              {eventsError && ' (API connection error)'}
              {!eventsLoading && !eventsError && processedEvents.length > 0 && ` (${processedEvents.length} events loaded)`}
            </p>
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

        {/* Loading State */}
        {eventsLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-2 bg-gray-200 rounded"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Events Grid */}
        {!eventsLoading && (
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
                      style={{ width: `${Math.min((event.volunteers / event.maxVolunteers) * 100, 100)}%` }}
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
        )}

        {/* Empty State */}
        {!eventsLoading && filteredEvents.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm ? 'Try adjusting your search criteria.' : 'Get started by creating your first event.'}
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Event
              </Button>
            </CardContent>
          </Card>
        )}

        {/* API Status Information */}
        {eventsError && (
          <Card className="mt-6 border-yellow-200 bg-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Calendar className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium text-yellow-800">API Connection Issue</h3>
                  <p className="text-sm text-yellow-700 mt-1">
                    Unable to connect to the events API. Currently showing fallback demonstration data.
                  </p>
                  {eventsError.message && (
                    <p className="text-xs text-yellow-600 mt-1">
                      Error: {eventsError.message}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* API Success Information */}
        {!eventsLoading && !eventsError && processedEvents.length > 0 && (
          <Card className="mt-6 border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-1 bg-green-100 rounded-full">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <p className="text-sm text-green-700">
                  Successfully loaded {processedEvents.length} events from the API
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Events;