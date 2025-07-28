import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ApiConfigDialog } from "@/components/ApiConfigDialog";
import { LiveApiTester } from "@/components/LiveApiTester";
import { StatsCard } from "@/components/StatsCard";
import { useApiStore } from "@/store/apiStore";
import { initializePocSdk } from "@/lib/api";
import { 
  Activity, 
  Users, 
  Calendar, 
  Database,
  Settings
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const { apiToken, baseUrl } = useApiStore();
  const [activeTab, setActiveTab] = useState<'config' | 'api' | 'overview'>('overview');

  // Initialize SDK when API config changes
  useEffect(() => {
    if (apiToken && baseUrl) {
      initializePocSdk({
        token: apiToken,
        baseUrl,
      });
    }
  }, [apiToken, baseUrl]);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main className="flex-1 space-y-8 p-6">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-glow p-8 text-primary-foreground">
            <div className="absolute inset-0 opacity-20">
              <img 
                src={heroImage} 
                alt="API Dashboard" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold mb-4">
                  PocSDK Live Integration
                </h1>
                <p className="text-lg text-primary-foreground/80 mb-6">
                  Real API integration with the liblab-generated PocSDK. Configure your credentials and start making live API calls to manage Partners, Events, Activities, and Bookings.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setActiveTab('config')}
                    className={`px-6 py-2 rounded-lg transition-colors ${
                      activeTab === 'config' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/15'
                    }`}
                  >
                    <Settings className="mr-2 h-4 w-4 inline" />
                    API Config
                  </button>
                  <button
                    onClick={() => setActiveTab('api')}
                    className={`px-6 py-2 rounded-lg transition-colors ${
                      activeTab === 'api' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/15'
                    }`}
                  >
                    Live API Test
                  </button>
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-6 py-2 rounded-lg transition-colors ${
                      activeTab === 'overview' ? 'bg-white/20' : 'bg-white/10 hover:bg-white/15'
                    }`}
                  >
                    Overview
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content based on active tab */}
          {activeTab === 'config' && (
            <div className="flex justify-center">
              <ApiConfigDialog />
            </div>
          )}

          {activeTab === 'api' && (
            <LiveApiTester />
          )}

          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                  title="API Status"
                  value={apiToken ? "Connected" : "Not Connected"}
                  description={apiToken ? "Ready for live calls" : "Configure API credentials"}
                  icon={Database}
                  className={apiToken ? "border-green-500/20 bg-green-500/5" : "border-yellow-500/20 bg-yellow-500/5"}
                />
                <StatsCard
                  title="Total Endpoints"
                  value="50+"
                  description="Available API endpoints"
                  icon={Activity}
                />
                <StatsCard
                  title="SDK Version"
                  value="1.0.0"
                  description="liblab generated"
                  icon={Users}
                />
                <StatsCard
                  title="Integration"
                  value="React Query"
                  description="Real-time data fetching"
                  icon={Calendar}
                />
              </div>

              {/* SDK Integration Info */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Available Endpoints</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 border rounded">
                      <span>Partner POC Management</span>
                      <span className="text-green-600">✓ Integrated</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <span>Developer API v2</span>
                      <span className="text-green-600">✓ Integrated</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <span>Activity Partners</span>
                      <span className="text-green-600">✓ Integrated</span>
                    </div>
                    <div className="flex justify-between p-2 border rounded">
                      <span>Booking Management</span>
                      <span className="text-green-600">✓ Integrated</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">SDK Features</h3>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 border rounded-lg bg-muted/20">
                      <div className="font-medium text-green-600">✓ TypeScript Support</div>
                      <div className="text-muted-foreground">Full type safety with generated interfaces</div>
                    </div>
                    <div className="p-3 border rounded-lg bg-muted/20">
                      <div className="font-medium text-green-600">✓ React Query Integration</div>
                      <div className="text-muted-foreground">Automatic caching and background updates</div>
                    </div>
                    <div className="p-3 border rounded-lg bg-muted/20">
                      <div className="font-medium text-green-600">✓ Error Handling</div>
                      <div className="text-muted-foreground">Comprehensive error management</div>
                    </div>
                    <div className="p-3 border rounded-lg bg-muted/20">
                      <div className="font-medium text-green-600">✓ Authentication</div>
                      <div className="text-muted-foreground">Bearer token authentication</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
