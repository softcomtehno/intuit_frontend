import {
  WhatsApp,
  Telegram,
  Instagram,
  Facebook,
  ContactPage,
} from '@mui/icons-material'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { staffQueries } from '~entities/staff'

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
    return <div>Идёт загрузка данных</div>
  }
  if (isError) {
    return <div>Данные не загружены</div>
  }

  console.log(staffData)

  if (isSuccess) {
    return (
      <section
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://img2.akspic.ru/crops/8/2/9/0/4/140928/140928-nebo-gora-gornyj_hrebet-minimalizm-televideniye-3840x2160.jpg")',
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center mt-40 gap-10">
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="flex justify-center w-36 border-3 border-solid border-black rounded-full shadow-lg">
                <img
                  src={staffData.data.image}
                  alt="User Avatar"
                  className="w-36 h-36 border-3 border-solid border-black rounded-full shadow-lg"
                />
              </div>
              <Typography variant="h4" className="font-bold text-white">
                {staffData.data.name}
              </Typography>
              <Typography
                variant="body1"
                className="text-center text-white text-lg max-w-md"
              >
                {staffData.data.description}
              </Typography>
            </div>
            <div className="flex flex-wrap justify-center gap-5 ">
              <a
                href={staffData.data.whatsapp}
                target="_blank"
                className="flex items-center justify-around text-white m-1 py-3 px-5 w-1/6 bg-green rounded-full transition-all hover:scale-105"
              >
                <WhatsApp className="mr-2" />
                <span className="text-lg">WhatsApp</span>
              </a>
              <a
                href={staffData.data.telegram}
                target="_blank"
                className="flex items-center justify-around text-white m-1 py-3 px-5 w-1/6 bg-[#32A9E1] rounded-full transition-all hover:scale-105"
              >
                <Telegram className="mr-2" />
                <span className="text-lg">Telegram</span>
              </a>
              <a
                href={staffData.data.instagram}
                target="_blank"
                className="flex items-center justify-around transition-all text-white m-1 py-3 px-5 w-1/6  rounded-full hover:scale-105 "
                style={gradientStyle}
              >
                <Instagram className="mr-2" />
                <span className="text-lg">Instagram</span>
              </a>
              <a
                href={staffData.data.facebook}
                target="_blank"
                className="flex items-center justify-around text-white m-1 py-3 px-5 w-1/6 bg-[#4867AA]  rounded-full transition duration-300 hover:scale-105"
              >
                <Facebook className="mr-2" />
                <span className="text-lg">Facebook</span>
              </a>
              <a
                href={staffData.data.cv}
                target="_blank"
                className="flex items-center justify-around text-white m-1 py-3 px-5 w-1/6 bg-[#383838] rounded-full transition duration-300 hover:scale-105"
              >
                <ContactPage className="mr-2" />
                <span className="text-lg">Резюме</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
