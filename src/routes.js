import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import Default from "./componentes/Default";
import Post2 from "./paginas/Post2";
import NotFound from "./paginas/NotFound";
import ScrollToTop from "./componentes/ScrollToTop"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <ScrollToTop />

      <Routes>
        
        <Route path="/" element={<Default /> }>
          <Route path="/" element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />}/>
        </Route>

        <Route path="posts/:id/*" element={<Post2 />} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>

      <Rodape />

    </BrowserRouter>
  );
}

export default AppRoutes;
