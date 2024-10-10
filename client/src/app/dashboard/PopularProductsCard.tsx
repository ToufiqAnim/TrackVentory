"use client";
import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";
import Rating from "../(components)/Ratings";

const PopularProductsCard = () => {
  const { data, isLoading } = useGetDashboardMetricsQuery();
  console.log(data);
  return (
    <div className="row-span-3 xl:row-span-6 ">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr />
          <div className="overflow-auto h-full">
            {data?.popularProducts?.map((product) => (
              <div
                key={product.productId}
                className="flex items-center justify-between gap-3 px-5 py-7 border-b"
              >
                <div className="flex items-center gap-3">
                  {/* <img src="" alt="" /> */}
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700">
                      {product.name}
                    </div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-500 text-xs">
                        ${product.price}
                      </span>
                      <span className="mx-2">|</span>
                      {<Rating rating={product.rating || 0} />}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PopularProductsCard;
