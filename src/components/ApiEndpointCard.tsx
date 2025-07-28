import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Play, Code } from "lucide-react";

interface ApiEndpointCardProps {
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  summary: string;
  description?: string;
  tags?: string[];
}

const methodColors = {
  GET: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  POST: "bg-green-500/10 text-green-500 border-green-500/20",
  PUT: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  DELETE: "bg-red-500/10 text-red-500 border-red-500/20",
};

export function ApiEndpointCard({ method, path, summary, description, tags }: ApiEndpointCardProps) {
  return (
    <Card className="hover:shadow-elegant transition-all duration-300 hover:scale-[1.01] bg-gradient-to-br from-card to-card/50 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Badge className={cn("font-mono text-xs px-2 py-1", methodColors[method])}>
              {method}
            </Badge>
            <code className="text-sm font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
              {path}
            </code>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Play className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Code className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <CardTitle className="text-base leading-tight">{summary}</CardTitle>
        {description && (
          <CardDescription className="text-sm leading-relaxed">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      {tags && tags.length > 0 && (
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}