"use client";
import { EllipsisVertical, LogOut, Soup } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
  useSidebar,
} from "../ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  SIDEBAR_MENU_LIST,
  SidebarMenuKey,
} from "@/constants/sidebar-constant";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import SignOut from "@/actions/auth-actions";
import { useAuthStore } from "@/stores/auth-store";

export default function AppSidebar() {
  const { isMobile } = useSidebar();
  const pathname = usePathname();
  const profile = useAuthStore((state) => state.profile);
  return (
    <Sidebar collapsible='icon'>
      {/* HEADER SIDEBAR */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={"lg"}
              asChild
            >
              <div className='font-semibold'>
                <div className='bg-primary font-medium p-2 justify-center rounded-md text-primary-foreground'>
                  <Soup className='size-4' />
                </div>
                Jadi Ria
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className='flex flex-col gap-2'>
            <SidebarMenu>
              {SIDEBAR_MENU_LIST[profile.role as SidebarMenuKey]?.map(
                (item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                    >
                      <a
                        href={item.url}
                        className={cn("px-4 py3 h-auto", {
                          "bg-sidebar-foreground text-sidebar hover:bg-sidebar-accent hover:text-accent-foreground":
                            pathname === item.url,
                        })}
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTBAR SIDEBAR */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size={"lg"}
                  className='data[state=open]:bg-sidebar-accent data[state=open]:text-sidebar-accent-foreground'
                >
                  <Avatar className='h-8 w-8 rounded-lg'>
                    <AvatarImage
                      src={profile.avatar_url}
                      alt={profile.name}
                    />
                    <AvatarFallback className='rounded-lg'>
                      {profile.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className='leading-tight'>
                    <h4 className='truncate font-medium'>{profile.name}</h4>
                    <p className='text-muted-foreground truncate text-xs capitalize'>
                      {profile.role}
                    </p>
                  </div>

                  <EllipsisVertical className='ml-auto size-4' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className='min-w-56 rounded-lg'
                side={isMobile ? "bottom" : "right"}
                align='end'
                sideOffset={4}
              >
                <DropdownMenuLabel className='p-0 font-normal'>
                  <div className='flex items-center gap-2 px-1 py-1.5'>
                    <Avatar className='h-8 w-8 rounded-lg'>
                      <AvatarImage
                        src={profile.avatar_url}
                        alt={profile.name}
                      />
                      <AvatarFallback className='rounded-lg'>
                        {profile.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className='leading-tight'>
                      <h4 className='truncate font-medium'>{profile.name}</h4>
                      <p className='text-muted-foreground truncate text-xs capitalize'>
                        {profile.role}
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => SignOut()}>
                    <LogOut />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
