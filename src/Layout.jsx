import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { BookOpen, Plus, Home, Heart, Coins } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Collection",
    url: createPageUrl("Collection"),
    icon: Home,
  },
  {
    title: "Add Saying",
    url: createPageUrl("AddSaying"),
    icon: Plus,
  },
  {
    title: "Token Launch",
    url: createPageUrl("TokenLaunch"),
    icon: Coins,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a9e037dda7ab1a74eb83af/1af94a540_cosmic_stairs_sparkling.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-indigo-900/60"></div>
      
      <style>{`
        :root {
          --nobleport-gold: #D4AF37;
          --nobleport-blue: #1e3a8a;
          --cosmic-purple: #8b5cf6;
          --cosmic-blue: #3b82f6;
          --glass-bg: rgba(255, 255, 255, 0.1);
          --glass-border: rgba(255, 255, 255, 0.2);
        }
      `}</style>
      
      <SidebarProvider>
        <div className="flex w-full relative z-10">
          <Sidebar className="border-r border-purple-400/40 bg-purple-950/95 backdrop-blur-xl">
            <SidebarHeader className="border-b border-purple-400/40 p-6 bg-purple-900/80">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a9e037dda7ab1a74eb83af/d4be7c51a_20250620_1106_NobleportTokenEmblem_simple_compose_01jy6xyt72e3rr6a4n7geqm37q2.png"
                    alt="Nobleport Token"
                    className="w-14 h-14 object-contain drop-shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-300/20 rounded-full blur-sm"></div>
                </div>
                <div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                    Bygone Sayings
                  </h2>
                  <p className="text-sm text-white font-medium">Nobleport Treasury of Wisdom</p>
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent className="p-4 bg-purple-950/90">
              <SidebarGroup>
                <SidebarGroupLabel className="text-xs font-bold text-white uppercase tracking-wider px-2 py-3">
                  Navigate
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navigationItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                          asChild 
                          className={`hover:bg-purple-700/60 hover:text-yellow-300 transition-all duration-300 rounded-xl mb-2 border border-transparent hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/30 ${
                            location.pathname === item.url 
                              ? 'bg-purple-700/70 text-yellow-300 border-purple-400/50 shadow-lg shadow-purple-500/40' 
                              : 'text-white'
                          }`}
                        >
                          <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-semibold text-base">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel className="text-xs font-bold text-white uppercase tracking-wider px-2 py-3">
                  Nobleport Stats
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <div className="px-4 py-3 space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <BookOpen className="w-4 h-4 text-purple-300" />
                      <span className="text-white font-medium">Total Sayings</span>
                      <span className="ml-auto font-bold text-yellow-300">0</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Heart className="w-4 h-4 text-purple-300" />
                      <span className="text-white font-medium">Favorites</span>
                      <span className="ml-auto font-bold text-yellow-300">0</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Coins className="w-4 h-4 text-purple-300" />
                      <span className="text-white font-medium">NBPT Launch</span>
                      <span className="ml-auto font-bold text-amber-300">Ready</span>
                    </div>
                  </div>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <main className="flex-1 flex flex-col relative">
            {/* Mobile header */}
            <header className="bg-purple-950/90 backdrop-blur-xl border-b border-purple-400/40 px-6 py-4 md:hidden">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-white/10 p-2 rounded-lg transition-colors duration-200 text-white" />
                <div className="flex items-center gap-3">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a9e037dda7ab1a74eb83af/d4be7c51a_20250620_1106_NobleportTokenEmblem_simple_compose_01jy6xyt72e3rr6a4n7geqm37q2.png"
                    alt="Nobleport Token"
                    className="w-8 h-8 object-contain"
                  />
                  <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent">
                    Bygone Sayings
                  </h1>
                </div>
              </div>
            </header>

            {/* Main content */}
            <div className="flex-1 relative">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}