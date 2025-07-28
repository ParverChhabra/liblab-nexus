import { useEffect, useState } from 'react';
import { useCreatePartnerPoc, useEvents, useActivityPartners, useCreateActivityPartner } from '@/lib/api';
import { useApiStore } from '@/store/apiStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Loader2, Plus, RefreshCw, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function LiveApiTester() {
  const { apiToken } = useApiStore();
  const { toast } = useToast();

  // Partner POC Creation
  const [pocName, setPocName] = useState('');
  const [pocDescription, setPocDescription] = useState('');
  const createPocMutation = useCreatePartnerPoc();

  // Activity Partner Creation
  const [partnerName, setPartnerName] = useState('');
  const [partnerLanguages, setPartnerLanguages] = useState('');
  const createPartnerMutation = useCreateActivityPartner();

  // Data fetching
  const { data: events, isLoading: eventsLoading, error: eventsError, refetch: refetchEvents } = useEvents();
  const { data: activityPartners, isLoading: partnersLoading, error: partnersError, refetch: refetchPartners } = useActivityPartners();

  const handleCreatePoc = async () => {
    if (!pocName.trim()) {
      toast({
        title: "Error",
        description: "POC name is required",
        variant: "destructive",
      });
      return;
    }

    try {
      await createPocMutation.mutateAsync({
        name: pocName.trim(),
        description: pocDescription.trim(),
      });
      
      setPocName('');
      setPocDescription('');
      
      toast({
        title: "Success",
        description: "Partner POC created successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create Partner POC",
        variant: "destructive",
      });
    }
  };

  const handleCreatePartner = async () => {
    if (!partnerName.trim()) {
      toast({
        title: "Error",
        description: "Partner name is required",
        variant: "destructive",
      });
      return;
    }

    try {
      const languages = partnerLanguages.split(',').map(lang => lang.trim()).filter(Boolean);
      
      await createPartnerMutation.mutateAsync({
        name: partnerName.trim(),
        partnerLanguages: languages,
      });
      
      setPartnerName('');
      setPartnerLanguages('');
      
      toast({
        title: "Success",
        description: "Activity Partner created successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create Activity Partner",
        variant: "destructive",
      });
    }
  };

  if (!apiToken) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-yellow-500" />
            API Configuration Required
          </CardTitle>
          <CardDescription>
            Please configure your API credentials to test live API calls.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Create Partner POC */}
        <Card>
          <CardHeader>
            <CardTitle>Create Partner POC</CardTitle>
            <CardDescription>
              Test the Partner POC creation endpoint
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                placeholder="POC Name"
                value={pocName}
                onChange={(e) => setPocName(e.target.value)}
              />
            </div>
            <div>
              <Textarea
                placeholder="POC Description"
                value={pocDescription}
                onChange={(e) => setPocDescription(e.target.value)}
                rows={3}
              />
            </div>
            <Button 
              onClick={handleCreatePoc}
              disabled={createPocMutation.isPending}
              className="w-full"
            >
              {createPocMutation.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Plus className="mr-2 h-4 w-4" />
              )}
              Create POC
            </Button>
          </CardContent>
        </Card>

        {/* Create Activity Partner */}
        <Card>
          <CardHeader>
            <CardTitle>Create Activity Partner</CardTitle>
            <CardDescription>
              Test the Activity Partner creation endpoint
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                placeholder="Partner Name"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="Languages (comma separated)"
                value={partnerLanguages}
                onChange={(e) => setPartnerLanguages(e.target.value)}
              />
            </div>
            <Button 
              onClick={handleCreatePartner}
              disabled={createPartnerMutation.isPending}
              className="w-full"
            >
              {createPartnerMutation.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Plus className="mr-2 h-4 w-4" />
              )}
              Create Partner
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Events List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Events
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => refetchEvents()}
              disabled={eventsLoading}
            >
              <RefreshCw className={`h-4 w-4 ${eventsLoading ? 'animate-spin' : ''}`} />
            </Button>
          </CardTitle>
          <CardDescription>
            Live data from /v2/developer-api/v2/events
          </CardDescription>
        </CardHeader>
        <CardContent>
          {eventsLoading && (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading events...
            </div>
          )}
          {eventsError && (
            <div className="text-red-500">
              Error loading events: {eventsError.message}
            </div>
          )}
          {events && (
            <div className="space-y-2">
              {Array.isArray(events) && events.length > 0 ? (
                events.map((event: any, index: number) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="font-medium">{event.name || `Event ${index + 1}`}</div>
                    <div className="text-sm text-muted-foreground">{event.description}</div>
                  </div>
                ))
              ) : (
                <div className="text-muted-foreground">No events found</div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Activity Partners List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Activity Partners
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => refetchPartners()}
              disabled={partnersLoading}
            >
              <RefreshCw className={`h-4 w-4 ${partnersLoading ? 'animate-spin' : ''}`} />
            </Button>
          </CardTitle>
          <CardDescription>
            Live data from /v2/activity-partner
          </CardDescription>
        </CardHeader>
        <CardContent>
          {partnersLoading && (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading partners...
            </div>
          )}
          {partnersError && (
            <div className="text-red-500">
              Error loading partners: {partnersError.message}
            </div>
          )}
          {activityPartners && (
            <div className="space-y-2">
              {Array.isArray(activityPartners) && activityPartners.length > 0 ? (
                activityPartners.map((partner: any, index: number) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{partner.name || `Partner ${index + 1}`}</div>
                      {partner.isBenevity && (
                        <Badge variant="secondary">Benevity</Badge>
                      )}
                    </div>
                    {partner.partnerLanguages && (
                      <div className="text-sm text-muted-foreground mt-1">
                        Languages: {partner.partnerLanguages.join(', ')}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-muted-foreground">No partners found</div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}