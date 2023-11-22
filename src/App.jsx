import { Fragment } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Slider from "./components/slider/slider";
import { SwiperSlide } from "swiper/react";

import { MdAudiotrack, MdSecurity } from "react-icons/md";
import {
  BsPlugin,
  BsFillBellSlashFill,
  BsFillCheckCircleFill,
  BsFillStarFill,
  BsStarHalf,
  BsCheck,
  BsCheckCircle,
} from "react-icons/bs";
import { RiRemoteControl2Fill } from "react-icons/ri";
import FAQ from "./components/faq/faq";
import BenefitsOrange from "./components/faq/benefits-orange";
import BenefitsBlue from "./components/faq/benefits-blue";

const App = () => {
  const settings = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
    loop: true,
  };

  return (
    <Fragment>
      <Header />

      {/* Carousel do produto */}
      <section className="min-h-[90vh]">
        <div className="p-10 pb-0 flex flex-col items-center justify-center">
          <div className="max-w-3xl space-y-4 text-center">
            <span className="text-xl md:text-3xl font-bold uppercase">
              Revolucione sua Experiência com
              <br />
              <span className="text-4xl md:text-5xl text-blue-600">
                Multimídia MiraStream PRO
              </span>
            </span>
            <p className="max-w-3xl tracking-tight">
              Eleve seu entretenimento com o MiraStream PRO: inovação em casa e
              no carro com interface intuitiva e recursos avançados.
            </p>
          </div>
        </div>

        <Slider settings={settings}>
          <SwiperSlide className="flex justify-center select-none">
            <img src="multimidia.png" alt="Multimídia" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center select-none">
            <img src="multimidia1.webp" alt="Multimídia" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center select-none">
            <img src="multimidia2.webp" alt="Multimídia" />
          </SwiperSlide>
        </Slider>
      </section>

      {/* Imagem e breve descrição do produto */}
      <section className="min-h-[90vh] bg-gradient-to-r from-gray-50 to-blue-100 flex items-center justify-center">
        <div className="max-w-7xl mx-auto p-10 flex flex-col lg:flex-row items-center lg:items-start justify-center">
          <img
            src="multimidia4.png"
            alt="Multimídia"
            className="w-full max-w-lg"
          />
          <div className="flex flex-col items-center justify-center pt-10 lg:pt-0 lg:px-10 text-center lg:text-left">
            <div className="max-w-3xl space-y-4">
              <span className="text-3xl font-bold uppercase">
                A revolução em multimídia
              </span>
              <p className="max-w-3xl tracking-tight">
                O MiraStream PRO redefiniu a experiência multimídia, com uma
                tela de alta resolução, conectividade perfeita, áudio imersivo e
                navegação intuitiva. Este dispositivo é mais do que
                entretenimento; é uma revolução que transforma a maneira como
                você consome mídia e se conecta ao mundo digital.
              </p>
              <p className="tracking-tight max-w-3xl">
                Experimente a revolução da multimídia com a MiraStream PRO hoje
                mesmo!
              </p>
              <button className="bg-blue-600 text-white rounded-md py-2 px-6">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios do aparelho */}
      <section className="min-h-screen flex flex-col items-center justify-center p-10">
        <div className="max-w-3xl space-y-4 text-center">
          <span className="text-xl md:text-3xl font-bold uppercase">
            Alguns
            <br />
            <span className="text-4xl md:text-5xl text-blue-600">
              Benefícios
            </span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-7xl mx-auto">
          <div className="shadow p-6 rounded-md text-center bg-gray-50 hover:text-blue-600 hover:scale-[1.01] flex flex-col justify-center items-center transition cursor-pointer">
            <MdAudiotrack size={32} />
            <span className="font-bold text-lg uppercase mt-4">
              Qualidade Superior de Áudio e Vídeo
            </span>
            <p>
              Desfrute de áudio e vídeo de alta qualidade para uma experiência
              multimídia envolvente.
            </p>
          </div>
          <div className="shadow p-6 rounded-md text-center bg-gray-50 hover:text-blue-600 hover:scale-[1.01] flex flex-col justify-center items-center transition cursor-pointer">
            <BsPlugin size={32} />
            <span className="font-bold text-lg uppercase mt-4">
              Conectividade Versátil
            </span>
            <p>
              Facilidade para conectar e transmitir conteúdo de várias fontes,
              como dispositivos móveis e computadores.
            </p>
          </div>
          <div className="shadow p-6 rounded-md text-center bg-gray-50 hover:text-blue-600 hover:scale-[1.01] flex flex-col justify-center items-center transition cursor-pointer">
            <RiRemoteControl2Fill size={32} />
            <span className="font-bold text-lg uppercase mt-4">
              Controle Intuitivo e Simplicidade de Uso
            </span>
            <p>
              Interface de usuário amigável que torna a operação do sistema
              fácil para todos.
            </p>
          </div>
          <div className="shadow p-6 rounded-md text-center bg-gray-50 hover:text-blue-600 hover:scale-[1.01] flex flex-col justify-center items-center transition cursor-pointer">
            <BsFillBellSlashFill size={32} />
            <span className="font-bold text-lg uppercase mt-4">
              Streaming sem Interrupções
            </span>
            <p>
              Garante transmissões suaves e sem interrupções, independentemente
              do tipo de conteúdo.
            </p>
          </div>
          <div className="shadow p-6 rounded-md text-center bg-gray-50 hover:text-blue-600 hover:scale-[1.01] flex flex-col justify-center items-center transition cursor-pointer">
            <BsFillCheckCircleFill size={32} />
            <span className="font-bold text-lg uppercase mt-4">
              Compatibilidade Universal
            </span>
            <p>
              Funciona com uma ampla gama de dispositivos e plataformas,
              proporcionando flexibilidade.
            </p>
          </div>
          <div className="shadow p-6 rounded-md text-center bg-gray-50 hover:text-blue-600 hover:scale-[1.01] flex flex-col justify-center items-center transition cursor-pointer">
            <MdSecurity size={32} />
            <span className="font-bold text-lg uppercase mt-4">
              Segurança Avançada e Suporte de Qualidade
            </span>
            <p>
              Oferece recursos de segurança sólidos e suporte técnico dedicado
              para uma experiência confiável.
            </p>
          </div>
        </div>
      </section>

      {/* Avaliações do produto */}
      <section className="min-h-[90vh] flex flex-col justify-center bg-gradient-to-r from-yellow-50/40 to-yellow-50/60">
        <div className="p-10 flex flex-col items-center justify-center">
          <span className="text-2xl font-medium">Avaliações</span>
          <div className="flex flex-col space-y-4 items-center my-10">
            <div className="flex items-baseline">
              <span className="text-7xl font-bold text-[#141414]">4.5</span>
              <BsCheckCircle size={12} fill="gray" />
            </div>

            <div className="flex items-center space-x-2">
              <BsFillStarFill size={24} fill="#ffcb0c" />
              <BsFillStarFill size={24} fill="#ffcb0c" />
              <BsFillStarFill size={24} fill="#ffcb0c" />
              <BsFillStarFill size={24} fill="#ffcb0c" />
              <BsStarHalf size={24} fill="#ffcb0c" />
            </div>
            <span className="text-gray-600">1.405 avaliações</span>
          </div>
          <div className="w-[100%] md:w-[50%] flex flex-col">
            <div className="flex items-center justify-center relative">
              <div className="absolute left-0 flex items-center space-x-2">
                <span className="text-sm text-gray-600">5</span>{" "}
                <BsFillStarFill
                  size={18}
                  fill="#141414"
                  className="hidden md:block"
                />
              </div>
              <div className="absolute w-[80%] h-6 rounded-md bg-white/80 mx-4">
                <div className="w-[66%] h-full rounded-md bg-[#ffcb0c]" />
              </div>
              <span className="absolute right-0 text-gray-600">935</span>
            </div>

            <div className="flex items-center justify-center relative mt-8">
              <div className="absolute left-0 flex items-center space-x-2">
                <span className="text-sm text-gray-600">4</span>{" "}
                <BsFillStarFill
                  size={18}
                  fill="#141414"
                  className="hidden md:block"
                />
              </div>
              <div className="absolute w-[80%] h-6 rounded-md bg-white/80 mx-4">
                <div className="w-[28%] h-full rounded-md bg-[#ffcb0c]" />
              </div>
              <span className="absolute right-0 text-gray-600">403</span>
            </div>

            <div className="flex items-center justify-center relative mt-8">
              <div className="absolute left-0 flex items-center space-x-2">
                <span className="text-sm text-gray-600">3</span>{" "}
                <BsFillStarFill
                  size={18}
                  fill="#141414"
                  className="hidden md:block"
                />
              </div>
              <div className="absolute w-[80%] h-6 rounded-md bg-white/80 mx-4">
                <div className="w-[2.4%] h-full rounded-md bg-[#ffcb0c]" />
              </div>
              <span className="absolute right-0 text-gray-600">32</span>
            </div>

            <div className="flex items-center justify-center relative mt-8">
              <div className="absolute left-0 flex items-center space-x-2">
                <span className="text-sm text-gray-600">2</span>{" "}
                <BsFillStarFill
                  size={18}
                  fill="#141414"
                  className="hidden md:block"
                />
              </div>
              <div className="absolute w-[80%] h-6 rounded-md bg-white/80 mx-4">
                <div className="w-[1.8%] h-full rounded-md bg-[#ffcb0c]" />
              </div>
              <span className="absolute right-0 text-gray-600">26</span>
            </div>

            <div className="flex items-center justify-center relative mt-8">
              <div className="absolute left-0 flex items-center space-x-2">
                <span className="text-sm text-gray-600">1</span>{" "}
                <BsFillStarFill
                  size={18}
                  fill="#141414"
                  className="hidden md:block"
                />
              </div>
              <div className="absolute w-[80%] h-6 rounded-md bg-white/80 mx-4">
                <div className="w-[0.6%] h-full rounded-md bg-[#ffcb0c]" />
              </div>
              <span className="absolute right-0 text-gray-600">9</span>
            </div>
          </div>
          <div className="mt-12 flex flex-col text-center">
            <span className="max-w-3xl tracking-tight text-gray-600">
              Explore o futuro do entretenimento com MiraStream PRO: qualidade
              de imagem e som incomparáveis. Transforme sua experiência
              multimídia hoje
            </span>
            <button className="text-blue-600">Saiba mais</button>
          </div>
        </div>
      </section>

      {/* Imagens de demonstração */}
      <section className="min-h-screen flex flex-col items-center justify-center p-10">
        <div className="max-w-3xl space-y-4 text-center">
          <span className="text-xl md:text-3xl font-bold uppercase">
            Imagens de
            <br />
            <span className="text-3xl md:text-5xl text-blue-600">
              Demonstração
            </span>
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-center flex-wrap mt-10 gap-10 mx-auto">
          <div className="shadow overflow-hidden rounded-md w-full lg:w-[40%] h-[400px]">
            <img
              src="1.png"
              alt="Multimídia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="shadow overflow-hidden rounded-md w-full lg:w-[40%] h-[400px]">
            <img
              src="2.png"
              alt="Multimídia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="shadow overflow-hidden rounded-md w-full lg:w-[40%] h-[400px]">
            <img
              src="3.png"
              alt="Multimídia"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="shadow overflow-hidden rounded-md w-full lg:w-[40%] h-[400px]">
            <img
              src="4.png"
              alt="Multimídia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Nossos planos */}
      <section className="min-h-[90vh] bg-gradient-to-r from-gray-50 to-blue-100 p-4 lg:p-10 py-10">
        <div className="space-y-4 text-center">
          <span className="text-xl md:text-3xl font-bold uppercase">
            Nossos
            <br />
            <span className="text-4xl md:text-5xl text-blue-600">Planos</span>
          </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 mt-10">
          <div className="flex flex-col items-center p-6 shadow text-center flex-1 bg-white w-full">
            <span className="text-lg font-bold uppercase">Plano Infantil</span>
            <span className="uppercase font-bold text-3xl text-blue-500">
              Mini Explorador
            </span>

            <p className="leading-tight text-sm max-w-sm text-justify">
              Experiência Educativa Cativante para Crianças
            </p>

            <p className="my-10">
              <span className="align-top text-sm text-gray-500">R$</span>
              <span className="text-7xl text-blue-500 font-semibold">449</span>
              <span className="text-sm text-gray-500">/uni</span>
            </p>

            <button className="w-full p-3 rounded-full bg-blue-500 text-white my-4">
              Adquirir agora
            </button>

            <BenefitsBlue />
          </div>

          <div className="flex flex-col items-center p-6 shadow text-center flex-1 bg-white w-full">
            <span className="text-lg font-bold uppercase">Plano Adaptado</span>
            <span className="uppercase font-bold text-4xl text-orange-500">
              Inclusivo Plus
            </span>

            <p className="leading-tight text-sm max-w-sm text-justify">
              Acessibilidade Total, Diversão Garantida
            </p>

            <div className="my-11 flex flex-col justify-between text-[#555555]">
              <span className="text-4xl font-semibold">Valor a negociar</span>
              <span>Entre em contato com especialistas</span>
            </div>

            <button className="w-full p-3 rounded-full bg-orange-500 text-white my-4">
              Adquirir agora
            </button>

            <BenefitsOrange />

            <span className="text-xs text-gray-400 text-justify mt-4">
              * Consulte nossos profissionais para uma melhor
              experiência com nossos produtos
            </span>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes (FAQ) */}
      <section className="min-h-[90vh] flex flexc items-center justify-center">
        <div className="max-w-7xl mx-auto p-10 flex flex-col items-center justify-center">
          <div className="flex flex-col text-center">
            <span className="text-3xl font-bold uppercase">
              Perguntas Frequentes
            </span>
            <span className="text-lg font-medium">(FAQ)</span>
          </div>

          <div className="mt-10">
            <FAQ />
          </div>
        </div>
      </section>

      <section className="min-h-[10vh] bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto p-10 flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="text-2xl font-bold uppercase">
            Aproveite agora mesmo!
          </span>
          <span className="my-4">
            Adquira o MiraStream PRO e eleve sua experiência multimídia a um
            novo patamar. Não perca a chance de desfrutar de qualidade de imagem
            e som excepcionais. Compre agora e transforme seu entretenimento!
          </span>
          <button className="bg-white w-fit text-black rounded-md py-2 px-6">
            Adquirir agora
          </button>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};
export default App;
