import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import PocSdk, { Environment } from '@/lib/poc-sdk';

// Initialize SDK with proper configuration
const sdk = new PocSdk({
  token: 'dev-token-123',
  baseUrl: 'https://api.moodyos.com',
  environment: Environment.DEFAULT
});

// Fallback mock data for when API fails
const mockEvents = [
  {
    id: '1',
    title: 'Community Beach Cleanup',
    description: 'Join us for a beach cleanup event to help preserve our marine environment.',
    startDate: '2024-08-15',
    startTime: '09:00',
    location: 'Santa Monica Beach',
    registeredVolunteers: 15,
    maxVolunteers: 50,
    status: 'active',
    category: 'Environment'
  },
  {
    id: '2',
    title: 'Food Bank Volunteer Day',
    description: 'Help sort and package food donations for local families in need.',
    startDate: '2024-08-20',
    startTime: '14:00',
    location: 'Los Angeles Food Bank',
    registeredVolunteers: 8,
    maxVolunteers: 25,
    status: 'active',
    category: 'Community Service'
  },
  {
    id: '3',
    title: 'Senior Center Social Hour',
    description: 'Spend time with elderly residents, play games, and provide companionship.',
    startDate: '2024-08-25',
    startTime: '15:30',
    location: 'Sunset Senior Center',
    registeredVolunteers: 12,
    maxVolunteers: 20,
    status: 'active',
    category: 'Social'
  }
];

const mockPartners = [
  {
    id: '1',
    name: 'Green Earth Initiative',
    description: 'Environmental conservation organization focused on ocean cleanup.',
    email: 'contact@greenearth.org',
    phone: '(555) 123-4567',
    address: '123 Ocean Ave, Santa Monica, CA',
    status: 'active',
    type: 'Non-Profit',
    website: 'https://greenearth.org',
    logoUrl: '/placeholder.svg',
    focusAreas: ['Environment', 'Ocean Conservation', 'Community Cleanup']
  },
  {
    id: '2',
    name: 'Community Care Network',
    description: 'Local organization providing support services to families in need.',
    email: 'info@communitycare.org',
    phone: '(555) 987-6543',
    address: '456 Main St, Los Angeles, CA',
    status: 'active',
    type: 'Non-Profit',
    website: 'https://communitycare.org',
    logoUrl: '/placeholder.svg',
    focusAreas: ['Community Service', 'Family Support', 'Social Services']
  }
];

// Activity Hooks - Using real SDK with fallback
export const useActivities = () => {
  return useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      try {
        const response = await sdk.activity.activityControllerList();
        return response;
      } catch (error) {
        console.warn('Activity API failed, using fallback data:', error);
        return { data: [] };
      }
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

// Event Hooks - Using real SDK with fallback
export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      try {
        const response = await sdk.event.adminEventControllerList();
        return response;
      } catch (error) {
        console.warn('Events API failed, using fallback data:', error);
        return { data: mockEvents };
      }
    },
  });
};

export const useEvent = (id: string) => {
  return useQuery({
    queryKey: ['event', id],
    queryFn: async () => {
      const response = await sdk.event.adminEventControllerGet(id);
      return response;
    },
    enabled: !!id,
  });
};

export const useCreateEvent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await sdk.event.adminEventControllerCreate(data);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });
};

// Partner Hooks - Using real SDK with fallback
export const usePartners = () => {
  return useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      try {
        const response = await sdk.partner.partnerControllerList();
        return response;
      } catch (error) {
        console.warn('Partners API failed, using fallback data:', error);
        return { data: mockPartners };
      }
    },
  });
};

export const usePartner = (id: string) => {
  return useQuery({
    queryKey: ['partner', id],
    queryFn: async () => {
      const response = await sdk.partner.partnerControllerGet();
      return response;
    },
    enabled: !!id,
  });
};

// Volunteer Hooks - Using real SDK
export const useVolunteers = () => {
  return useQuery({
    queryKey: ['volunteers'],
    queryFn: async () => {
      const response = await sdk.volunteerSubmission.volunteerSubmissionControllerGetByEventId('default-event');
      return response;
    },
  });
};

export const useVolunteer = (id: string) => {
  return useQuery({
    queryKey: ['volunteer', id],
    queryFn: async () => {
      const response = await sdk.volunteerSubmission.volunteerSubmissionControllerGet(id);
      return response;
    },
    enabled: !!id,
  });
};

export { sdk };