"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { AlignJustify, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Footer } from "../footer";
import { SearchBar } from "../searchCountry";


interface InavBar {
    classname: string;
}

export const Navbar = ({ classname }: InavBar) => {
    const [burguercateg, setBurguercateg] = useState(false);
    const [categButton, setCategButton] = useState(false);
    return (
        <header className="h-20 flex items-center w-full justify-between p-2">
            <div className="max-w-7xl m-auto flex justify-between w-full">

                <Image src="/earthh.png" width={100} height={100} alt="" className="w-9 h-9 md:w-16 md:h-16 lg:w-16 lg:h-16 " />
                <SearchBar />
                {/*divs mobile */}
                {/*burguer button*/}
                <button className={`md:hidden ${burguercateg && ""}`}
                    onClick={() => setBurguercateg(!burguercateg)}>
                    <AlignJustify color="#ffffff" />
                </button>
                <div className={cn(`${burguercateg ? "block" : "hidden"} rounded-md absolute top-12 right-36`, classname)}>
                    <ul className=" p-4 gap-8 text-xm text-white lg:text-base ">
                        <li className="">
                            <Link href={"/"}>Home</Link>
                        </li>

                        <li>
                            <Link href={"/populares"}>Explorar</Link>
                        </li>
                        <li className={cn("", classname)}>
                            <button className={`flex ${categButton && ""}`}
                                onClick={() => setCategButton(!categButton)} >
                                CATEGORIAS

                            </button>
                        </li>
                    </ul>
                    {/* clique categorias */}
                    <div className={`${categButton ? "block" : "hidden"} bg-zinc-200 absolute top-25 grid grid-cols-1`}>
                        <ul className="p-4 gap-8 text-xm text-black lg:text-base ">
                            <li>
                                <Link href={"/"}>Cultura</Link>
                            </li>
                            <li>
                                <Link href={"/"}>História</Link>
                            </li>

                            <li>
                                <Link href={"/"}>Arte</Link>
                            </li>

                            <li>
                                <Link href={""}>Fauna</Link>
                            </li>
                            <li>
                                <Link href={""}>Flora</Link>
                            </li>

                        </ul>
                    </div>
                </div>

                {/*div desk */}
                <div className="hidden md:block">
                    <ul className="p-2 flex gap-2 text-xm lg:text-xl text-white mb-5">
                        <li className={cn(" p-2 rounded-sm hover:bg-white hover:text-black", classname)}>
                            <Link href={"/"} >HOME</Link>
                        </li>

                        <li className={cn("p-2 rounded-sm hover:bg-white hover:text-black", classname)}>
                            <Link href={"/populares"}>Explorar</Link>
                        </li>
                        <li className={cn("p-2 rounded-sm hover:bg-white hover:text-black", classname)}>
                            <button className={`flex ${categButton && ""}`}
                                onClick={() => setCategButton(!categButton)} >
                                CATEGORIAS
                                <ChevronDown></ChevronDown>
                            </button>
                        </li>
                    </ul>
                    <div className={`${categButton ? "block" : "hidden"} bg-zinc-200 absolute top-16`}>
                        <ul className="p-4 flex gap-8 text-xm text-black lg:text-base ">
                            <li>
                                <Link href={"/"}>Cultura</Link>
                            </li>
                            <li>
                                <Link href={"/"}>História</Link>
                            </li>

                            <li>
                                <Link href={"/"}>Arte</Link>
                            </li>

                            <li>
                                <Link href={""}>Fauna</Link>
                            </li>
                            <li>
                                <Link href={""}>Flora</Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <Sheet>
                    <SheetTrigger className={cn("mt-2 text-white rounded-sm h-12 w-32 justify-center items-center text-xl hover:bg-white hover:text-black", classname)}>Login</SheetTrigger>
                    <SheetContent className="bg-black">
                        <SheetHeader>
                            <SheetTitle className="text-5xl text-white mb-2">Login</SheetTitle>
                        </SheetHeader>
                        <section className=" min-h-md flex flex-col justify-center bg-white bg-opacity-85 py-12 px-4 sm:px-6 lg:px-8 ">
                            <SheetDescription className="mb-2  italic"><p>Faça seu login para interagir com a comunidade!</p>
                            </SheetDescription>
                            <form className=" max-w-md w-full">
                                <div className=" rounded-md shadow-sm">
                                    <div className="mb-2">
                                        <label htmlFor="username" className="sr-only">Nome de Usuário</label>
                                        <input id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Nome de Usuário" />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="password" className="sr-only">Senha</label>
                                        <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Senha" />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-1">
                                        Entrar
                                    </button>
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Cadastrar-se
                                    </button>
                                </div>
                            </form>
                            <div className="gap-2 flex h-11 justify-between text-xs ">
                                <a href="" className="border-b border-black bg-white p-2 rounded-sm hover:bg-black hover:text-white">Esqueci minha senha.</a>
                                <button className="border-b border-black flex justify-between bg-white hover:bg-black hover:text-white p-2 gap-1 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <path fill="#f5bc00" d="M43.6,20.1H42V20H24v8h11.3c-1.6,4.7-6.1,8-11.3,8c-6.6,0-12-5.4-12-12s5.4-12,12-12c3.1,0,5.8,1.2,8,3l5.7-5.7	C34,6.1,29.3,4,24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20C44,22.7,43.9,21.4,43.6,20.1z"></path><path fill="#6c19ff" d="M43.6,20.1L43.6,20.1L42,20H24v8h11.3c-0.8,2.2-2.2,4.2-4.1,5.6c0,0,0,0,0,0l6.2,5.2C37,39.2,44,34,44,24	C44,22.7,43.9,21.4,43.6,20.1z"></path><path fill="#3ddab4" d="M24,44c5.2,0,9.9-2,13.4-5.2l-6.2-5.2c-2,1.5-4.5,2.4-7.2,2.4c-5.2,0-9.6-3.3-11.3-7.9l-6.5,5	C9.5,39.6,16.2,44,24,44z"></path><path fill="#f55376" d="M6.3,14.7l6.6,4.8C14.7,15.1,19,12,24,12c3.1,0,5.8,1.2,8,3l5.7-5.7C34,6.1,29.3,4,24,4	C16.3,4,9.7,8.3,6.3,14.7z"></path><path fill="#2100c4" d="M26.6,35.7l6.8,6c1.5-0.8,2.9-1.8,4.1-2.9l-6.2-5.2C29.9,34.6,28.3,35.3,26.6,35.7z"></path><path fill="#eb0000" d="M9.2,10.6c-1.1,1.2-2.1,2.6-2.9,4.1l3.9,2.9l2.6,1.9c0.6-1.6,1.6-3,2.8-4.1L9.2,10.6z"></path>
                                    </svg>Login com o Google</button>
                            </div>
                        </section>
                        <section className="flex justify-center items-end h-48 md:h-60">
                            <Footer />

                        </section>
                        <div className='stars'>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                        </div>



                    </SheetContent>
                </Sheet>


            </div>
        </header>





    )
}