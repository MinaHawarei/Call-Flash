import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { toast, Toaster } from 'react-hot-toast';
import 'react-calendar/dist/Calendar.css';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Technical LAB Reservation',
        href: '/admin-reservation',
    },
];

export default function Dashboard() {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <Toaster position="top-right" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                {/* Calendar Section */}
                <div>
                    <h1> Weclome to Dashbord</h1>
                </div>
            </div>
        </AppLayout>
    );
}
