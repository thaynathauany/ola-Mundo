import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import NaoEncontrada from "paginas/NaoEncontrado";
import Post from "paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom" // BrowserRouter - Componente que permite que utilize mais componetes do react router dom para ter um sistema de rotas mais legivel - Routes -Roteador, Decide qual a rota ele vai mostrar na tela
import Menu from "./componentes/Menu"
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

//console.log(window.location); - Mostra o pathname da URL

//Se for igual ao index HTML da aplicação retorna e se nao for retorna o HTML sobre mim
//Mostra diferentes coisas na tela de acordo com a URL do navegador
//const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />;

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        

        {/*
          <Route path="/" element={<PaginaPadrao />}>
          <Route path="/"element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        
        */}

        {/*
          Na rota  "/", a estrutura a ser renderizada é:

          <PáginaPadrao>
            <Inicio />
          </PaginaPadrao>
          
          Na rota  "/sobremim", a estrutura a ser renderizada é:

          <PáginaPadrao>
            <SobreMim />
          </PaginaPadrao>

        */}
        <Route path="posts/:id" element={<Post />}/>        
        <Route path="*" element={<NaoEncontrada/>}/> 
      </Routes>

    <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;

//Menu fica fixo na aplicação por isso fica fora do Route. Independente da pagina, ele aparece