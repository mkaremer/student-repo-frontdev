import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Header = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl font-bold font-sans text-blue-600">
        The GDP for Countries in South America
      </h1>
    </div>
  );
};

const GetGdp = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchCountriesGdp = async () => {
      try {
        const res = await fetch(
          "https://cs464p564-frontend-api.vercel.app/api/countries"
        );
        const data = await res.json();

        const labels = data.map((country) => country.name);
        const gdp = data.map((country) => country.gdp_billions);

        setChartData({
          labels,
          datasets: [
            {
              label: "GDP (billions)",
              data: gdp,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 205, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 0, 0, 0.6)",
                "rgba(0, 255, 0, 0.6)",
                "rgba(0, 0, 255, 0.6)",
                "rgba(128, 128, 0, 0.6)",
                "rgba(128, 0, 128, 0.6)",
                "rgba(0, 128, 128, 0.6)",
                "rgba(255, 128, 0, 0.6)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 205, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(255, 0, 0, 1)",
                "rgba(0, 255, 0, 1)",
                "rgba(0, 0, 255, 1)",
                "rgba(128, 128, 0, 1)",
                "rgba(128, 0, 128, 1)",
                "rgba(0, 128, 128, 1)",
                "rgba(255, 128, 0, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountriesGdp();
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-screen p-10">
      {chartData.labels.length > 0 && (
        <div className="w-full lg:w-[800px] lg:h-[600px] mt-10">
          <Pie data={chartData} options={{ responsive: true }} />
        </div>
      )}
    </div>
  );
};

const CustomRoute = () => {
  return (
    <div className="flex h-screen">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow p-8 bg-gray-100">
        <Header />
        <GetGdp />
      </div>
    </div>
  );
};

export default CustomRoute;
