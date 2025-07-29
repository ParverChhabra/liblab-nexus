import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useApiStore } from '@/store/apiStore';
import { initializePocSdk } from '@/lib/api';
import { Settings, Key, Server } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ApiConfigDialog() {
  const { apiToken, environment, setApiToken, setEnvironment } = useApiStore();
  const [tempToken, setTempToken] = useState(apiToken || '');
  const [tempBaseUrl, setTempBaseUrl] = useState(environment);
  const { toast } = useToast();

  const handleSave = () => {
    console.log('Save button clicked', { tempToken, tempBaseUrl });
    if (!tempToken.trim()) {
      toast({
        title: "Error",
        description: "API token is required",
        variant: "destructive",
      });
      return;
    }

    setApiToken(tempToken.trim());
    setEnvironment(tempBaseUrl.trim());
    
    // Initialize SDK with new config
    initializePocSdk({
      token: tempToken.trim(),
      environment: tempBaseUrl.trim(),
    });

    toast({
      title: "Success",
      description: "API configuration saved successfully",
    });
  };

  const isConfigured = !!apiToken;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          API Configuration
        </CardTitle>
        <CardDescription>
          Configure your PocSDK API credentials to enable real API calls.
          {!isConfigured && (
            <span className="block mt-2 text-yellow-600 font-medium">
              ⚠️ API not configured - using mock data
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="baseUrl" className="flex items-center gap-2">
            <Server className="h-4 w-4" />
            Base URL
          </Label>
          <Input
            id="baseUrl"
            placeholder="https://api.yourservice.com"
            value={tempBaseUrl}
            onChange={(e) => setTempBaseUrl(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="apiToken" className="flex items-center gap-2">
            <Key className="h-4 w-4" />
            API Token
          </Label>
          <Input
            id="apiToken"
            type="password"
            placeholder="Enter your API token"
            value={tempToken}
            onChange={(e) => setTempToken(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Your token will be stored securely in your browser's local storage.
          </p>
        </div>

        <Button onClick={handleSave} className="w-full">
          Save Configuration
        </Button>
        
        {isConfigured && (
          <div className="text-center">
            <span className="text-sm text-green-600 font-medium">
              ✅ API configured and ready
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}