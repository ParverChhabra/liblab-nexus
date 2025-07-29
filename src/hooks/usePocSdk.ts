import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import PocSdk, { Environment } from '@/lib/poc-sdk';

// Initialize SDK with proper configuration
const sdk = new PocSdk({
  token: 'dev-token-123',
  baseUrl: 'https://api.moodyos.com',
  environment: Environment.DEFAULT
});

// Activity Hooks - Using real SDK
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

// Event Hooks - Using real SDK
export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await sdk.event.adminEventControllerList();
      return response;
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

// Partner Hooks - Using real SDK
export const usePartners = () => {
  return useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      const response = await sdk.partner.partnerControllerList();
      return response;
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