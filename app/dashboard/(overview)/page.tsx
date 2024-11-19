import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { LogOut } from 'lucide-react';
import { signOut } from '@/auth';
export const metadata: Metadata = {
  title: 'Home',
};

export default async function Page() {
    return (
        <main>
        <header className='bg-blue-500 p-2 mb-4'>
        <form action={async () => {
            'use server';
            await signOut();
          }}>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <LogOut/>
          </button>
        </form> 
        </header>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<CardsSkeleton />}>
                <CardWrapper />
            </Suspense> 
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <Suspense fallback={<RevenueChartSkeleton />}>
                <RevenueChart />
            </Suspense>
            <Suspense fallback={<LatestInvoicesSkeleton />}>
                <LatestInvoices />
            </Suspense>
        </div>
        </main>
    );
}