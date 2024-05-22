import Navbar from "../components/navbar";

const Header = () => {
  return (
    <div className="text-center mt-10">
      <p className="text-5xl font-bold font-sans text-blue-600">
        I need to comeup with custom route here!!
      </p>
    </div>
  );
};

const CustomRoute = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-grow p-8 bg-gray-100">
        <Header />
      </div>
    </div>
  );
};

export default CustomRoute;
