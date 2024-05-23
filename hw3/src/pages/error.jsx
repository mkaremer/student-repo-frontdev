import Navbar from "../components/navbar";

const Header = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <h2 className="text-4xl mt-4 text-blue-600">Page Not Found</h2>
      <p className="mt-4 text-xl">
        We are sorry, but the page you were looking for does not exist.
      </p>
      <a href="/" className="mt-6 text-blue-600 underline">
        Return to Home
      </a>
    </div>
  );
};

const ErrorPage = () => {
  return (
    <div className="flex h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow p-1 bg-gray-100">
        <Header />
      </div>
    </div>
  );
};

export default ErrorPage;
