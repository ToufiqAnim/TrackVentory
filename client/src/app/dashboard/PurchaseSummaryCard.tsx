"use client";
import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";

const PurchaseSummaryCard = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  const purchaseData = data?.purchaseSummary || [];

  const lastDataPoint = purchaseData[purchaseData.length - 1] || null;

  return (
    <div className="flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl">
      <div>
        <h1>Purchase Summary</h1>
      </div>
    </div>
  );
};

export default PurchaseSummaryCard;
