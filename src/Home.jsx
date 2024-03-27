import Navbar from "./Components/Navbar";
import Search from "./Components/Scearch";
import Carousel from "./Components/Carousel";
import Services from "./Components/Services";
import Product from "./Components/Product";
import ScrollUpButton from "./Components/ScrollUpButton";
import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";
import Cover1 from "./Components/Cover1";
import Cover2 from "./Components/Cover2";
import Maps from "./Maps";
import { useState } from "react";
import DefaultComponent from "./Components/DefaultComponent";
import ChatBot from "./Components/ChatBot";
import Cart from "./Components/Cart";

function Home() {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [data,setData] = useState([]);

  return (
    <>
      <ScrollUpButton />
      <ChatBot />
      <Search />
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "Home" ? (
        <>
          <Carousel />
          <Product />
          <Cover2 />
          <ProductList setSelectedTab={setSelectedTab}/>
          <Services />
          <Cover1 />
        </>
      ) : selectedTab === "Map" ? (
        <Maps />
      ) : selectedTab === "Puncture" ? (
        <>
          <Services />
        </>
      ) : selectedTab === "Petrol" ? (
        <>
          <ProductList />
        </>
      ) : selectedTab === "Products" ? (
        <>
          <Product />
          <ProductList />
        </>
      ) : selectedTab === "Cart" ? (
        <>
          <Cart/>
        </>
      ) : (
        // Default condition if none of the tabs match
        <DefaultComponent></DefaultComponent>
      )}

      <Footer
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Footer>
    </>
  );
}

export default Home;
