import cardsData from "./cardsData";
import NavigationBar from "./NavigatioBar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import MyCard from "./MyCard";
import ProductInfoCard from "./ProductInfoCard";
import { useState } from "react";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (productName) => {
    setSelectedProduct(productName);
  };

  function getItemDetailsByName(name) {
    const item = cardsData.find((item) => item.name === name);
    return item;
  }

  const handleProductNavClick = (productName) => {
    setSelectedProduct(productName);
  };

  const cardNames = cardsData.map((card) => card.name);
  return (
    <>
      <NavigationBar onHomeClick={handleProductNavClick} />
      <div className="flex">
        <div className="w-1/5">
          <SideBar names={cardNames} onProductClick={handleProductClick} />
        </div>
        <div className="w-4/5 p-3 bg-gradient-to-r from-[#0B2447] from-20% via-[#19376D] via-60% to-[#0B2447] to-80%">
          {selectedProduct ? (
            <ProductInfoCard product={getItemDetailsByName(selectedProduct)} />
          ) : (
            <div className="pt-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
              {cardsData.map((card, index) => (
                <MyCard
                  key={index}
                  image={card.image}
                  name={card.name}
                  price={card.price}
                  ratings={card.ratings}
                  onProductClick={handleProductClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
