/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Products({ productItems }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {productItems?.map((items) => (
          <div key={items.id} className="flex justify-center items-center">
            <div className="p-10 md: rounded-2xl shadow-md bg-slate-100 m-5 space-y-2">
              <div>
                <img src={items.image} alt={items.name} className="w-40 h-48" />
              </div>
              <div className="flex justify-center items-center ">
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {items.name}
                    </h3>
                  </div>
                  <div>{`$${items.price}`}</div>
                  <div className="flex items-center space-x-2 btn-1">
                    <button>Add to Cart</button>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
