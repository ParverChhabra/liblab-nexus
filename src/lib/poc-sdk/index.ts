// PocSDK TypeScript implementation based on liblab generated code
// This file recreates the SDK structure from your GitHub repository

// Environment configuration
export enum Environment {
  DEFAULT = 'https://api.example.com'
}

// SDK Configuration interface
export interface SdkConfig {
  token: string;
  environment?: string | Environment;
  timeout?: number;
}

// Base HTTP client
class HttpClient {
  private config: SdkConfig;

  constructor(config: SdkConfig) {
    this.config = config;
  }

  async request<T>(method: string, path: string, data?: any, params?: Record<string, any>): Promise<T> {
    const baseUrl = this.config.environment || Environment.DEFAULT;
    const url = new URL(path, baseUrl);
    
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined) {
          url.searchParams.append(key, String(params[key]));
        }
      });
    }

    const headers: HeadersInit = {
      'Authorization': `Bearer ${this.config.token}`,
      'Content-Type': 'application/json',
    };

    const requestConfig: RequestInit = {
      method,
      headers,
      signal: AbortSignal.timeout(this.config.timeout || 30000),
    };

    if (data && method !== 'GET') {
      requestConfig.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(url.toString(), requestConfig);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      // Handle empty responses
      if (response.status === 204 || response.headers.get('content-length') === '0') {
        return null as T;
      }

      return await response.json();
    } catch (error) {
      console.error(`API Request failed:`, error);
      throw error;
    }
  }
}

// Partner POC Service
export class PartnerPocService {
  constructor(private httpClient: HttpClient) {}

  async createPartnerPoc(data: any) {
    return this.httpClient.request('POST', '/v2/partner/poc', data);
  }

  async updatePartnerPoc(id: string, data: any) {
    return this.httpClient.request('PUT', `/v2/partner/poc/${id}`, data);
  }

  async deletePartnerPoc(id: string) {
    return this.httpClient.request('DELETE', `/v2/partner/poc/${id}`);
  }
}

// Developer API Service
export class DeveloperApiService {
  constructor(private httpClient: HttpClient) {}

  async getEventsV2() {
    return this.httpClient.request('GET', '/v2/developer-api/v2/events');
  }

  async getEventByIdV2(params: { eventId: string }) {
    return this.httpClient.request('GET', `/v2/developer-api/v2/events/${params.eventId}`);
  }

  async createRegistrationV2(data: any) {
    return this.httpClient.request('POST', '/v2/developer-api/v2/registrations', data);
  }

  async deleteRegistrationV2(params: { registrationId: string }) {
    return this.httpClient.request('DELETE', `/v2/developer-api/v2/registrations/${params.registrationId}`);
  }
}

// Activity Partner Service
export class ActivityPartnerService {
  constructor(private httpClient: HttpClient) {}

  async getActivityPartners(params?: any) {
    return this.httpClient.request('GET', '/v2/activity-partner', undefined, params);
  }

  async createActivityPartner(data: any) {
    return this.httpClient.request('POST', '/v2/activity-partner', data);
  }

  async getActivityPartnerById(params: { id: string }) {
    return this.httpClient.request('GET', `/v2/activity-partner/${params.id}`);
  }

  async updateActivityPartner(params: { id: string }, data: any) {
    return this.httpClient.request('PUT', `/v2/activity-partner/${params.id}`, data);
  }

  async deleteActivityPartner(params: { id: string }) {
    return this.httpClient.request('DELETE', `/v2/activity-partner/${params.id}`);
  }
}

// Booking Service
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  async syncRegistration(data: any) {
    return this.httpClient.request('POST', '/v2/booking/registration', data);
  }

  async bulkSyncRegistration(data: any) {
    return this.httpClient.request('POST', '/v2/booking/registration/bulk', data);
  }

  async findByThirdPartyId(params: { thirdPartyId: string }) {
    return this.httpClient.request('GET', `/v2/booking/third-party-id/${params.thirdPartyId}`);
  }
}

// Main PocSdk class
export class PocSdk {
  private httpClient: HttpClient;
  
  // Service instances
  public readonly partnerPoc: PartnerPocService;
  public readonly developerApi: DeveloperApiService;
  public readonly activityPartner: ActivityPartnerService;
  public readonly booking: BookingService;

  constructor(config: SdkConfig) {
    this.httpClient = new HttpClient(config);
    
    // Initialize services
    this.partnerPoc = new PartnerPocService(this.httpClient);
    this.developerApi = new DeveloperApiService(this.httpClient);
    this.activityPartner = new ActivityPartnerService(this.httpClient);
    this.booking = new BookingService(this.httpClient);
  }

  // Getter for token (for backward compatibility)
  set token(token: string) {
    // Note: In a real implementation, you'd want to update the httpClient config
    console.warn('Token setter called - consider reinitializing the SDK');
  }
}

export default PocSdk;