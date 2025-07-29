// Mock API Server - Simulates real backend endpoints
// This provides realistic data structures that match the expected API responses

interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  address: string;
  registeredVolunteers: number;
  maxVolunteers: number;
  status: 'active' | 'planning' | 'completed' | 'cancelled';
  category: string;
  hostId: string;
  hostName: string;
  partnerId?: string;
  partnerName?: string;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string;
  requirements: string[];
  tags: string[];
}

interface Partner {
  id: string;
  name: string;
  type: 'Corporate' | 'Non-Profit' | 'Government' | 'Educational';
  description: string;
  contactEmail: string;
  contactPhone: string;
  website?: string;
  address: string;
  eventsHosted: number;
  volunteersEngaged: number;
  focusAreas: string[];
  isActive: boolean;
  createdAt: string;
  logoUrl?: string;
}

interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: number; // in minutes
  minParticipants: number;
  maxParticipants: number;
  skillsRequired: string[];
  materials: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Volunteer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: string[];
  availability: string[];
  eventsAttended: number;
  hoursContributed: number;
  rating: number;
  isActive: boolean;
  createdAt: string;
  profileImageUrl?: string;
}

// Mock Data Generator
class MockDataGenerator {
  private events: Event[] = [];
  private partners: Partner[] = [];
  private activities: Activity[] = [];
  private volunteers: Volunteer[] = [];

  constructor() {
    this.generateMockData();
  }

