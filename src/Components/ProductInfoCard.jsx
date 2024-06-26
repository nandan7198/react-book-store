import React from "react";
import { useState } from "react";
export default function ProductInfoCard(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mx-auto">
      <div className="flex bg-blue-950 shadow-md rounded-lg min-w-[70vw]">
        <div className="p-8 w-full min-w-36">
          <a href={props.product.link}>
            <img
              className="object-contain transform transition-transform hover:scale-110"
              src={props.product.image}
              alt="Product"
            />
          </a>
        </div>
        <div className="flex flex-col px-5 pb-5 pt-10">
          <a href={props.product.link}>
            <h3 className="text-sky-100 font-bold text-2xl tracking-tight">
              {props.product.name}
            </h3>
          </a>
          <div className="flex items-center mt-2.5 mb-4">
            {props.product.ratings && (
              <React.Fragment>
                {Array.from({ length: props.product.ratings }).map(
                  (_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  )
                )}
              </React.Fragment>
            )}
            <span className="bg-blue-600 text-sky-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
              {props.product.ratings}
            </span>
          </div>
          <div className="flex flex-col items-center whitespace-pre-wrap justify-between">
            <div>
              <div
                className={`overflow-hidden ${isExpanded ? "h-auto" : "h-24"}`}
              >
                <span className="text-sky-100">
                  {props.product.description}
                </span>
              </div>
              {!isExpanded ? "..." : ""}
              {isExpanded && (
                <button onClick={handleToggle} className="mt-2 text-blue-500">
                  Read Less
                </button>
              )}
              {!isExpanded && (
                <button onClick={handleToggle} className="mt-2 text-blue-500">
                  Read More
                </button>
              )}
            </div>
            <span className="text-3xl font-bold text-sky-100 mt-3 mb-3">
              ${props.product.price}
            </span>
            <a
              href={props.product.link}
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
