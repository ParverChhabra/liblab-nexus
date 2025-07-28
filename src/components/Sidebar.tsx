import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Activity, 
  Users, 
  Calendar, 
  Settings, 
  Database,
  Bell,
  Package,
  MapPin,
  Briefcase,
  Target,
  BarChart3
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  {
    title: "Overview",
    icon: BarChart3,
    items: [
      { name: "Dashboard", icon: Activity },
      { name: "Analytics", icon: BarChart3 },
    ],
  },
  {
    title: "Events & Activities",
    icon: Calendar,
    items: [
      { name: "Events", icon: Calendar },
      { name: "Activities", icon: Target },
      { name: "Variants", icon: Package },
      { name: "Bookings", icon: Briefcase },
    ],
  },
  {
    title: "Partners & Users",
    icon: Users,
    items: [
      { name: "Partners", icon: Users },
      { name: "Beneficiaries", icon: Users },
      { name: "Registrations", icon: Bell },
    ],
  },
  {
    title: "System",
    icon: Database,
    items: [
      { name: "Addresses", icon: MapPin },
      { name: "Banners", icon: Package },
      { name: "Settings", icon: Settings },
    ],
  },
];

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              PocSDK
            </h1>
            <p className="text-muted-foreground text-sm">API Management Dashboard</p>
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-6">
              {sidebarItems.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-2 px-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Button
                        key={item.name}
                        variant="ghost"
                        className="w-full justify-start gap-3 hover:bg-accent/50 hover:text-primary transition-colors"
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}