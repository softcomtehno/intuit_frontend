import { Typography } from '@mui/material'

export const AboutBlock = () => {
  return (
    <div>
      <Typography variant="h3" component="div" className="font-semibold">
        Об Университете
      </Typography>
      <div className="flex justify-between md:flex-col-reverse">
        <div className="max-w-[800px]">
          <Typography variant="h4">
            <b className="text-blue">Наша цель</b> — качественное образование
            для вашей успешной карьеры
          </Typography>
          <Typography variant="subtitle1">
            В Муит готовят высококлассных специалистов, востребованных в России
            и за рубежом. Начните строить своё профессиональное будущее вместе с
            нами. Более 25 лет в Муит обучают актуальным и востребованным
            профессиям. У нас вы получите знания, которые помогут развить свой
            бизнес или устроиться на работу в крупную компанию.
          </Typography>
        </div>
        <img
          className="h-[350px] md:h-auto"
          src="https://intuit.kg/static/img/header/welcome.png"
          alt=""
        />
      </div>
    </div>
  )
}
