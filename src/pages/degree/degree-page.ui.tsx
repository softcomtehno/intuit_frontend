import { SwiperIntro } from '~widgets/swiper-intro'
import { InfoBlock } from './ui/info-block.ui'
import { Typography } from '@mui/material'

export const DegreePage = () => {
  return (
    <>
      <div className="my-10">
        <SwiperIntro></SwiperIntro>
        <InfoBlock></InfoBlock>
        <Typography variant="h2">Программы обучения</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla
          alias voluptates facilis, molestiae veritatis amet laborum eligendi
          totam similique incidunt earum cum corporis autem cupiditate eveniet
          nesciunt officia inventore deserunt sunt! Iure quae officia mollitia,
          facere aperiam debitis quo. Eum minima expedita accusamus qui
          repudiandae. Sit mollitia nemo culpa?
        </p>
        <Typography variant="h2" className="my-5">
          Отзывы студентов
        </Typography>

      </div>
    </>
  )
}
