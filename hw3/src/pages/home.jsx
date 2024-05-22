import Navbar from "../components/navbar";

const Header = () => {
  return (
    <div className="text-center mt-10">
      <p className="text-5xl font-bold font-sans text-blue-600">
        The Countries of South America
      </p>
      <br />
      <p className="mt-3 max-w-lg text-xl ml-auto mr-auto">
        Welcome to Homework 3 website. On this website you will learn more about
        South American countries. Navigate on our website to see list of
        contries in South America, their population, flags and more!
      </p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-grow p-8 bg-gray-100">
        <Header />
      </div>
    </div>
  );
};

export default Home;
