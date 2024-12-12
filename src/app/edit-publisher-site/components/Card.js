import { useRouter } from "next/navigation";
import React from "react";

export default function Card({
  title,
  name,
  description,
  image,
  label,
  onclick,
  indx,
}) {
  const router = useRouter();
  return (
    <div
      className="w-full max-w-4xl mx-auto bg-gray-700 rounded-2xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg group sticky border-white/50 border"
      style={{ top: indx * 3 }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-2/5 h-[300px] md:h-auto">
          <img
            src={image}
            alt="Card Preview"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between space-y-4 ">
          <div>
            <h2 className="text-2xl font-bold  mb-3 line-clamp-2">{name}</h2>
            <p className="text-gray-100/50 text-base leading-relaxed line-clamp-3 mb-4">
              {description}
            </p>
          </div>

          <div>
            <button
              className="w-full bg-gray-800 text-white py-2.5 px-4 rounded-lg 
                         font-semibold text-base 
                         transition-all duration-300 
                         hover:bg-gray-800/80 
                         active:scale-[0.98] 
                         focus:outline-none 
                         focus:ring-2 
                         focus:ring-gray-500 
                         focus:ring-opacity-50"
              onClick={() =>
                router.push("/create-publisher-site?publisher=" + name)
              }
            >
              {label}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