  private generateMockData() {
    // Generate mock events
    this.events = [
      {
        id: '1',
        title: 'Community Garden Revitalization',
        description: 'Join us in transforming the downtown community garden into a thriving green space. We\'ll be planting native species, building raised beds, and creating educational signage.',
        startDate: '2024-08-15',
        startTime: '09:00',
        endDate: '2024-08-15',
        endTime: '15:00',
        location: 'Downtown Community Garden',
        address: '123 Green Street, Riverside District',
        registeredVolunteers: 45,
        maxVolunteers: 60,
        status: 'active',
        category: 'Environment',
        hostId: 'host1',
        hostName: 'Sarah Chen',
        partnerId: 'partner1',
        partnerName: 'Green Future Foundation',
        createdAt: '2024-07-01T10:00:00Z',
        updatedAt: '2024-07-20T14:30:00Z',
        imageUrl: '/api/placeholder/400/300',
        requirements: ['Comfortable working outdoors', 'Able to lift 25lbs', 'Wear closed-toe shoes'],
        tags: ['gardening', 'environment', 'community', 'outdoors']
      },
      {
        id: '2',
        title: 'Food Bank Distribution Drive',
        description: 'Help distribute essential food packages to families in need. Volunteers will sort donations, pack boxes, and assist with distribution to community members.',
        startDate: '2024-08-20',
        startTime: '08:00',
        endDate: '2024-08-20',
        endTime: '14:00',
        location: 'Central Food Bank',
        address: '456 Hope Avenue, Downtown',
        registeredVolunteers: 127,
        maxVolunteers: 150,
        status: 'active',
        category: 'Community Service',
        hostId: 'host2',
        hostName: 'Michael Rodriguez',
        partnerId: 'partner2',
        partnerName: 'City Food Alliance',
        createdAt: '2024-07-05T09:00:00Z',
        updatedAt: '2024-07-25T11:15:00Z',
        requirements: ['Able to stand for extended periods', 'Comfortable lifting 30lbs', 'Food safety training preferred'],
        tags: ['food', 'distribution', 'community', 'families']
      },
      {
        id: '3',
        title: 'Beach Cleanup & Marine Conservation',
        description: 'Protect our marine ecosystem by removing debris from Sunset Beach. We\'ll also conduct water quality testing and educate visitors about ocean conservation.',
        startDate: '2024-08-25',
        startTime: '07:00',
        endDate: '2024-08-25',
        endTime: '12:00',
        location: 'Sunset Beach',
        address: 'Ocean Drive, Coastal District',
        registeredVolunteers: 89,
        maxVolunteers: 100,
        status: 'active',
        category: 'Environment',
        hostId: 'host3',
        hostName: 'Dr. Amanda Foster',
        partnerId: 'partner3',
        partnerName: 'Ocean Conservation Society',
        createdAt: '2024-07-10T16:00:00Z',
        updatedAt: '2024-07-28T09:45:00Z',
        requirements: ['Comfortable walking on sand', 'Sun protection recommended', 'Swimming ability not required'],
        tags: ['beach', 'cleanup', 'marine', 'conservation', 'environment']
      },
      {
        id: '4',
        title: 'Senior Center Technology Workshop',
        description: 'Teach seniors how to use smartphones, tablets, and computers. Help bridge the digital divide by providing one-on-one technology tutoring.',
        startDate: '2024-09-02',
        startTime: '13:00',
        endDate: '2024-09-02',
        endTime: '17:00',
        location: 'Golden Years Senior Center',
        address: '789 Elder Street, Westside',
        registeredVolunteers: 23,
        maxVolunteers: 30,
        status: 'planning',
        category: 'Education',
        hostId: 'host4',
        hostName: 'Lisa Thompson',
        createdAt: '2024-07-15T12:00:00Z',
        updatedAt: '2024-07-29T08:20:00Z',
        requirements: ['Basic computer skills', 'Patience working with seniors', 'Teaching experience helpful'],
        tags: ['seniors', 'technology', 'education', 'digital literacy']
      },
      {
        id: '5',
        title: 'Youth Mentorship Program Kickoff',
        description: 'Launch our new mentorship program connecting at-risk youth with positive role models. Includes team building activities and goal setting workshops.',
        startDate: '2024-09-10',
        startTime: '10:00',
        endDate: '2024-09-10',
        endTime: '16:00',
        location: 'Community Youth Center',
        address: '321 Future Lane, Central District',
        registeredVolunteers: 35,
        maxVolunteers: 50,
        status: 'active',
        category: 'Youth Development',
        hostId: 'host5',
        hostName: 'James Wilson',
        partnerId: 'partner4',
        partnerName: 'Youth Empowerment Alliance',
        createdAt: '2024-07-20T14:00:00Z',
        updatedAt: '2024-07-30T10:00:00Z',
        requirements: ['Background check required', 'Experience with youth preferred', 'Commitment to 6-month program'],
        tags: ['youth', 'mentorship', 'development', 'leadership']
      }
    ];

    // Generate mock partners
    this.partners = [
      {
        id: 'partner1',
        name: 'Green Future Foundation',
        type: 'Non-Profit',
        description: 'Dedicated to environmental sustainability and community green spaces.',
        contactEmail: 'contact@greenfuture.org',
        contactPhone: '(555) 123-4567',
        website: 'https://greenfuture.org',
        address: '100 Eco Drive, Green District',
        eventsHosted: 24,
        volunteersEngaged: 850,
        focusAreas: ['Environment', 'Sustainability', 'Education'],
        isActive: true,
        createdAt: '2023-01-15T00:00:00Z',
        logoUrl: '/api/placeholder/150/150'
      },
      {
        id: 'partner2',
        name: 'TechCorp Industries',
        type: 'Corporate',
        description: 'Technology company committed to community development and digital inclusion.',
        contactEmail: 'community@techcorp.com',
        contactPhone: '(555) 987-6543',
        website: 'https://techcorp.com/community',
        address: '500 Innovation Boulevard, Tech Hub',
        eventsHosted: 18,
        volunteersEngaged: 650,
        focusAreas: ['Education', 'Technology', 'Youth Development'],
        isActive: true,
        createdAt: '2023-03-20T00:00:00Z',
        logoUrl: '/api/placeholder/150/150'
      },
      {
        id: 'partner3',
        name: 'Ocean Conservation Society',
        type: 'Non-Profit',
        description: 'Protecting marine ecosystems through community action and education.',
        contactEmail: 'info@oceanconservation.org',
        contactPhone: '(555) 456-7890',
        website: 'https://oceanconservation.org',
        address: '25 Marine Way, Coastal Area',
        eventsHosted: 32,
        volunteersEngaged: 1200,
        focusAreas: ['Environment', 'Marine Conservation', 'Education'],
        isActive: true,
        createdAt: '2022-06-10T00:00:00Z'
      },
      {
        id: 'partner4',
        name: 'City University',
        type: 'Educational',
        description: 'Public university with strong community engagement programs.',
        contactEmail: 'outreach@cityuni.edu',
        contactPhone: '(555) 321-0987',
        website: 'https://cityuni.edu/community',
        address: '1000 University Drive, Academic District',
        eventsHosted: 45,
        volunteersEngaged: 2100,
        focusAreas: ['Education', 'Research', 'Community Development'],
        isActive: true,
        createdAt: '2020-01-01T00:00:00Z'
      }
    ];

    // Generate mock activities
    this.activities = [
      {
        id: 'activity1',
        title: 'Environmental Cleanup',
        description: 'General cleanup activities for parks, beaches, and community spaces.',
        category: 'Environment',
        duration: 240,
        minParticipants: 5,
        maxParticipants: 50,
        skillsRequired: ['Physical fitness', 'Teamwork'],
        materials: ['Gloves', 'Trash bags', 'Safety equipment'],
        isActive: true,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-07-01T00:00:00Z'
      },
      {
        id: 'activity2',
        title: 'Food Service & Distribution',
        description: 'Preparing and distributing meals to community members in need.',
        category: 'Community Service',
        duration: 180,
        minParticipants: 10,
        maxParticipants: 30,
        skillsRequired: ['Food safety knowledge', 'Customer service'],
        materials: ['Hairnets', 'Gloves', 'Serving utensils'],
        isActive: true,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-07-01T00:00:00Z'
      }
    ];

    // Generate mock volunteers
    this.volunteers = [
      {
        id: 'vol1',
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@email.com',
        phone: '(555) 111-2222',
        skills: ['Event Planning', 'Community Outreach', 'Public Speaking'],
        availability: ['Weekends', 'Evenings'],
        eventsAttended: 15,
        hoursContributed: 120,
        rating: 4.8,
        isActive: true,
        createdAt: '2023-06-15T00:00:00Z'
      },
      {
        id: 'vol2',
        firstName: 'Michael',
        lastName: 'Chen',
        email: 'mike.chen@email.com',
        phone: '(555) 333-4444',
        skills: ['Photography', 'Social Media', 'Graphic Design'],
        availability: ['Weekends', 'Flexible'],
        eventsAttended: 8,
        hoursContributed: 64,
        rating: 4.9,
        isActive: true,
        createdAt: '2023-09-20T00:00:00Z'
      }
    ];
  }

