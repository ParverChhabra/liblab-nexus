import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import PocSdk, { Environment } from '@/lib/poc-sdk';
import { mockApiServer, type Event, type Partner, type Activity, type Volunteer } from '@/lib/mockApiServer';

// Initialize SDK with proper configuration
const sdk = new PocSdk({
  token: 'dev-token-123',
  baseUrl: 'https://api.moodyos.com',
  environment: Environment.DEFAULT
});

// Activity Hooks - Using real mock API server
export const useActivities = () => {
  return useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      try {
        // Try real SDK first, fallback to mock API
        const response = await sdk.activity.activityControllerList();
        return response;
      } catch (error) {
        console.log('SDK failed, using mock API:', error);
        const activities = await mockApiServer.getActivities();
        return { data: activities };
      }
    },
  });
};

export const useActivity = (id: string) => {
  return useQuery({
    queryKey: ['activity', id],
    queryFn: async () => {
      try {
        const response = await sdk.activity.activityControllerGet(id);
        return response;
      } catch (error) {
        console.log('SDK failed, using mock API:', error);
        const activities = await mockApiServer.getActivities();
        const activity = activities.find(a => a.id === id);
        return { data: activity };
      }
    },
    enabled: !!id,
  });
};

export const useCreateActivity = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: any) => {
      try {
        const response = await sdk.activity.activityControllerCreate(data);
        return response;
      } catch (error) {
        console.log('SDK failed, using mock API:', error);
        // Mock creation (in real app, this would be handled by backend)
        return { data: { id: Date.now().toString(), ...data } };
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] });
    },
  });
};

export const useUpdateActivity = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      try {
        const response = await sdk.activity.activityControllerUpdate(id, data);
        return response;
      } catch (error) {
        console.log('SDK failed, using mock API:', error);
        return { data: { id, ...data } };
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] });
    },
  });
};

// Auth Hooks - Using real SDK methods with fallback
export const useLogin = () => {
  return useMutation({
    mutationFn: async (type: string) => {
      try {
        const response = await sdk.auth.authControllerLogin(type);
        return response;
      } catch (error) {
        console.log('Auth SDK failed:', error);
        // Simulate successful login
        return { data: { token: 'mock-token', user: { id: '1', email: 'user@example.com' } } };
      }
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: async (type: string) => {
      try {
        const response = await sdk.auth.authControllerLogout(type);
        return response;
      } catch (error) {
        console.log('Logout SDK failed:', error);
        return { data: { success: true } };
      }
    },
  });
};

// Event Hooks - Using real mock API server
export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      try {
        // Try real SDK first
        const response = await sdk.event.adminEventControllerList();
        // Since SDK returns HttpResponse<void>, always use mock API for now
        const events = await mockApiServer.getEvents();
        return { data: events };
      } catch (error) {
        console.log('Events SDK failed, using mock API:', error);
        const events = await mockApiServer.getEvents();
        return { data: events };
      }
    },
  });
};

export const useEvent = (id: string) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      try {
        const response = await sdk.event.adminEventControllerGet(id);
        // Since SDK returns HttpResponse<void>, use mock API
        const event = await mockApiServer.getEvent(id);
        return { data: event };
      } catch (error) {
        console.log('Event SDK failed, using mock API:', error);
        const event = await mockApiServer.getEvent(id);
        return { data: event };
      }
    },
    enabled: !!id,
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: Partial<Event>) => {
      try {
        const response = await sdk.event.adminEventControllerCreate(data as any);
        return response;
      } catch (error) {
        console.log('Create event SDK failed, using mock API:', error);
        const newEvent = await mockApiServer.createEvent(data);
        return { data: newEvent };
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};

// Partner Hooks - Using real mock API server  
export const usePartners = () => {
  return useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      try {
        const response = await sdk.partner.partnerControllerList();
        // Since SDK returns HttpResponse<void>, use mock API
        const partners = await mockApiServer.getPartners();
        return { data: partners };
      } catch (error) {
        console.log('Partners SDK failed, using mock API:', error);
        const partners = await mockApiServer.getPartners();
        return { data: partners };
      }
    },
  });
};

export const usePartner = (id: string) => {
  return useQuery({
    queryKey: ['partner', id],
    queryFn: async () => {
      try {
        const response = await sdk.partner.partnerControllerGet();
        // Since SDK returns HttpResponse<void>, use mock API
        const partner = await mockApiServer.getPartner(id);
        return { data: partner };
      } catch (error) {
        console.log('Partner SDK failed, using mock API:', error);
        const partner = await mockApiServer.getPartner(id);
        return { data: partner };
      }
    },
    enabled: !!id,
  });
};

// Volunteer Hooks - Using real mock API server
export const useVolunteers = () => {
  return useQuery({
    queryKey: ['volunteers'],
    queryFn: async () => {
      try {
        const response = await sdk.volunteerSubmission.volunteerSubmissionControllerGetByEventId('default-event');
        // Since SDK returns HttpResponse<void>, use mock API
        const volunteers = await mockApiServer.getVolunteers();
        return { data: volunteers };
      } catch (error) {
        console.log('Volunteers SDK failed, using mock API:', error);
        const volunteers = await mockApiServer.getVolunteers();
        return { data: volunteers };
      }
    },
  });
};

export const useVolunteer = (id: string) => {
  return useQuery({
    queryKey: ['volunteer', id],
    queryFn: async () => {
      try {
        const response = await sdk.volunteerSubmission.volunteerSubmissionControllerGet(id);
        // Since SDK returns HttpResponse<void>, use mock API
        const volunteer = await mockApiServer.getVolunteer(id);
        return { data: volunteer };
      } catch (error) {
        console.log('Volunteer SDK failed, using mock API:', error);
        const volunteer = await mockApiServer.getVolunteer(id);
        return { data: volunteer };
      }
    },
    enabled: !!id,
  });
};

export { sdk };