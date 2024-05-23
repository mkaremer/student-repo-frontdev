import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Header = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl font-bold font-sans text-blue-600">
        The Population of Countries in South America
      </h1>
    </div>
  );
};

const GetPopulation = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Population",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://cs464p564-frontend-api.vercel.app/api/countries"
        );
        const data = await res.json();

        const labels = data.map((country) => country.name);
        const populations = data.map((country) => country.population);

        setChartData({
          labels,
          datasets: [
            {
              label: "Population",
              data: populations,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center h-screen p-10">
      {chartData.labels.length > 0 && (
        <div className="w-full lg:w-[800px] lg:h-[600px] mt-10">
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      )}
    </div>
  );
};

const Population = () => {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex-grow p-8 bg-gray-100">
        <Header />
        <GetPopulation />
      </div>
    </div>
  );
};

export default Population;
