import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { HeroCarousel } from './heroCarousel/HeroCarousel';

export const HomeHero = () => {
  const { t } = useTranslation();
  const premList = [
    '9 институтов',
    'Современные образовательные программы',
    'Преподаватели с реальным опытом',
  ];

  return (
    <section
      className="r-sm:mx-2 r-sm:h-[360px] mx-5 bg-white rounded-3xl r-sm:mb-16 mb-20 relative overflow-hidden"
      style={{
        background: '#00956F',
        background:
          'linear-gradient(6deg, rgba(0, 149, 111, 1) 100%, rgba(42, 33, 115, 0.7) 0%)',
      }}
    >
      <div className="relative py-20 r-md:py-6 px-4">
        <Container className="z-[100px] max-w-[1440px]">
          <div className="flex justify-between items-center r-lg:flex-col">
            <div className="mb-10 r-md:mb-2 r-md:max-w-2xl max-w-4xl">
              <div className="flex items-center">
                <span className="bg-blue  r-md:truncate r-md:text-[12px] r-md:py-1 r-md:max-w-52 r-md:px-4 text-white px-6 py-2 rounded-2xl r-md:mr-2 mr-4">
                  Высшее образование
                </span>
              </div>
              <Typography
                variant="h1"
                className="mt-4 r-md:mt-2 r-md:w-72 r-md:mb-4 mb-6 r-sm:text-2xl text-white w-[500px] font-geologica text-3xl font-[600]"
              >
                {t('homepage.title')}
              </Typography>
              <p className="text-xl r-sm:hidden text-white w-[480px] mb-6">
                Университет с широким выбором специальностей
              </p>
              <div className="flex r-md:mb-4 flex-wrap r-md:gap-2 gap-3 max-w-5xl r-md:overflow-x-auto">
                {premList.map((item, index) => (
                  <span
                    key={index}
                    className="border r-md:text-[10px] text-xs hover:bg-white bg-opacity-50 hover:text-black transition-all cursor-pointer px-4 py-2 rounded-full bg-black text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <img
                className="r-lg:hidden max-w-96"
                src="public/hero.svg"
                alt="Hero"
              />
            </div>
          </div>
          <HeroCarousel />
        </Container>
      </div>
    </section>
  );
};
