import { CardPost } from "./components/card-post";
import { CreatePost } from "./components/createPost";
import { Navbar } from "./components/navbar";
import { joti_one } from "./layout";
import './stars.css';

export default function Home() {

  return (


    <div className=" w-full h-full bg-gradient-to-t from-gray-700 via-gray-900 to-black">
      <div className='stars'>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>

      <Navbar classname="bg-blue-500" />

      <main className="h-full w-full max-w-7xl m-auto">

        <CreatePost />
        <section className=" w-full flex justify-center">
          <div className=" flex flex-col gap-4">
            {/*header da area principal */}
            <div className=" h-14 flex w-full justify-start text-white">
              {/* Inicio do coisa */}
              <p className={`${joti_one.className} text-5xl pl-2`}>Seu Feed</p>
            </div>
            {/* post */}
            <div className="h-full max-w-4xl flex justify-center flex-col">
              {/* ------- */}
              <CardPost classname="bg-blue-500" author="Myke Tyson" image="/muralhadachina.jpg" title="China" tagCat="Historia" text="A China, conhecida como Terra dos Sorrisos, encanta com suas praias paradisíacas de águas cristalinas, templos ornamentados e uma rica cultura. Bangcoc, sua capital, é uma metrópole vibrante onde arranha-céus modernos contrastam com templos budistas antigos. A gastronomia tailandesa, com pratos como o Pad Thai e o curry, é uma explosão de sabores. Além disso, o país oferece atividades como trekking na selva, mergulho em recifes de corais e visitas a mercados flutuantes. A Tailândia, conhecida como Terra dos Sorrisos" />
              <CardPost classname="bg-blue-500" author="Bambam" image="/fotoriodejaneiro.jpeg" title="Tailândia" tagCat="Cultura" text="A Tailândia, conhecida como Terra dos Sorrisos, encanta com suas praias paradisíacas de águas cristalinas, templos ornamentados e uma rica cultura. Bangcoc, sua capital, é uma metrópole vibrante onde arranha-céus modernos contrastam com templos budistas antigos. A gastronomia tailandesa, com pratos como o Pad Thai e o curry, é uma explosão de sabores. Além disso, o país oferece atividades como trekking na selva, mergulho em recifes de corais e visitas a mercados flutuantes. A Tailândia, conhecida como Terra dos Sorrisos, encanta com suas praias paradisíacas de águas cristalinas, templos ornamentados e uma rica cultura. Bangcoc, sua capital, é uma metrópole vibrante onde arranha-céus modernos contrastam com templos budistas antigos. A gastronomia tailandesa, com pratos como o Pad Thai e o curry, é uma explosão de sabores. Além disso, o país oferece atividades como trekking na selva, mergulho em recifes de corais e visitas a mercados flutuantes." />

              {/* ------- */}

            </div>
          </div>
        </section>


      </main>
    </div>
  );
}
