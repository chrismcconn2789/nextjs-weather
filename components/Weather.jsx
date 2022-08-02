import React from 'react';
import Image from 'next/image';

const Weather = ({ data }) => {
  return (
    <div className="flex flex-col max-w-[450px] w-full h-auto m-auto p-4 text-gray-300">
      <div className="flex justify-between pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="weather"
            width="75"
            height="75"
          />
          <p className="text-3xl">{data.weather[0].main}</p>
        </div>
        <div className="pt-[5%]">
          <p className="text-7xl lg:text-8xl">
            {data.main.temp.toFixed(0)} &#176;C
          </p>
        </div>
      </div>

      <div className="p-8 rounded-md bg-[#59546C]/20 mt-16">
        <p className="pb-6 text-xl font-bold text-center lg:text-2xl">
          Weather in {data.name}
        </p>
        <div className="flex justify-between text-center">
          <div>
            <p className="text-xl font-bold">
              {data.main.feels_like.toFixed(0)} &#176;C
            </p>
            <p className="text-lg">Feels like</p>
          </div>
          <div>
            <p className="text-xl font-bold">{data.main.humidity} %</p>
            <p className="text-lg">Humidity</p>
          </div>
          <div>
            <p className="text-xl font-bold">
              {data.wind.speed.toFixed(0)} mph
            </p>
            <p className="text-lg">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
