
import { NavLink } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { BookOpen, FileText, Calendar, Bell, User, Settings, HelpCircle, Home } from "lucide-react";

const menu = [
  { name: "Dashboard", icon: Home, to: "/dashboard" },
  { name: "Courses", icon: BookOpen, to: "/dashboard/courses" },
  { name: "Assignments", icon: FileText, to: "/dashboard/assignments" },
  { name: "Materials", icon: Calendar, to: "/dashboard/materials" },
  { name: "Profile", icon: User, to: "/dashboard/profile" },
  { name: "Notifications", icon: Bell, to: "/dashboard/notifications" },
  { name: "Settings", icon: Settings, to: "/dashboard/settings" },
  { name: "Help", icon: HelpCircle, to: "/dashboard/help" }
];

export function StudentSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Student Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map(item => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={window.location.pathname === item.to} 
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-2 w-full ${isActive ? "text-green-600 font-bold" : ""}`
                      }
                      end={item.to === "/dashboard"}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
