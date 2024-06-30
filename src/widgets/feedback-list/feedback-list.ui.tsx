import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/scrollbar'
import { FeedbackCard } from '~entities/feedback'

export const FeedbackList = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper p-10 cursor-grabbing select-none	"
        slidesPerView={3}
        spaceBetween={30}
      >
        <SwiperSlide>
          <FeedbackCard
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quo. Temporibus, esse suscipit culpa aliquid, sequi voluptatibus natus corrupti blanditiis expedita provident ut quia facilis tempora pariatur saepe. Voluptatem totam non fugiat, perferendis eius tempora iste animi esse dolor excepturi cum optio rem. Deserunt veritatis blanditiis perferendis quae nobis rem.'
            }
          ></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quo. Temporibus, esse suscipit culpa aliquid, sequi voluptatibus natus corrupti blanditiis expedita provident ut quia facilis tempora pariatur saepe. Voluptatem totam non fugiat, perferendis eius tempora iste animi esse dolor excepturi cum optio rem. Deserunt veritatis blanditiis perferendis quae nobis rem.'
            }
          ></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quo. Temporibus, esse suscipit culpa aliquid, sequi voluptatibus natus corrupti blanditiis expedita provident ut quia facilis tempora pariatur saepe. Voluptatem totam non fugiat, perferendis eius tempora iste animi esse dolor excepturi cum optio rem. Deserunt veritatis blanditiis perferendis quae nobis rem.'
            }
          ></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quo. Temporibus, esse suscipit culpa aliquid, sequi voluptatibus natus corrupti blanditiis expedita provident ut quia facilis tempora pariatur saepe. Voluptatem totam non fugiat, perferendis eius tempora iste animi esse dolor excepturi cum optio rem. Deserunt veritatis blanditiis perferendis quae nobis rem.'
            }
          ></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quo. Temporibus, esse suscipit culpa aliquid, sequi voluptatibus natus corrupti blanditiis expedita provident ut quia facilis tempora pariatur saepe. Voluptatem totam non fugiat, perferendis eius tempora iste animi esse dolor excepturi cum optio rem. Deserunt veritatis blanditiis perferendis quae nobis rem.'
            }
          ></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quo. Temporibus, esse suscipit culpa aliquid, sequi voluptatibus natus corrupti blanditiis expedita provident ut quia facilis tempora pariatur saepe. Voluptatem totam non fugiat, perferendis eius tempora iste animi esse dolor excepturi cum optio rem. Deserunt veritatis blanditiis perferendis quae nobis rem.'
            }
          ></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quo. Temporibus, esse suscipit culpa aliquid, sequi voluptatibus natus corrupti blanditiis expedita provident ut quia facilis tempora pariatur saepe. Voluptatem totam non fugiat, perferendis eius tempora iste animi esse dolor excepturi cum optio rem. Deserunt veritatis blanditiis perferendis quae nobis rem.'
            }
          ></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quo. Temporibus, esse suscipit culpa aliquid, sequi voluptatibus natus corrupti blanditiis expedita provident ut quia facilis tempora pariatur saepe. Voluptatem totam non fugiat, perferendis eius tempora iste animi esse dolor excepturi cum optio rem. Deserunt veritatis blanditiis perferendis quae nobis rem.'
            }
          ></FeedbackCard>
        </SwiperSlide>
        <SwiperSlide>
          <FeedbackCard
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quo. Temporibus, esse suscipit culpa aliquid, sequi voluptatibus natus corrupti blanditiis expedita provident ut quia facilis tempora pariatur saepe. Voluptatem totam non fugiat, perferendis eius tempora iste animi esse dolor excepturi cum optio rem. Deserunt veritatis blanditiis perferendis quae nobis rem. flkdsjfklsdajfklasjdklfjsdaklfjkl'
            }
          ></FeedbackCard>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