  // API Methods
  async getEvents(): Promise<Event[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return this.events;
  }

  async getEvent(id: string): Promise<Event | null> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.events.find(event => event.id === id) || null;
  }

  async createEvent(eventData: Partial<Event>): Promise<Event> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newEvent: Event = {
      id: `event_${Date.now()}`,
      title: eventData.title || 'Untitled Event',
      description: eventData.description || '',
      startDate: eventData.startDate || new Date().toISOString().split('T')[0],
      startTime: eventData.startTime || '09:00',
      endDate: eventData.endDate || new Date().toISOString().split('T')[0],
      endTime: eventData.endTime || '17:00',
      location: eventData.location || 'TBD',
      address: eventData.address || 'TBD',
      registeredVolunteers: 0,
      maxVolunteers: eventData.maxVolunteers || 50,
      status: 'planning',
      category: eventData.category || 'General',
      hostId: eventData.hostId || 'default',
      hostName: eventData.hostName || 'Event Host',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      requirements: eventData.requirements || [],
      tags: eventData.tags || []
    };
    this.events.push(newEvent);
    return newEvent;
  }

  async updateEvent(id: string, eventData: Partial<Event>): Promise<Event | null> {
    await new Promise(resolve => setTimeout(resolve, 800));
    const eventIndex = this.events.findIndex(event => event.id === id);
    if (eventIndex === -1) return null;
    
    this.events[eventIndex] = {
      ...this.events[eventIndex],
      ...eventData,
      updatedAt: new Date().toISOString()
    };
    return this.events[eventIndex];
  }

  async deleteEvent(id: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 500));
    const eventIndex = this.events.findIndex(event => event.id === id);
    if (eventIndex === -1) return false;
    
    this.events.splice(eventIndex, 1);
    return true;
  }

  async getPartners(): Promise<Partner[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    return this.partners;
  }

  async getPartner(id: string): Promise<Partner | null> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return this.partners.find(partner => partner.id === id) || null;
  }

  async getActivities(): Promise<Activity[]> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.activities;
  }

  async getVolunteers(): Promise<Volunteer[]> {
    await new Promise(resolve => setTimeout(resolve, 700));
    return this.volunteers;
  }

  async getVolunteer(id: string): Promise<Volunteer | null> {
    await new Promise(resolve => setTimeout(resolve, 400));
    return this.volunteers.find(volunteer => volunteer.id === id) || null;
  }
}

// Singleton instance
export const mockApiServer = new MockDataGenerator();

// Export types
export type { Event, Partner, Activity, Volunteer };