import { fetchLatestInvoices } from "@/app/lib/data";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { LatestInvoicesSkeleton } from "@/app/ui/skeletons";
import React, { Suspense } from "react";

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
      <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices  />
      </Suspense>
    </div>
  );
}
