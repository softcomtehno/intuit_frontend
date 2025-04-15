import {
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Link,
} from '@mui/material'
import ComtehnoLogo from './comtehno-logo.png' // Add appropriate logos
import InnovativeCollegeLogo from './innovative-college-logo.png'
import { NewsList } from '~widgets/news-list'
import { SpeakerVideoList } from '~widgets/speaker-list'
import { EnrollForm } from '~widgets/enroll-form'

export const CollegesPage = () => {
  return (
    <section className="my-10">
      <Container maxWidth="lg" className="py-10 px-4">
        <Typography
          variant="h4"
          className="font-bold text-center mb-8 text-gray-800"
          style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
        >
          Колледжи
        </Typography>

        <Typography
          variant="body1"
          className="text-gray-700 mb-6"
          style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', lineHeight: 1.6 }}
        >
          После 9-го класса или 11-класса ученики могут поступить в колледжи,
          чтобы получить среднее профессиональное образование. Колледжи
          предлагают практические и теоретические знания, которые помогают
          готовить специалистов в различных областях. Это отличный выбор для
          тех, кто хочет начать карьеру или продолжить обучение в вузе.
        </Typography>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="https://comtehno.kg/"
            className="no-underline"
            target="_blank"
            rel="noopener"
          >
            <Card className="flex flex-col sm:flex-row mb-4 border border-gray shadow-none hover:shadow-lg p-4 w-full max-w-lg items-center">
              <CardMedia
                component="img"
                alt="Bishkek College Logo"
                image={ComtehnoLogo}
                className="h-[120px] w-[120px] object-cover"
              />
              <CardContent>
                <Typography
                  variant="h6"
                  component="h5"
                  className="text-lg font-semibold mb-2"
                >
                  Бишкекский колледж компьютерных систем и технологий
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="mb-2"
                >
                  Колледж предлагает направления по программированию,
                  менеджменту, дизайну, и другим востребованным профессиям.
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="text-blue-500"
                >
                  Подробнее на сайте: https://comtehno.kg/
                </Typography>
              </CardContent>
            </Card>
          </Link>

          <Link
            href="https://itec.kg/"
            className="no-underline"
            target="_blank"
            rel="noopener"
          >
            <Card className="flex flex-col sm:flex-row mb-4 border border-gray shadow-none hover:shadow-lg p-4 w-full max-w-lg items-center">
              <div className="bg-blue inline-block w-[120px] rounded">
                <CardMedia
                  component="img"
                  alt="Innovative College Logo"
                  image={InnovativeCollegeLogo}
                  className="h-[120px] w-[120px] object-cover"
                />
              </div>
              <CardContent>
                <Typography
                  variant="h6"
                  component="h5"
                  className="text-lg font-semibold mb-2"
                >
                  Колледж инновационных технологий и <br /> экономики
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="mb-2"
                >
                  Этот колледж обучает студентов профессиям в области экономики,
                  дизайна, IT, и управления.
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="text-blue-500"
                >
                  Подробнее на сайте: https://itec.kg/
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
        <Typography
          variant="body1"
          className="text-gray-700 mt-6"
          style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', lineHeight: 1.6 }}
        >
          Эти колледжи предлагают отличные возможности для начала карьеры в
          востребованных областях, таких как IT, управление, экономика, и
          дизайн. Вы можете развивать свои навыки и получить профессию, которая
          будет востребована на рынке труда.
        </Typography>
      </Container>
      <NewsList />
      <SpeakerVideoList />
      <EnrollForm />
    </section>
  )
}
