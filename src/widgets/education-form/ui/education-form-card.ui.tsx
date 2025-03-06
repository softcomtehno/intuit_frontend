import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Icon } from '@mui/material'

interface props {
  title: string
  text: string
}

export const EducationFormCard = ({ title, text }: props) => {
  return (
    <div className="p-5 w-full h-[auto] bg-gray rounded-lg flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h4 className="text-3xl font-bold md:text-[25px]">{title}</h4>
        <div className="rounded-full bg-green p-2 ">
          <Icon component={WbSunnyIcon} className=""></Icon>
        </div>
      </div>
      <p className='mt-5'>{text}</p>
    </div>
  )
}
