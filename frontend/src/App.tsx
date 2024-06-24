import "./componans/reset/reset.css";
import Categories from "./componans/category/categories";
import Header from "./componans/header/header"
import Catalog_slider from "./componans/catalog-slider/catalog-slider"
import CardList from "./componans/cards-list/cardsList";
import { Footer } from "./componans/Footer/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
    return (
    <I18nextProvider i18n={i18n}>
  <div className="App">    
  <Header></Header>
  <Categories></Categories>
  <Catalog_slider></Catalog_slider>
  <CardList></CardList>
  <Footer/>
    </div></I18nextProvider>);
}
export default App;
