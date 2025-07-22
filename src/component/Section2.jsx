import { useState } from "react";

const Section2 = () => {
  const [darkMode] = useState(false); // Ideally should come as prop

  return (
    <div className="dark:bg-[#091540] ">
      <div className="mx-8 ">
        <div className="pt-[30px] flex  justify-between ">
        <h1 className="font-bold text-[20px]">Extension list</h1>

        <div className="flex gap-4">
          <button
            className={`rounded-full border border-grey font-sans w-[40px] px-2 py-1 flex justify-center items-center text-sm dark:text-white dark:bg-[#333333]
            }`}
          >
            All
          </button>
          <button
            className={`rounded-full border font-sans border-grey w-[60px] px-2 py-1 flex justify-center dark:bg-[#333333] dark:text-white items-center text-sm ${
              darkMode ? 'bg-[#212636] text-white' : 'bg-white text-black'
            }`}
          >
            Active
          </button>
          <button
            className={`rounded-full border border-grey font-sans w-[80px] px-2 py-1 flex dark:bg-[#333333] dark:text-white  justify-center items-center text-sm ${
              darkMode ? 'bg-[#212636] text-white' : 'bg-white text-black'
            }`}
          >
            Inactive
          </button>
        </div>
      </div>

      </div>
    </div>

  );
};

export default Section2;
