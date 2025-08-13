import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import {  Toaster } from 'react-hot-toast';
import 'react-calendar/dist/Calendar.css';
import { Head } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Analysis',
        href: '/analysis',
    },
];

export default function Dashboard() {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Call Flash Analysis" />
            <Toaster position="top-right" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <h1 className="text-2xl font-bold mb-4">Call Flash Analysis</h1>


            </div>
        </AppLayout>
    );
}

