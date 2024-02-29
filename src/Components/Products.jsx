import NavigationBar from "./NavigatioBar";
import SideBar from "./SideBar";
import Footer from "./Footer";
import MyCard from "./MyCard";

function Products() {
  return (
    <>
      <NavigationBar />
      <div className="flex">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="w-3/4">
          <div className="pt-3 grid grid-cols-3 gap-5">
            <MyCard
              image="https://n4.sdlcdn.com/imgs/j/j/m/A-Textbook-of-Java-Programming-SDL169067688-1-df72a.jpg"
              name="A Text Book of Java Programming"
              price="5"
              ratings="4"
              link="#"
            />
            <MyCard
              image="https://n4.sdlcdn.com/imgs/j/j/m/A-Textbook-of-Java-Programming-SDL169067688-1-df72a.jpg"
              name="A Text Book of Java Programming"
              price="5"
              ratings="4"
              link="#"
            />
            <MyCard
              image="https://n4.sdlcdn.com/imgs/j/j/m/A-Textbook-of-Java-Programming-SDL169067688-1-df72a.jpg"
              name="A Text Book of Java Programming"
              price="5"
              ratings="4"
              link="#"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
