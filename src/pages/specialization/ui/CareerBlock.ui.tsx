import { Avatar, Card, Typography } from '@mui/material'
import { specializationTypes } from '~entities/specialization'

export const CareerBlock = ({
  professions,
}: specializationTypes.Specialization) => {
  console.log(professions)

  return (
    <div className="my-10 rounded-xl">
      <Typography variant="h3" className="font-semibold">
        Кем вы станете
      </Typography>
      <Typography variant="body1">
        После завершения этой специальности вы сможете стать:
      </Typography>
      <div className="flex justify-between mt-5 flex-wrap gap-10 lg:justify-center">
        {professions.map((prof, i) => {
          return (
            <Card className="h-[250px] min-w-[200px] rounded-xl flex flex-col items-center justify-center p-8 shadow-none bg-[#f5f5f5] ">
              <Avatar className="h-[90px] w-[90px]" src={prof.photo} />
              <Typography variant="h6" className="font-medium">
                {prof.name}
              </Typography>
              <p className="font-medium">{prof.description}</p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
