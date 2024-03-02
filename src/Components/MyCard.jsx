import React from "react";
import { Rating } from "@mui/material";
export default function MyCard(props) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-slate-100 shadow-md rounded-lg max-w-sm">
        <a href={props.link}>
          <img className="rounded-t-lg p-8" src={props.image} alt="Product" />
        </a>
        <div className="px-5 pb-5">
          <a href={props.link}>
            <h3 className="text-gray-900 font-semibold text-xl tracking-tight">
              {props.name}
            </h3>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <Rating name="read-only" value={props.ratings} readOnly />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              {props.ratings}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">
              ${props.price}
            </span>
            <a
              href={props.link}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
