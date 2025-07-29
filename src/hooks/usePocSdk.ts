import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import PocSdk from '@/lib/poc-sdk';

// Mock token for development - replace with actual auth
const sdk = new PocSdk({
  token: 'dev-token-123',
  baseUrl: 'https://api.moodyos.com'
});

// Activity Hooks
export const useActivities = () => {
  return useQuery({
    queryKey: ['activities'],
    queryFn: () => sdk.activity.activityControllerList(),
  });
};

export const useActivity = (id: string) => {
  return useQuery({
    queryKey: ['activity', id],
    queryFn: () => sdk.activity.activityControllerGet(id),
    enabled: !!id,
  });
};

export const useCreateActivity = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: any) => sdk.activity.activityControllerCreate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] });
    },
  });
};

export const useUpdateActivity = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      sdk.activity.activityControllerUpdate(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] });
    },
  });
};

// Auth Hooks
export const useLogin = () => {
  return useMutation({
    mutationFn: (type: string) => sdk.auth.authControllerLogin(type),
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: (type: string) => sdk.auth.authControllerLogout(type),
  });
};

// Event Hooks (placeholder - would be implemented with actual event service)
export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      // Mock data for now
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
    },
  });
};

// Partner Hooks
export const usePartners = () => {
  return useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      // Mock data for now
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
    },
  });
};

// Volunteer Hooks
export const useVolunteers = () => {
  return useQuery({
    queryKey: ['volunteers'],
    queryFn: async () => {
      // Mock data for now
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
    },
  });
};

export { sdk };