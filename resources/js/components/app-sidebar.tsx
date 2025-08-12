import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link , usePage } from '@inertiajs/react';
import { User, History , LayoutGrid , CalendarDays , Bell } from 'lucide-react';
import AppLogo from './app-logo';





export function AppSidebar() {
    const mainNavItems: NavItem[] = [
        {
            title: 'Analysis',
            href: '/analysis',
            icon: LayoutGrid,
        },
        {
            title: 'Logs',
            href: '/logs',
            icon: LayoutGrid,
        },


    ];
    const { props } = usePage();
    const user = props.auth?.user;

    const footerNavItems: NavItem[] = [];
    if (user?.role === 'admin') {
        footerNavItems.push({
        title: 'Users',
        href: '/admin/users',
        icon: User,
        });
        footerNavItems.push({
        title: 'Activity Logs',
        href: '/admin/activity-logs',
        icon: History,
        });
    }



    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
