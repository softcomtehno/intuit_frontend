import { Button, IconButton } from '@mui/material'
import IntuitLogo from '../../assets/intuit-logo.png'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TelegramIcon from '@mui/icons-material/Telegram'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { degreeQueries } from '~entities/degree'

interface ContactInfo {
  address: string
  admissionOfficePhone: string
  facebook: string
  hoursSaturday: string
  hoursSunday: string
  hoursWeekdays: string
  id: number
  instagram: string
  receptionPhone: string
  telegram: string
  whatsapp: string
  youtube: string
}

// const studentResources = ['Расписание', 'AVN', 'Moodle', 'Оплата обучения'];

export function Footer() {
  const [data, setData] = useState<ContactInfo>()

  const { data: degreeData } = degreeQueries.useGetDegrees()

  useEffect(() => {
    axios
      .get('https://intuit.makalabox.com/api/university/university-info/1/')
      .then((res) => setData(res.data))
  }, [])

  if (!data) {
    return <div>Ошибка при получении данных</div>
  }

  return (
    <footer className="bg-[#0d1140] text-white py-5 ">
      <div className=" max-w-[95%] mx-auto hidden lg:block">
        <div className="flex items-center gap-1 mb-5">
          <img src={IntuitLogo} alt="Intuit" className="h-[58px]" />
          <p className="text-xs font-semibold leading-3">
            МЕЖДУНАРОДНЫЙ <br /> УНИВЕРСИТЕТ <br /> ИННОВАЦИОННЫХ <br />
            ТЕХНОЛОГИЙ
          </p>
        </div>
        <Button
          variant="outlined"
          className="w-full my-3 duration-300  font-bold text-white bg-green hover:border-green"
        >
          Обратная связь
        </Button>
        <div className="flex justify-between">
          <Link
            className=" border border-white rounded px-3"
            to={data.facebook}
          >
            <IconButton className="text-white">
              <FacebookRoundedIcon />
            </IconButton>
          </Link>
          <Link
            className=" border border-white rounded px-3"
            to={data.whatsapp}
          >
            <IconButton className="text-white">
              <WhatsAppIcon />
            </IconButton>
          </Link>
          <Link
            className=" border border-white rounded px-3"
            to={data.instagram}
          >
            <IconButton className="text-white">
              <InstagramIcon />
            </IconButton>
          </Link>

          <Link
            className=" border border-white rounded px-3"
            to={data.telegram}
          >
            <IconButton className="text-white">
              <TelegramIcon />
            </IconButton>
          </Link>
        </div>
        <p className="my-3 text-center">&copy; 2024 Intuit</p>
      </div>
      <div className=" max-w-[80%] mx-auto lg:hidden">
        <div className="flex items-center gap-1 mb-5">
          <img src={IntuitLogo} alt="Intuit" className="h-[58px]" />
          <p className="text-xs font-semibold leading-3">
            МЕЖДУНАРОДНЫЙ <br /> УНИВЕРСИТЕТ <br /> ИННОВАЦИОННЫХ <br />
            ТЕХНОЛОГИЙ
          </p>
        </div>
        <ul className="flex justify-between pb-3 border-b border-gray">
          {degreeData?.data.map((univer, index) => (
            <li className="text-white" key={index}>
              <Link to={`/degree/${univer.slug}`}>{univer.title}</Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-between mt-6">
          <ul>
            <h5 className="font-bold mt-5">Адрес</h5>
            <li>{data.address}</li>
          </ul>
          <ul>
            <h5 className="font-bold mt-5">График работы</h5>
            <li>Пн-пт {data.hoursWeekdays}</li>
            <li>Сб Выходной</li>
            <li>Вс Выходной</li>
          </ul>
          <div>
            <h5 className="font-bold mt-5">По Всем вопросам</h5>
            <Button
              className="text-white"
              startIcon={<LocalPhoneRoundedIcon />}
            >
              {data.admissionOfficePhone}
            </Button>
            <h5 className="font-bold mt-5">Приемная коммисия</h5>
            <Button
              className="text-white"
              startIcon={<LocalPhoneRoundedIcon />}
            >
              {data.receptionPhone}
            </Button>
          </div>
          <div>
            <Button
              variant="outlined"
              className="w-full mb-3 duration-300  font-bold text-white border-white hover:bg-green hover:border-green"
            >
              Обратная связь
            </Button>
            <div className="flex items-center">
              <p>Мы в соцсетях</p>
              <div>
                <Link to={data.facebook}>
                  <IconButton className="text-white">
                    <FacebookRoundedIcon />
                  </IconButton>
                </Link>
                <Link to={data.whatsapp}>
                  <IconButton className="text-white">
                    <WhatsAppIcon />
                  </IconButton>
                </Link>
                <Link to={data.instagram}>
                  <IconButton className="text-white">
                    <InstagramIcon />
                  </IconButton>
                </Link>

                <Link to={data.telegram}>
                  <IconButton className="text-white">
                    <TelegramIcon />
                  </IconButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
