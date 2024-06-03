"use client"
import Image from 'next/image';
import { useState } from 'react';
import '../../waterAnimate.css';

export const CreatePost = () => {
    const [open, setOpen] = useState(false);
    const [postContent, setPostContent] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlePostContentChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleCreatePost = () => {
        // Lógica para criar o post com o conteúdo em postContent
        console.log('Criando post com conteúdo:', postContent);
        // Aqui você pode adicionar a lógica para enviar o conteúdo para a API, por exemplo.
        // Depois de enviar, pode fechar o dialog:
        handleClose();
    };

    return (
        <section className="flex justify-center w-full h-48 mb-3">
            <div className="w-9/12 flex justify-center md:justify-between items-center mt-2 md:pl-6 relative">
                <button className="w-44 h-12 bg-white" onClick={handleClickOpen}>
                    Criar Post
                </button>
                <Image width={150} height={150} src="/earthh.png" alt="" className="hidden lg:block animate-myspin" />
                <div className="hidden md:block loader absolute inset-20 items-center justify-center">
                    <p className="text-center ml-96">HelloWorld</p>
                    <p className="text-center ml-96">HelloWorld</p>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-700 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg w-80">
                        <h2 className="text-xl font-bold mb-4">Criar Post</h2>
                        <textarea
                            className="w-full p-2 border rounded mb-4"
                            placeholder="Digite o conteúdo do post..."
                            value={postContent}
                            onChange={handlePostContentChange}
                        />
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-2"
                                onClick={handleCreatePost}
                            >
                                Criar
                            </button>
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                                onClick={handleClose}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};