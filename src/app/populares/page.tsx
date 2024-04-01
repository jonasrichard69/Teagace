import { CardPost } from "../components/card-post";
import { CreatePost } from "../components/createPost";
import { Navbar } from "../components/navbar";
import { joti_one } from "../layout";


export default function Populares() {

    return (


        <div className=" w-full h-full bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500">
            <div className='stars'>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>


            <Navbar classname="bg-pink-600" />

            <main className="h-full w-full max-w-7xl m-auto">
                <CreatePost />
                <section className="w-full flex justify-center">
                    <div className=" flex flex-col gap-4">
                        {/*header da area principal */}
                        <div className=" h-14 flex w-full justify-start text-white">
                            {/* Inicio do coisa */}
                            <p className={`${joti_one.className} text-5xl pl-2`}>Populares</p>
                        </div>
                        {/* post */}
                        <div className="h-full max-w-4xl flex justify-center flex-col">
                            {/* ------- */}
                            <CardPost classname="bg-pink-600" author="Myke Tyson" image="/camaleao.jpg" title="Osasco, Brasil" text="Em Osascos os camaleoes sao raros" tagCat="#fauna" />
                            <CardPost classname="bg-pink-600" author="Bambam" image="/surrealismo.jpg" title="Paris, França" text="Essa Obra de Arte foi feita em 1320 a.C" tagCat="#arte" />

                            {/* ------- */}

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
