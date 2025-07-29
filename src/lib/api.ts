// API Configuration and SDK Integration
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import PocSdk, { type PocSdkConfig } from './poc-sdk';

// SDK instance singleton
let sdkInstance: PocSdk | null = null;

export const initializePocSdk = (config: PocSdkConfig) => {
  sdkInstance = new PocSdk({
    token: config.token,
    baseUrl: config.baseUrl || 'https://api.moodyos.com'
  });
  return sdkInstance;
};

export const getPocSdk = (): PocSdk => {
  if (!sdkInstance) {
    throw new Error('PocSdk not initialized. Call initializePocSdk first.');
  }
  return sdkInstance;
};

// React Query Hooks for API calls
export const usePartnerPocs = () => {
  return useQuery({
    queryKey: ['partnerPocs'],
    queryFn: async () => {
      // Since there's no list endpoint, we'll return empty array
      return [];
    },
  });
};

export const useCreatePartnerPoc = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: any) => {
      const sdk = getPocSdk();
      return await sdk.partnerPoc.partnerPocControllerCreate(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['partnerPocs'] });
    },
  });
};

export const useEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const sdk = getPocSdk();
      return await sdk.event.adminEventControllerList();
    },
  });
};

export const useEvent = (eventId: string) => {
  return useQuery({
    queryKey: ['event', eventId],
    queryFn: async () => {
      const sdk = getPocSdk();
      return await sdk.event.adminEventControllerGet(eventId);
    },
    enabled: !!eventId,
  });
};

export const useActivityPartners = (params?: any) => {
  return useQuery({
    queryKey: ['activityPartners', params],
    queryFn: async () => {
      const sdk = getPocSdk();
      return await sdk.activityPartner.activityPartnerControllerList();
    },
  });
};

export const useUpdatePartnerPoc = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const sdk = getPocSdk();
      return await sdk.partnerPoc.partnerPocControllerUpdate(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['partnerPocs'] });
    },
  });
};

export const useDeletePartnerPoc = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const sdk = getPocSdk();
      return await sdk.partnerPoc.partnerPocControllerDelete();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['partnerPocs'] });
    },
  });
};

export const useCreateActivityPartner = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: any) => {
      const sdk = getPocSdk();
      return await sdk.activityPartner.activityPartnerControllerCreate(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activityPartners'] });
    },
  });
};

export { PocSdk };