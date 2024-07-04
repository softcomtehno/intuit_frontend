import { Typography } from '@mui/material'
import { specializationTypes } from '~entities/specialization'

export const About = ({
  text,
  subtext,
  textPhoto,
}: specializationTypes.Specialization) => {
  return (
    <div className="flex gap-5 my-10">
      <div className="flex flex-col gap-4">
        <Typography variant="h3" className="font-semibold">
          {text}
        </Typography>
        <p className="text-lg font-medium">{subtext}</p>
      </div>
      <img className="rounded-2xl" src={`${textPhoto}`} alt="" />
    </div>
  )
}
