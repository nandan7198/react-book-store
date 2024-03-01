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

  const cardNames = cardsData.map((card) => card.name);
  return (
    <>
      <NavigationBar />
      <div className="flex">
        <div className="w-1/4">
          <SideBar names={cardNames} onProductClick={handleProductClick} />
        </div>
        <div className="w-3/4">
          {selectedProduct ? (
            <ProductInfoCard product={getItemDetailsByName(selectedProduct)} />
          ) : (
            <div className="pt-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
              {cardsData.map((card, index) => (
                <MyCard
                  key={index} // Add a unique key for each card
                  image={card.image}
                  name={card.name}
                  price={card.price}
                  ratings={card.ratings}
                  link={card.link}
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
