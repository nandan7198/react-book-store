import NavigationBar from "./NavigatioBar";
import Footer from "./Footer";
export default function MyDashboard() {
  return (
    <>
      <NavigationBar />
      <div
        id="main-content"
        className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
      >
        <Footer />
      </div>
    </>
  );
}
