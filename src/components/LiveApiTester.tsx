import { useEffect, useState } from 'react';
import { usePartnerPocs, useCreatePartnerPoc, useUpdatePartnerPoc, useDeletePartnerPoc, useEvents, useActivityPartners, useCreateActivityPartner } from '@/lib/api';
import { useApiStore } from '@/store/apiStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Loader2, Plus, RefreshCw, AlertCircle, Edit, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function LiveApiTester() {
  const { apiToken } = useApiStore();
  const { toast } = useToast();

  // Partner POC Management
  const [pocName, setPocName] = useState('');
  const [pocDescription, setPocDescription] = useState('');
  const [editingPocId, setEditingPocId] = useState<string | null>(null);
  const createPocMutation = useCreatePartnerPoc();
  const updatePocMutation = useUpdatePartnerPoc();
  const deletePocMutation = useDeletePartnerPoc();

  // Activity Partner Creation
  const [partnerName, setPartnerName] = useState('');
  const [partnerLanguages, setPartnerLanguages] = useState('');
  const createPartnerMutation = useCreateActivityPartner();

  // Data fetching
  const { data: partnerPocs, isLoading: pocsLoading, error: pocsError, refetch: refetchPocs } = usePartnerPocs();
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
      if (editingPocId) {
        await updatePocMutation.mutateAsync({
          id: editingPocId,
          data: {
            name: pocName.trim(),
            description: pocDescription.trim(),
          }
        });
        
        toast({
          title: "Success",
          description: "Partner POC updated successfully",
        });
        setEditingPocId(null);
      } else {
        await createPocMutation.mutateAsync({
          name: pocName.trim(),
          description: pocDescription.trim(),
        });
        
        toast({
          title: "Success",
          description: "Partner POC created successfully",
        });
      }
      
      setPocName('');
      setPocDescription('');
    } catch (error) {
      toast({
        title: "Error",
        description: editingPocId ? "Failed to update Partner POC" : "Failed to create Partner POC",
        variant: "destructive",
      });
    }
  };

  const handleEditPoc = (id: string, name: string, description: string) => {
    setEditingPocId(id);
    setPocName(name);
    setPocDescription(description);
  };

  const handleCancelEdit = () => {
    setEditingPocId(null);
    setPocName('');
    setPocDescription('');
  };

  const handleDeletePoc = async (id: string) => {
    try {
      await deletePocMutation.mutateAsync(id);
      toast({
        title: "Success",
        description: "Partner POC deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete Partner POC",
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
        {/* Partner POC Management */}
        <Card>
          <CardHeader>
            <CardTitle>{editingPocId ? 'Update Partner POC' : 'Create Partner POC'}</CardTitle>
            <CardDescription>
              Test the Partner POC {editingPocId ? 'update' : 'creation'} endpoint
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
            <div className="flex gap-2">
              <Button 
                onClick={handleCreatePoc}
                disabled={createPocMutation.isPending || updatePocMutation.isPending}
                className="flex-1"
              >
                {(createPocMutation.isPending || updatePocMutation.isPending) ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : editingPocId ? (
                  <Edit className="mr-2 h-4 w-4" />
                ) : (
                  <Plus className="mr-2 h-4 w-4" />
                )}
                {editingPocId ? 'Update POC' : 'Create POC'}
              </Button>
              {editingPocId && (
                <Button 
                  variant="outline"
                  onClick={handleCancelEdit}
                  className="px-3"
                >
                  Cancel
                </Button>
              )}
            </div>
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

      {/* Partner POCs List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Partner POCs
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => refetchPocs()}
              disabled={pocsLoading}
            >
              <RefreshCw className={`h-4 w-4 ${pocsLoading ? 'animate-spin' : ''}`} />
            </Button>
          </CardTitle>
          <CardDescription>
            Manage your Partner POCs - Create, Update, Delete
          </CardDescription>
        </CardHeader>
        <CardContent>
          {pocsLoading && (
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading Partner POCs...
            </div>
          )}
          {pocsError && (
            <div className="text-red-500">
              Error loading Partner POCs: {pocsError.message}
            </div>
          )}
          {partnerPocs && (
            <div className="space-y-2">
              {Array.isArray(partnerPocs) && partnerPocs.length > 0 ? (
                partnerPocs.map((poc: any, index: number) => (
                  <div key={poc.id || index} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{poc.name || `POC ${index + 1}`}</div>
                        {poc.description && (
                          <div className="text-sm text-muted-foreground mt-1">{poc.description}</div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditPoc(poc.id, poc.name, poc.description || '')}
                          disabled={updatePocMutation.isPending}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeletePoc(poc.id)}
                          disabled={deletePocMutation.isPending}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-muted-foreground">No Partner POCs found. Create one above to get started.</div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

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