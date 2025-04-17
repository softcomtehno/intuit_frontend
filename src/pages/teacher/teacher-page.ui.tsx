import {
  WhatsApp,
  Telegram,
  Instagram,
  Facebook,
  ContactPage,
} from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { staffQueries } from '~entities/staff'
import './index.css'
import { t } from 'i18next'

export const TeacherPage = () => {
  const { slug } = useParams()

  if (!slug) {
    return <div>Invalid URL</div>
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
  }

  if (isLoading) {
    return <div>{t("loading.dataLoading")}</div>
  }
  if (isError) {
    return <div>{t("loading.dataNotLoaded")}</div>
  }

  if (isSuccess) {
    return (
      <section className=" rounded-lg flex items-center justify-center py-10 mb-5 t w-full teacher">
        <div className="container mx-auto">
          <div className="flex  items-center justify-center  gap-10 md:flex-col">
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="flex justify-center  border-3 border-solid border-black rounded-full shadow-lg">
                <img
                  src={staffData.data.image}
                  alt="User Avatar"
                  className=" w-[500px] rounded-lg  border-3 border-solid border-black  shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col  justify-center  gap-5 ">
              <Typography
                variant="h4"
                className="font-bold text-white md:text-center"
              >
                {staffData.data.name}
              </Typography>
              <Typography
                variant="body1"
                className="text-center text-white text-lg max-w-md self-center"
              >
                {staffData.data.description}
              </Typography>
              <div className="bg-green rounded-md   transition-all hover:scale-105">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
