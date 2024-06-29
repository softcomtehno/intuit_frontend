import { ProfessionCard } from '~entities/profession'
import { Footer } from '~widgets/footer'
import { Header } from '~widgets/header'
import { NewsCard } from '~widgets/news-card'

const news = {
  image:
    'https://intuit.kg/media/news/images/banners/WhatsApp_Image_2024-05-31_at_14.03.57.jpeg',
  title: 'Международная межвузовская научно-практическая конференция',
  description: '31 мая 2024 г. 17:06',
  link: '#',
}

const profession = {
  title: 'Международная межвузовская научно-практическая конференция',
  degree: 'Бакалавриат',
  faculties: 'Программирование',
  url: 'Maksat loh',
}

export function HomePage() {
  return (
    <div>
      <Header />
      <h1 className="my-20 font-medium">
        <NewsCard {...news} />
        <ProfessionCard {...profession}></ProfessionCard>
      </h1>
      <Footer />
    </div>
  )
}
