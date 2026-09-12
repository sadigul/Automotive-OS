'use client';

import React from 'react';

export function EcommerceStorefrontDashboard() {
  return (
    <div className="w-full h-full bg-white overflow-y-auto select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/ecommerce-storefront.png"
        alt="Automotive E-Commerce Storefront"
        className="w-full h-auto block select-none pointer-events-none"
        loading="eager"
      />
    </div>
  );
}
