import React from 'react'
import logo from "../../assets/logo.webp"
import { FaGithub } from 'react-icons/fa'
export default function Footer() {
    return (
        <footer className='rounded-t-3xl  bg-white shadow-sm mt-20'>
            <div className="container mx-auto p-6">
                <div className="flex items-center justify-between">
                    <div  className="flex items-center gap-2">

                        <img width={40} height={40} src={logo} alt="logo" />
                        <span className='text-xl font-bold'>Recipe</span>
                    </div>
                    <a href="https://github.com/mostafa3122/recipe-app" target='_blank' className=" font-bold  text-blue-500 flex items-center justify-center gap-2 "> <FaGithub /> <span >mostafa3122</span></a>
                </div>
                <div className="my-4 border-b border-gray-200"></div>
                <p className="text-center text-gray-500 text-sm">© 2026 <span className="italic">Mostafa Helal</span>. All Rights Reserved.</p>
            </div>
        </footer>
    )
}
