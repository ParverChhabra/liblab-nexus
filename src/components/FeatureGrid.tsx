import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Users, 
  Building, 
  BarChart3, 
  Clock, 
  MapPin, 
  Shield, 
  Zap 
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'Create, schedule, and manage events with comprehensive tools for registration, check-in, and feedback.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Users,
    title: 'Volunteer Coordination',
    description: 'Connect volunteers with opportunities, track participation, and manage volunteer programs efficiently.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Building,
    title: 'Partner Management',
    description: 'Manage client relationships, partner networks, and collaboration opportunities in one place.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Get insights with comprehensive reporting, real-time dashboards, and data-driven decision making.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Clock,
    title: 'Real-time Tracking',
    description: 'Monitor activities, registrations, and participation in real-time with live updates.',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: MapPin,
    title: 'Location Management',
    description: 'Manage venues, addresses, and location-based services for all your events and activities.',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Enterprise-grade security with role-based access control and data protection.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Zap,
    title: 'Automation',
    description: 'Automate workflows, notifications, and routine tasks to increase efficiency.',
    color: 'bg-yellow-100 text-yellow-600'
  }
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MoodyOS provides comprehensive tools to manage events, volunteers, partners, 
            and gain insights through advanced analytics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}