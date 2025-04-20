import {
  WhatsApp,
  Telegram,
  Instagram,
  Facebook,
  ContactPage,
} from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { staffQueries } from '~entities/staff';
import './index.css';
import { t } from 'i18next';
import { FileUser } from 'lucide-react';

export const TeacherPage = () => {
  const { slug } = useParams();

  if (!slug) {
    return <div>Invalid URL</div>;
  }

  const {
    data: staffData,
    isSuccess,
    isError,
    isLoading,
  } = staffQueries.useGetStaffDetail(slug)

  const gradientStyle = {
    background:
      'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
  };

  if (isLoading) {
    return <div>{t('loading.dataLoading')}</div>;
  }
  if (isError) {
    return <div>{t('loading.dataNotLoaded')}</div>;
  }

  if (isSuccess) {
    return (
      <section className=" rounded-lg flex items-center justify-center py-10 mb-5 t w-full bg-[url(/public/bg2.png)] ">
        <div className="max-w-[800px] mx-auto md:items-center md:flex md:flex-col">
          <div className="flex  items-center justify-center  gap-10 flex-col md:max-w-[90%]">
            <div className="flex gap-10 md:flex-col md:items-center md:justify-center">
              <img
                src={staffData.data.image}
                alt="User Avatar"
                className=" w-[200px] h-[250px] object-cover rounded-lg md:self-center border-3 border-solid border-black  shadow-lg"
              />
              <div className="flex flex-col  justify-center  gap-5 ">
                <Typography
                  variant="h4"
                  className="font-bold text-white md:text-center"
                >
                  {staffData.data.name}
                </Typography>
                <Typography
                  variant="body1"
                  className=" text-white text-lg max-w-md "
                >
                  {staffData.data.description}
                </Typography>
              </div>
            </div>
            <div className="w-full flex justify-between md:flex-col items-center md:gap-5">
              <a
                href={staffData.data.whatsapp}
                target="_blank"
                className="bg-white w-[150px] md:w-full border border-white hover:cursor-pointer hover:bg-white/90  transition duration-200 p-2 px-3  flex items-center gap-2 rounded-lg"
              >
                <img
                  className="h-[25px]"
                  src="/social-icons/whatsapp.svg"
                  alt=""
                />
                <span className="text-md font-bold text-black/80">
                  WhatsApp
                </span>
              </a>
              <a
                  href={staffData.data.telegram}
                target="_blank"
                className="bg-white w-[150px] md:w-full border border-white hover:cursor-pointer hover:bg-white/90  transition duration-200 p-2 px-3  flex items-center gap-2 rounded-lg"
              >
                <img
                  className="h-[25px]"
                  src="/social-icons/telegram.svg"
                  alt=""
                />
                <span className="text-md font-bold text-black/80">
                  Telegram
                </span>
              </a>
              <a
                 href={staffData.data.instagram}
                target="_blank"
                className="bg-white w-[150px] md:w-full border border-white hover:cursor-pointer hover:bg-white/90  transition duration-200 p-2 px-3  flex items-center gap-2 rounded-lg"
              >
                <img
                  className="h-[25px]"
                  src="/social-icons/instagram.svg"
                  alt=""
                />
                <span className="text-md font-bold text-black/80">
                  Instagram
                </span>
              </a>
              <a
                    href={staffData.data.facebook}
                target="_blank"
                className="bg-white w-[150px] md:w-full border border-white hover:cursor-pointer hover:bg-white/90  transition duration-200 p-2  px-3 flex items-center gap-2 rounded-lg"
              >
                <img
                  className="h-[25px]"
                  src="/social-icons/facebook.svg"
                  alt=""
                />
                <span className="text-md font-bold text-black/80">
                  Facebook
                </span>
              </a>
              <Link
                  to={'cv'}
                target="_blank"
                className="bg-white w-[150px] md:w-full border border-white hover:cursor-pointer hover:bg-white/90  transition duration-200 p-2 px-3  flex items-center gap-2 rounded-lg"
              >
                <FileUser size={25} className='text-green'/>
                <span className="text-md font-bold text-black/80">Резюме</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
{
  /* <div className="bg-green rounded-md   transition-all hover:scale-105">
                <a
                  href={staffData.data.whatsapp}
                  target="_blank"
                  className="pointer flex items-center justify-around text-white m-1 py-3 px-5 w-1/6 "
                >
                  <WhatsApp className="mr-2" />
                  <span className="text-lg">WhatsApp</span>
                </a>
              </div>
              <div className="bg-[#32A9E1] rounded-md transition-all hover:scale-105">
                <a
                  href={staffData.data.telegram}
                  target="_blank"
                  className="pointer flex items-center justify-around text-white m-1 py-3 px-5 w-1/6 "
                >
                  <Telegram className="mr-2" />
                  <span className="text-lg">Telegram</span>
                </a>
              </div>
              <div
                style={gradientStyle}
                className=" rounded-md transition-all hover:scale-105"
              >
                <a
                  href={staffData.data.instagram}
                  target="_blank"
                  className="pointer flex items-center justify-around transition-all text-white m-1 py-3 px-5 w-1/6  "
                >
                  <Instagram className="mr-2" />
                  <span className="text-lg">Instagram</span>
                </a>
              </div>
              <div className="bg-[#4867AA] rounded-md transition-all hover:scale-105">
                <a
                  href={staffData.data.facebook}
                  target="_blank"
                  className="pointer flex items-center justify-around text-white m-1 py-3 px-5 w-1/6 "
                >
                  <Facebook className="mr-2" />
                  <span className="text-lg">Facebook</span>
                </a>
              </div>
              <div className="bg-[#383838] rounded-md transition-all hover:scale-105">
                <Link
                  to={'cv'}
                  target="_blank"
                  className="pointer flex items-center justify-around text-white m-1 py-3 px-5 w-1/6 "
                >
                  <ContactPage className="mr-2" />
                  <span className="text-lg">{t("homepage.resume")}</span>
                </Link>
              </div> */
}
