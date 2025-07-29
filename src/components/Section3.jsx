import React, { useEffect, useState } from 'react';
import data from './data.json'
const Section3 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setfilter] = useState([])

  const handleAll = ()  => {
    setfilter(data)
  }

  const handleActive = () => {
    const actives = data.filter((item) => item.isActive === true);
    setfilter(actives);
  };

  const handleInactive = () => {
    const Inactives = data.filter((item) => item.isActive === false);
    setfilter(Inactives);
  };



  useEffect(() => {
    setfilter(data)
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false)
    }
  }, [darkMode]);



  return (
    <>
    <div className="dark:bg-[#091540] ">
      <div className="mx-8 ">
        <div className="pt-[30px] flex  justify-between ">
        <h1 className="font-bold text-[20px]">Extension list</h1>

        <div className="flex gap-4">
          <button
            onClick={()=>{handleAll()}}
            className={`rounded-full border border-grey font-fraunces w-[40px] px-2 py-1 flex justify-center items-center text-sm dark:text-white dark:bg-[#333333]
            }`}
          >
            All
          </button>
          <button
            onClick={()=>{handleActive()}}
            className={`rounded-full border font-fraunces border-grey w-[60px] px-2 py-1 flex justify-center dark:bg-[#333333] dark:text-white items-center text-sm ${
              darkMode ? 'bg-[#212636] text-white' : 'bg-white text-black'
            }`}
            
          >
            Active
          </button>
          <button
            onClick={()=>{handleInactive()}}
            className={`rounded-full border border-grey font-fraunces w-[80px] px-2 py-1 flex dark:bg-[#333333] dark:text-white  justify-center items-center text-sm ${
              darkMode ? 'bg-[#212636] text-white' : 'bg-white text-black'
            }`}
          >
            Inactive
          </button>
        </div>
      </div>

      </div>
    </div>
    <div className="min-h-screen dark:bg-[#091540] justify-center items-center  ">

      <div className="flex flex-wrap md:items-center md:justify-center justify-between gap-5 font-fraunces pt-5">
        {filter.map((item, index) => (
          <div
            key={index}
            className={`w-[400px] border border-gray-300 dark:border-gray-600 pr-8 py-5 dark:bg-[#333333] dark:text-white pl-3 rounded-[20px] shadow-md ${darkMode && 'bg-[#2a2f45]'}`}
          >
            <div className="flex gap-6">
              <img className="w-[100px] h-[100px]" src={item.logo} alt={item.title} />
              <div>
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <button className="rounded-full w-[80px] text-black bg-white dark:bg-[#333333] dark:text-white dark:border-white border py-1">
                Remove
              </button>
              <label htmlFor={`check${index}`} className="relative cursor-pointer">
                <input type="checkbox" id={`check${index}`} 
                checked={item?.isActive}
                className="sr-only peer" />
                <div className="w-[60px] h-[35px] bg-gray-400 rounded-full peer-checked:bg-red-500 transition-all duration-500 relative"></div>
                <span className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full transition-all duration-500 peer-checked:translate-x-7 border"></span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Section3;
