// MoodyOS SDK Integration
// Generated from the comprehensive POC SDK

export interface PocSdkConfig {
  token: string;
  baseUrl?: string;
}

// Core SDK Services based on the documentation
export class PocSdk {
  private config: PocSdkConfig;

  constructor(config: PocSdkConfig) {
    this.config = {
      baseUrl: 'https://api.moodyos.com',
      ...config,
    };
  }

  // Activity Management
  get activity() {
    return new ActivityService(this.config);
  }

  get activityVariant() {
    return new ActivityVariantService(this.config);
  }

  get activityPartner() {
    return new ActivityPartnerService(this.config);
  }

  // Event Management
  get event() {
    return new EventService(this.config);
  }

  get eventContext() {
    return new EventContextService(this.config);
  }

  get eventParticipation() {
    return new EventParticipationService(this.config);
  }

  get eventCollateral() {
    return new EventCollateralService(this.config);
  }

  // Partner & Client Management
  get partner() {
    return new PartnerService(this.config);
  }

  get partnerPoc() {
    return new PartnerPocService(this.config);
  }

  get client() {
    return new ClientService(this.config);
  }

  // Volunteer Management
  get volunteerSubmission() {
    return new VolunteerSubmissionService(this.config);
  }

  // Authentication & Authorization
  get auth() {
    return new AuthService(this.config);
  }

  // Beneficiary Management
  get beneficiary() {
    return new BeneficiaryService(this.config);
  }

  get bnfAttribute() {
    return new BnfAttributeService(this.config);
  }

  // Benevity Integration
  get benevityRegistration() {
    return new BenevityRegistrationService(this.config);
  }

  get benevityCombination() {
    return new BenevityCombinationService(this.config);
  }

  // Booking & Registration
  get booking() {
    return new BookingService(this.config);
  }

  get bookingProvider() {
    return new BookingProviderService(this.config);
  }

  get registrations() {
    return new RegistrationsService(this.config);
  }

  // Content Management
  get banner() {
    return new BannerService(this.config);
  }

  get faq() {
    return new FaqService(this.config);
  }

  get testimonial() {
    return new TestimonialService(this.config);
  }

  // Logistics & Fulfillment
  get box() {
    return new BoxService(this.config);
  }

  get hostFulfillment() {
    return new HostFulfillmentService(this.config);
  }

  get shipment() {
    return new ShipmentService(this.config);
  }

  // Analytics & Reporting
  get analytics() {
    return new AnalyticsService(this.config);
  }

  get surveyResponse() {
    return new SurveyResponseService(this.config);
  }

  // System Management
  get bulkJob() {
    return new BulkJobService(this.config);
  }

  get developerApi() {
    return new DeveloperApiService(this.config);
  }

  get notification() {
    return new NotificationService(this.config);
  }

  // Geographic & Location
  get address() {
    return new AddressService(this.config);
  }

  get region() {
    return new RegionService(this.config);
  }

  get timezone() {
    return new TimezoneService(this.config);
  }

  // Calendar Integration
  get calendarInvite() {
    return new CalendarInviteService(this.config);
  }

  // User Management
  get host() {
    return new HostService(this.config);
  }

  get csm() {
    return new CsmService(this.config);
  }

  get programManager() {
    return new ProgramManagerService(this.config);
  }

  // Configuration
  get championsConfig() {
    return new ChampionsConfigService(this.config);
  }

  get checklist() {
    return new ChecklistService(this.config);
  }

  get scheduleQues() {
    return new ScheduleQuesService(this.config);
  }
}

// Base service class
abstract class BaseService {
  protected config: PocSdkConfig;

  constructor(config: PocSdkConfig) {
    this.config = config;
  }

  protected async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<{ data: T }> {
    const url = `${this.config.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Bearer ${this.config.token}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { data };
  }
}

// Activity Service Implementation
class ActivityService extends BaseService {
  async activityControllerList() {
    return this.request('/v2/activity');
  }

  async activityControllerCreate(input: any) {
    return this.request('/v2/activity', {
      method: 'POST',
      body: JSON.stringify(input),
    });
  }

  async activityControllerGet(id: string) {
    return this.request(`/v2/activity/${id}`);
  }

  async activityControllerUpdate(id: string, input: any) {
    return this.request(`/v2/activity/${id}`, {
      method: 'PUT',
      body: JSON.stringify(input),
    });
  }

  async activityControllerDisable(id: string, input: any) {
    return this.request(`/v2/activity/${id}/disable`, {
      method: 'POST',
      body: JSON.stringify(input),
    });
  }
}

// Auth Service Implementation
class AuthService extends BaseService {
  async authControllerLogin(type: string) {
    return this.request(`/v2/auth/login/${type}`, {
      method: 'POST',
    });
  }

  async authControllerLogout(type: string) {
    return this.request(`/v2/auth/logout/${type}`);
  }
}

// Placeholder service classes - these would be implemented based on the full documentation
class ActivityVariantService extends BaseService {}
class ActivityPartnerService extends BaseService {}
class EventService extends BaseService {}
class EventContextService extends BaseService {}
class EventParticipationService extends BaseService {}
class EventCollateralService extends BaseService {}
class PartnerService extends BaseService {}
class PartnerPocService extends BaseService {}
class ClientService extends BaseService {}
class VolunteerSubmissionService extends BaseService {}
class BeneficiaryService extends BaseService {}
class BnfAttributeService extends BaseService {}
class BenevityRegistrationService extends BaseService {}
class BenevityCombinationService extends BaseService {}
class BookingService extends BaseService {}
class BookingProviderService extends BaseService {}
class RegistrationsService extends BaseService {}
class BannerService extends BaseService {}
class FaqService extends BaseService {}
class TestimonialService extends BaseService {}
class BoxService extends BaseService {}
class HostFulfillmentService extends BaseService {}
class ShipmentService extends BaseService {}
class AnalyticsService extends BaseService {}
class SurveyResponseService extends BaseService {}
class BulkJobService extends BaseService {}
class DeveloperApiService extends BaseService {}
class NotificationService extends BaseService {}
class AddressService extends BaseService {}
class RegionService extends BaseService {}
class TimezoneService extends BaseService {}
class CalendarInviteService extends BaseService {}
class HostService extends BaseService {}
class CsmService extends BaseService {}
class ProgramManagerService extends BaseService {}
class ChampionsConfigService extends BaseService {}
class ChecklistService extends BaseService {}
class ScheduleQuesService extends BaseService {}

export default PocSdk;