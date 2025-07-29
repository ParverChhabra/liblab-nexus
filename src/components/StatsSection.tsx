import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { number: '50+', label: 'API Services', description: 'Comprehensive service coverage' },
  { number: '1000+', label: 'Events Managed', description: 'Successfully organized events' },
  { number: '10K+', label: 'Volunteers', description: 'Active volunteer network' },
  { number: '99.9%', label: 'Uptime', description: 'Reliable platform performance' }
];

export function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Organizations Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of organizations using MoodyOS to manage their 
            events, volunteers, and partnerships effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-sm">
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}