import React from 'react';
import Fancybox from './Fancybox';
import Gerb from '../../../assets/gerb.svg';

export const License = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Документы</h2>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <div className="flex justify-between">
          <div className="max-w-md mx-auto mt-8 border border-gray rounded-lg bg-white p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-bold text-gray-800">
                Бюджетные места
              </h3>
              <p className="text-sm text-gray-600 mt-4">
                Международный Университет Инновационных Технологий имеет государственную лицензию и
                аккредитацию, поэтому на ряде факультетов мы ежегодно выделяем
                бюджетные места для самых талантливых студентов.
              </p>
            </div>
          </div>
          <a
            data-fancybox="gallery"
            href="https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%D0%B0.png"
            className="block border border-gray rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                <img src={Gerb} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Лицензия</h3>
              <p className="text-sm text-gray-600 mt-2">
                Нажмите, чтобы посмотреть документ.
              </p>
            </div>
          </a>
          <a
            data-fancybox="gallery"
            href="https://intuit.kg/media/faculty/images/documents/%D0%94%D0%B8%D0%BF%D0%BB%D0%BE%D0%BC%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0%D0%B2%D1%80%D0%B0.png"
            className="block border border-gray rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                <img src={Gerb} alt="" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                Свидетельство
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Нажмите, чтобы посмотреть документ.
              </p>
            </div>
          </a>
        </div>
      </Fancybox>
    </div>
  );
};
