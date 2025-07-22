import { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"
const section1 = () => {

    const [darkMode, setDarkMode] = useState(false)

    return (
       <div className="dark:bg-[#091540] dark:bg-full">
         <div className="pt-3 px ">
            <div className="rounded-full px-4 py-2 pt-[] dark:bg-[#333333] mx-8 font-[15px] border border-border-[oklch(70.7% 0.022 261.325)]  flex justify-between  dark:-bg-[#212636]">
                <div><img className="w-[150px]" src="src/assets/images/logo.svg" alt="" /></div>
                <ThemeToggle />

            </div>
        </div>
       </div>

    )

}
export default section1