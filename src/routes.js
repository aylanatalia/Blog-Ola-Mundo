import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/menu";
import Rodape from "componentes/rodape";
import PaginaPadrao from "componentes/paginaPadrao";
import Post from "paginas/post";
import NaoEncontrada from "paginas/naoEncontrada";
import ScrollToTop from "componentes/scrollToTop";


function AppRoutes() {
  return (
    //rotas da minha aplicação
    //criamos uma rota pai que tera elementos comuns das rotas filhas- no nosso exemplo temos a PaginaPadrão como rota pai e inicio e sobremim como rotas filhas
    <BrowserRouter>
      <ScrollToTop/>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route path="/" element={<Inicio/>} />  
          <Route path="/sobremim" element={<SobreMim/>} />
        </Route>    
        <Route path="posts/:id" element={<Post/>} />   
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
