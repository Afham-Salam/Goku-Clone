import React from "react";

function List({ data }) {
  return (
    <div>
      <div className="bg-black lg:w-[400px] md:w-full h-fit p-5 relative z-20">
        <ul className="grid grid-cols-3 lg:gap-5 md:gap-4 gap-5 pt-10">
          {data.map((item) => (
            <li className="text-white text-sm hover:text-red-500 ">
              <a href="#" key={item.key} name={item.name}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default List;
