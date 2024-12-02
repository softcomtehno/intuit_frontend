import WbSunnyIcon from '@mui/icons-material/WbSunny'
import { Icon } from '@mui/material'

export const EducationFormCard = ({ title, text }) => {
  return (
    <div className="p-5 w-full h-[170px] bg-gray rounded-lg flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <h4 className="text-3xl font-bold">{title}</h4>
        <div className="rounded-full bg-green p-2 ">
        {/* <WbSunnyIcon ></WbSunnyIcon> */}
        <Icon component={WbSunnyIcon} className=""></Icon>
        </div>
      </div>
      <p>{text}</p>
    </div>
  )
}
