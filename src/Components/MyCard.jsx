import React from "react";
import { Rating } from "@mui/material";
export default function MyCard(props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col justify-center bg-blue-950 text-sky-100 shadow-md rounded-lg max-w-sm">
        <div className="p-5 flex justify-center">
          <img
            className="cursor-pointer w-3/4 rounded-t-lg transform transition-transform hover:scale-110"
            onClick={() => props.onProductClick(props.name)}
            src={props.image}
            alt="Product"
          />
        </div>
        <div className="px-5 pb-5">
          <span
            onClick={() => props.onProductClick(props.name)}
            className="cursor-pointer"
          >
            <h3 className="font-semibold text-xl tracking-tight">
              {props.name}
            </h3>
          </span>
          <div className="flex items-center mt-2.5 mb-5">
            <Rating name="read-only" value={props.ratings} readOnly />
            <span className="bg-blue-600 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              {props.ratings}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">${props.price}</span>
            <span
              onClick={() => props.onProductClick(props.name)}
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
