import NavigationBar from "./NavigatioBar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import MyCard from "./MyCard";

function Products() {
  const cardsData = [
    {
      image:
        "https://n4.sdlcdn.com/imgs/j/j/m/A-Textbook-of-Java-Programming-SDL169067688-1-df72a.jpg",
      name: "A Text Book of Java Programming",
      price: "5",
      ratings: "4",
      link: "#",
    },
    {
      image:
        "https://linuxhint.com/wp-content/uploads/2019/06/1-1-775x1024.jpg",
      name: "Python Crash  Course, 2nd Edition",
      price: "6",
      ratings: "3",
      link: "#",
    },
    {
      image:
        "https://img.readthistwice.com/unsafe/232x348/books/4c5f1276-baaf-4372-b1f3-7b9c2028bca2.jpg",
      name: "Learning React By O'Reilly",
      price: "8",
      ratings: "5",
      link: "#",
    },
  ];
  console.log(cardsData.name);
  return (
    <>
      <NavigationBar />
      <div className="flex">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="w-3/4">
          <div className="pt-3 grid grid-cols-3 gap-5">
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
