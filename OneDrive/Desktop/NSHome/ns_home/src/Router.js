import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/home/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { Company } from "./pages/about/Company";
import { Vision } from "./pages/about/Vision";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.company} element={<Company />} />
        <Route path={routes.vision} element={<Vision />}></Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
