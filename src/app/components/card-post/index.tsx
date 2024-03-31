'use client'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import { Download, Heart, PenLine, Share, UserRound } from "lucide-react";
import Image from "next/image";


interface ICardPost {
    image: string
    title: string
    text: string
    author: string
    classname: string
}
export const CardPost = ({ image, title, text, author, classname }: ICardPost) => {
    return (
        <section className="flex flex-col pb-6">
            <div className="pl-4 gap-3 flex justify-start md:text-lg lg:text-xl items-end">
                <UserRound color="white"></UserRound>
                <h1 className="text-white font-bold text-md">{author}</h1>
            </div>

            <div className="  border-white border-opacity-25 border-y grid gap-2 grid-cols-1 md:grid-cols-3 p-2">
                <Image src={image} width={500} height={500} alt="" className="bg-contain md:w-full md:h-96 md:col-span-2 rounded-md" />
                <div className="p-2">
                    <p className="text-white font-bold text-2xl text-start mb-3">{title}</p>
                    <p className="text-white line-clamp-1 md:line-clamp-6 mb-3">{text}</p>
                    <div className="flex justify-start gap-2 w-full h-10 ">
                        <AlertDialog>
                            <AlertDialogTrigger className={cn("text-white text-sm font-bold hover:bg-white hover:text-black p-2 lg:mr-6", classname)}>Continuar...</AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>{title}</AlertDialogTitle>
                                    <AlertDialogDescription className="text-start">
                                        {text}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                {/* botoes */}
                                <AlertDialogFooter>
                                    <div className="  flex w-full justify-between">
                                        <div className="grid grid-cols-4 mt-4 md:mt-1 gap-2 text-black">
                                            <button><Heart /></button>
                                            <button><Share /></button>
                                            <button><Download /></button>
                                            <button><PenLine /></button>
                                        </div>
                                        <AlertDialogCancel>Sair</AlertDialogCancel>

                                    </div>

                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <div className="grid grid-cols-4 mt-1 gap-2 text-white">
                            <button><Heart /></button>
                            <button><Share /></button>
                            <button><Download /></button>
                            <button><PenLine /></button>
                        </div>
                    </div>
                </div>
            </div >
        </section>
    )
};