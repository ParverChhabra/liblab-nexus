import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, Globe, Users, Search } from 'lucide-react';
import { usePartners } from '@/hooks/usePocSdk';

const Partners = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: partnersResponse, isLoading, error } = usePartners();
  const partners = partnersResponse?.data || [];

  const filteredPartners = partners.filter(partner =>
    partner.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Partners</h1>
              <p className="text-muted-foreground">
                Discover organizations making a difference in our communities
              </p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search partners..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 w-full md:w-80"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded"></div>
                    <div className="h-3 bg-muted rounded w-4/5"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Unable to load partners at this time.</p>
            <Button variant="outline" className="mt-4">
              Try Again
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {filteredPartners.length} partners found
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPartners.map((partner) => (
                <Card key={partner.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {partner.description}
                        </CardDescription>
                      </div>
                      {partner.logoUrl && (
                        <img
                          src={partner.logoUrl}
                          alt={`${partner.name} logo`}
                          className="h-12 w-12 rounded-lg object-cover"
                        />
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {partner.focusAreas && partner.focusAreas.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {partner.focusAreas.slice(0, 3).map((area, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <div className="space-y-2 text-sm text-muted-foreground">
                      {partner.address && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{partner.address}</span>
                        </div>
                      )}
                      
                      {partner.website && (
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4" />
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                      )}

                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{partner.type} Partner</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPartners.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No partners found matching your search.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Partners;