import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ApiEndpointCard } from "@/components/ApiEndpointCard";
import { StatsCard } from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Users, 
  Calendar, 
  Database,
  TrendingUp,
  Server,
  Zap,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

// Sample API endpoints from the swagger.json
const apiEndpoints = [
  {
    method: "POST" as const,
    path: "/v2/partner/poc",
    summary: "Create a new Partner POC",
    description: "This endpoint allows clients to create a new Partner Proof of Concept (POC) by submitting the necessary details in the request body.",
    tags: ["Partner POC"]
  },
  {
    method: "GET" as const,
    path: "/v2/developer-api/v2/events",
    summary: "List all events",
    description: "Retrieve a list of all available events in the system.",
    tags: ["Developer API"]
  },
  {
    method: "POST" as const,
    path: "/v2/activity-partner",
    summary: "Create activity partner",
    description: "Create a new activity partner with specified configurations.",
    tags: ["Activity Partner"]
  },
  {
    method: "GET" as const,
    path: "/v2/activity",
    summary: "List activities",
    description: "Get a comprehensive list of all activities.",
    tags: ["Activity"]
  },
  {
    method: "POST" as const,
    path: "/v2/booking/registration",
    summary: "Sync registration",
    description: "Synchronize registration data with external booking providers.",
    tags: ["Booking"]
  },
  {
    method: "DELETE" as const,
    path: "/v2/partner/poc/{id}",
    summary: "Delete a Partner POC",
    description: "Remove a specific Partner POC from the system.",
    tags: ["Partner POC"]
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredEndpoints = apiEndpoints.filter(endpoint => 
    endpoint.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
    endpoint.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
                  PocSDK API Dashboard
                </h1>
                <p className="text-lg text-primary-foreground/80 mb-6">
                  Manage your Partner POCs, Activities, Events, and Bookings through our comprehensive API platform. 
                  Built with liblab-generated TypeScript SDK for seamless integration.
                </p>
                <div className="flex gap-4">
                  <Button variant="secondary" size="lg" className="bg-white/10 hover:bg-white/20 border-white/20">
                    View Documentation
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                    Try API
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Endpoints"
              value="50+"
              description="Available API endpoints"
              icon={Server}
              trend={{ value: 12, isPositive: true }}
            />
            <StatsCard
              title="Active Partners"
              value="1,247"
              description="Registered partners"
              icon={Users}
              trend={{ value: 8, isPositive: true }}
            />
            <StatsCard
              title="Events Created"
              value="3,891"
              description="This month"
              icon={Calendar}
              trend={{ value: 15, isPositive: true }}
            />
            <StatsCard
              title="API Calls"
              value="127.5K"
              description="Total requests"
              icon={Activity}
              trend={{ value: 23, isPositive: true }}
            />
          </div>

          {/* API Endpoints Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">API Endpoints</h2>
                <p className="text-muted-foreground">
                  Explore and test the available API endpoints
                </p>
              </div>
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                v1.0.0
              </Badge>
            </div>

            {/* Search */}
            <div className="max-w-md">
              <Input
                placeholder="Search endpoints, methods, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-muted/50"
              />
            </div>

            {/* Endpoints Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredEndpoints.map((endpoint, index) => (
                <ApiEndpointCard
                  key={index}
                  method={endpoint.method}
                  path={endpoint.path}
                  summary={endpoint.summary}
                  description={endpoint.description}
                  tags={endpoint.tags}
                />
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Test</h3>
              <div className="space-y-4 p-4 border rounded-lg bg-muted/20">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Method</label>
                    <select className="w-full mt-1 p-2 border rounded bg-background">
                      <option>GET</option>
                      <option>POST</option>
                      <option>PUT</option>
                      <option>DELETE</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Endpoint</label>
                    <Input placeholder="/v2/partner/poc" className="mt-1" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Request Body</label>
                  <Textarea 
                    placeholder='{"name": "Test POC", "description": "Sample description"}'
                    className="mt-1 font-mono text-sm"
                    rows={3}
                  />
                </div>
                <Button className="w-full">
                  <Zap className="mr-2 h-4 w-4" />
                  Send Request
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">SDK Integration</h3>
              <div className="p-4 border rounded-lg bg-muted/20">
                <pre className="text-sm text-muted-foreground">
{`import { PocSdk } from 'poc-sdk';

const sdk = new PocSdk({
  token: 'YOUR_API_TOKEN'
});

// Create a new partner POC
const response = await sdk
  .partnerPoc
  .create({
    name: "New POC",
    description: "Description"
  });`}
                </pre>
                <Button variant="outline" className="mt-4 w-full">
                  <Globe className="mr-2 h-4 w-4" />
                  View SDK Documentation
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
