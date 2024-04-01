"use client"
import Image from 'next/image';
import '../../waterAnimate.css';

export const CreatePost = () => {
    return (
        <section className=" flex justify-center w-full h-48 mb-3">
            <div className="  w-9/12 flex justify-center md:justify-between items-center mt-2 md:pl-6 relative">
                <button className="w-44 h-12 bg-white">Criar Post</button>
                {/* botar uma imagem aqui */}
                <Image width={150} height={150} src="/earthh.png" alt="" className='hidden lg:block animate-myspin' />
                <div className="hidden md:block loader absolute inset-20 items-center justify-center">
                    <p className="text-center ml-96">HelloWorld</p>
                    <p className="text-center ml-96">HelloWorld</p>
                </div>
            </div>
        </section>
    );
};

