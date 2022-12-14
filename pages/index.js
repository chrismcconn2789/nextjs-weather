import Head from 'next/head';
import axios from 'axios';
import Weather from '../components/Weather';
import Footer from '../components/Footer';
import { useState } from 'react';
import { BsFillCloudsFill, BsGlobe } from 'react-icons/bs';
import { AiOutlineSearch, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Spinner from '../components/Spinner';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);

      setCity('');
      setLoading(false);
    });
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="flex flex-col items-center justify-center">
        <Head>
          <title>Next.js Weather App</title>
          <meta name="a local weather info app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <div className="flex justify-center m-2 mt-4 text-[#59546C]">
            <BsFillCloudsFill
              className="text-[#38405F] lg:scale-150 lg:my-4"
              size={120}
            />
          </div>
          <div className="block text-3xl text-[#8B939C] font-bold w-full px-6 py-3 m-2 lg:text-6xl text-center lg:mb-8">
            Next.js Weather App
          </div>
          <div className="flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-[#59546C]">
            <form
              onSubmit={fetchWeather}
              className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-[#59546C] text-[#59546C] rounded-2xl"
            >
              <input
                onChange={(e) => setCity(e.target.value)}
                className="bg-transparent border-none text-[#59546C] focus:outline-none text-2xl placeholder:text-gray-[#59546C]"
                type="text"
                placeholder="Enter a city name ..."
              />
              <button>
                <AiOutlineSearch
                  onClick={fetchWeather}
                  className="inline-block text-2xl align-middle"
                />
              </button>
            </form>
          </div>

          {weather.main && <Weather data={weather} />}
        </div>
        <div className="flex mt-8 mb-4 text-lg text-[#8B939C]">
          <Footer />
        </div>
      </div>
    );
  }
}
