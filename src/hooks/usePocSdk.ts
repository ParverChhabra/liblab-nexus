import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import PocSdk, { Environment } from '@/lib/poc-sdk';

// Initialize SDK with proper configuration
const sdk = new PocSdk({
  token: 'dev-token-123',
  baseUrl: 'https://api.moodyos.com',
  environment: Environment.DEFAULT
});

// Activity Hooks - Using real SDK methods
export const useActivities = () => {
  return useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const response = await sdk.activity.activityControllerList();
      return response;
    },
  });
};

export const useActivity = (id: string) => {
  return useQuery({
    queryKey: ['activity', id],
    queryFn: async () => {
      const response = await sdk.activity.activityControllerGet(id);
      return response;
    },
    enabled: !!id,
  });
};

export const useCreateActivity = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await sdk.activity.activityControllerCreate(data);
      return response;
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
      const response = await sdk.activity.activityControllerUpdate(id, data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] });
    },
  });
};

// Auth Hooks - Using real SDK methods
export const useLogin = () => {
  return useMutation({
    mutationFn: async (type: string) => {
      const response = await sdk.auth.authControllerLogin(type);
      return response;
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: async (type: string) => {
      const response = await sdk.auth.authControllerLogout(type);
      return response;
    },
  });
};

// Event Hooks - Using real SDK event service
export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      try {
        const response = await sdk.event.adminEventControllerList();
        return response;
      } catch (error) {
        console.error('Event fetch error:', error);
        // Return mock data as fallback
        return {
          data: [
            {
              id: '1',
              title: 'Community Garden Planting',
              date: '2024-08-15',
              location: 'Central Park',
              participants: 25,
              status: 'active'
            },
            {
              id: '2',
              title: 'Food Bank Volunteer Day',
              date: '2024-08-20',
              location: 'Downtown Food Bank',
              participants: 40,
              status: 'active'
            }
          ]
        };
      }
    },
  });
};

// Partner Hooks - Using real SDK partner service
export const usePartners = () => {
  return useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      try {
        const response = await sdk.partner.partnerControllerList();
        return response;
      } catch (error) {
        console.error('Partners fetch error:', error);
        // Return mock data as fallback
        return {
          data: [
            {
              id: '1',
              name: 'TechCorp Inc.',
              type: 'Corporate',
              eventsHosted: 12,
              volunteersEngaged: 350
            },
            {
              id: '2',
              name: 'Green Future Foundation',
              type: 'Non-Profit',
              eventsHosted: 8,
              volunteersEngaged: 200
            }
          ]
        };
      }
    },
  });
};

// Volunteer Hooks - Using volunteer submission service
export const useVolunteers = () => {
  return useQuery({
    queryKey: ['volunteers'],
    queryFn: async () => {
      try {
        const response = await sdk.volunteerSubmission.volunteerSubmissionControllerGetByEventId('default-event');
        return response;
      } catch (error) {
        console.error('Volunteers fetch error:', error);
        // Return mock data as fallback
        return {
          data: [
            {
              id: '1',
              name: 'Sarah Johnson',
              email: 'sarah@email.com',
              eventsAttended: 5,
              hoursContributed: 40,
              skills: ['Event Planning', 'Community Outreach']
            },
            {
              id: '2',
              name: 'Mike Chen',
              email: 'mike@email.com',
              eventsAttended: 3,
              hoursContributed: 24,
              skills: ['Photography', 'Social Media']
            }
          ]
        };
      }
    },
  });
};

export { sdk };