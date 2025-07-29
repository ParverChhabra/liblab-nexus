// API Configuration and SDK Integration
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { PocSdk, type SdkConfig } from './poc-sdk';

// Use the SdkConfig from the actual SDK
export type PocSdkConfig = SdkConfig;

// SDK instance singleton
let sdkInstance: PocSdk | null = null;

export const initializePocSdk = (config: PocSdkConfig) => {
  sdkInstance = new PocSdk({
    token: config.token,
    environment: config.environment || 'https://api.example.com'
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
      return await sdk.partnerPoc.createPartnerPoc(data);
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
      return await sdk.developerApi.getEventsV2();
    },
  });
};

export const useEvent = (eventId: string) => {
  return useQuery({
    queryKey: ['event', eventId],
    queryFn: async () => {
      const sdk = getPocSdk();
      return await sdk.developerApi.getEventByIdV2({ eventId });
    },
    enabled: !!eventId,
  });
};

export const useActivityPartners = (params?: any) => {
  return useQuery({
    queryKey: ['activityPartners', params],
    queryFn: async () => {
      const sdk = getPocSdk();
      return await sdk.activityPartner.getActivityPartners(params);
    },
  });
};

export const useUpdatePartnerPoc = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const sdk = getPocSdk();
      return await sdk.partnerPoc.updatePartnerPoc(id, data);
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
      return await sdk.partnerPoc.deletePartnerPoc(id);
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
      return await sdk.activityPartner.createActivityPartner(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activityPartners'] });
    },
  });
};

export { PocSdk };