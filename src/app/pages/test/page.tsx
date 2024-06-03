import { CardPost } from "./components/card-post";
import { Navbar } from "./components/navbar";
import { SearchBar } from "./components/searchCountry";
import { joti_one } from "./layout";
import './stars.css';

export default function Home() {

    return (


        <div className=" w-full h-full bg-black">
            <div className='stars'>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
                <div className="star"></div>
            </div>

            <Navbar />

            <main className="h-full w-full max-w-7xl border border-red-500 m-auto">
                <SearchBar />
                <section className="w-full flex justify-center">
                    <div className="border border-blue-500 flex flex-col gap-4">
                        {/*header da area principal */}
                        <div className="border border-orange-400 h-14 flex w-full justify-center text-white">
                            {/* Inicio do coisa */}
                            <p className={`${joti_one.className} text-5xl`}>Novidades</p>
                        </div>
                        {/* post */}
                        <div className="border border-yellow-400 h-full max-w-4xl flex justify-center flex-col">
                            {/* ------- */}
                            <CardPost author="Myke Tyson" image="/muralhadachina.jpg" title="China" text="A China, conhecida como Terra dos Sorrisos, encanta com suas praias paradisíacas de águas cristalinas, templos ornamentados e uma rica cultura. Bangcoc, sua capital, é uma metrópole vibrante onde arranha-céus modernos contrastam com templos budistas antigos. A gastronomia tailandesa, com pratos como o Pad Thai e o curry, é uma explosão de sabores. Além disso, o país oferece atividades como trekking na selva, mergulho em recifes de corais e visitas a mercados flutuantes. A Tailândia, conhecida como Terra dos Sorrisos" />
                            <CardPost author="Bambam" image="/fotoriodejaneiro.jpeg" title="Tailândia" text="A Tailândia, conhecida como Terra dos Sorrisos, encanta com suas praias paradisíacas de águas cristalinas, templos ornamentados e uma rica cultura. Bangcoc, sua capital, é uma metrópole vibrante onde arranha-céus modernos contrastam com templos budistas antigos. A gastronomia tailandesa, com pratos como o Pad Thai e o curry, é uma explosão de sabores. Além disso, o país oferece atividades como trekking na selva, mergulho em recifes de corais e visitas a mercados flutuantes. A Tailândia, conhecida como Terra dos Sorrisos, encanta com suas praias paradisíacas de águas cristalinas, templos ornamentados e uma rica cultura. Bangcoc, sua capital, é uma metrópole vibrante onde arranha-céus modernos contrastam com templos budistas antigos. A gastronomia tailandesa, com pratos como o Pad Thai e o curry, é uma explosão de sabores. Além disso, o país oferece atividades como trekking na selva, mergulho em recifes de corais e visitas a mercados flutuantes." />

                            {/* ------- */}

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
