// API Configuration and SDK Integration
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// SDK Configuration Interface
interface PocSdkConfig {
  token: string;
  baseUrl?: string;
}

// Mock SDK class based on the liblab generated structure
class PocSdk {
  private config: PocSdkConfig;

  constructor(config: PocSdkConfig) {
    this.config = config;
  }

  get partnerPoc() {
    return {
      create: async (data: any) => this.request('POST', '/v2/partner/poc', data),
      update: async (id: string, data: any) => this.request('PUT', `/v2/partner/poc/${id}`, data),
      delete: async (id: string) => this.request('DELETE', `/v2/partner/poc/${id}`),
    };
  }

  get developerApi() {
    return {
      v2: {
        events: {
          list: async () => this.request('GET', '/v2/developer-api/v2/events'),
          get: async (eventId: string) => this.request('GET', `/v2/developer-api/v2/events/${eventId}`),
        },
        registrations: {
          create: async (data: any) => this.request('POST', '/v2/developer-api/v2/registrations', data),
          delete: async (registrationId: string) => this.request('DELETE', `/v2/developer-api/v2/registrations/${registrationId}`),
        },
      },
    };
  }

  get activityPartner() {
    return {
      list: async (params?: any) => this.request('GET', '/v2/activity-partner', undefined, params),
      create: async (data: any) => this.request('POST', '/v2/activity-partner', data),
      get: async (id: string) => this.request('GET', `/v2/activity-partner/${id}`),
      update: async (id: string, data: any) => this.request('PUT', `/v2/activity-partner/${id}`, data),
      delete: async (id: string) => this.request('DELETE', `/v2/activity-partner/${id}`),
    };
  }

  get booking() {
    return {
      syncRegistration: async (data: any) => this.request('POST', '/v2/booking/registration', data),
      bulkSyncRegistration: async (data: any) => this.request('POST', '/v2/booking/registration/bulk', data),
      findByThirdPartyId: async (thirdPartyId: string) => this.request('GET', `/v2/booking/third-party-id/${thirdPartyId}`),
    };
  }

  private async request(method: string, endpoint: string, data?: any, params?: any): Promise<any> {
    const baseUrl = this.config.baseUrl || 'https://api.example.com'; // Replace with actual API base URL
    const url = new URL(endpoint, baseUrl);
    
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined) {
          url.searchParams.append(key, params[key]);
        }
      });
    }

    const headers: HeadersInit = {
      'Authorization': `Bearer ${this.config.token}`,
      'Content-Type': 'application/json',
    };

    const config: RequestInit = {
      method,
      headers,
    };

    if (data) {
      config.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url.toString(), config);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      // Handle empty responses (204, etc.)
      if (response.status === 204 || response.headers.get('content-length') === '0') {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error(`API Request failed:`, error);
      throw error;
    }
  }
}

// SDK instance singleton
let sdkInstance: PocSdk | null = null;

export const initializePocSdk = (config: PocSdkConfig) => {
  sdkInstance = new PocSdk(config);
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
      // Since there's no list endpoint in swagger, we'll simulate
      return [];
    },
  });
};

export const useCreatePartnerPoc = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: any) => {
      const sdk = getPocSdk();
      return sdk.partnerPoc.create(data);
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
      return sdk.developerApi.v2.events.list();
    },
  });
};

export const useEvent = (eventId: string) => {
  return useQuery({
    queryKey: ['event', eventId],
    queryFn: async () => {
      const sdk = getPocSdk();
      return sdk.developerApi.v2.events.get(eventId);
    },
    enabled: !!eventId,
  });
};

export const useActivityPartners = (params?: any) => {
  return useQuery({
    queryKey: ['activityPartners', params],
    queryFn: async () => {
      const sdk = getPocSdk();
      return sdk.activityPartner.list(params);
    },
  });
};

export const useCreateActivityPartner = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: any) => {
      const sdk = getPocSdk();
      return sdk.activityPartner.create(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activityPartners'] });
    },
  });
};

export { PocSdk };
export type { PocSdkConfig };