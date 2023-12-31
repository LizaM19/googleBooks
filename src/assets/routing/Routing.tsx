import { Route, Routes } from "react-router-dom";
import App from "../../App";
import { ErrorPage } from "../../error/ErrorPage";
import HomePage from "../../page/HomePage";
import { AboutPage } from "../../page/aboutPage/AboutPage";
import { FavoritesPage } from "../../page/favorites/FavoritesPage";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route index element={<HomePage />} />
        <Route path="/about/*" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Routing;
