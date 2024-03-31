"use client"

import { Search } from "lucide-react"

export const SearchBar = () => {

    return (

        <section className=" flex justify-start">


            <div className=" flex justify-center h-11 mt-2  ">

                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="border border-gray-300 px-1 md:px-4 py-2 rounded-lg mr-2 focus:outline-none focus:border-blue-500 text-md"
                />
                <button className="hidden md:block md:px-4 md:py-2 text-white rounded-lg hover:bg-white hover:text-black focus:outline-none focus:bg-blue-600">
                    <Search />
                </button>
            </div>
        </section>

    )
}
