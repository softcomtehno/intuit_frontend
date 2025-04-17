import { Breadcrumbs, Card, Typography, Link } from '@mui/material'
import { t } from 'i18next'
import { specializationTypes } from '~entities/specialization'

export const SpecializationBanner = ({
  title,
  studyPeriod,
  trainingForm,
  diploma,
  photo,
  educationLevel,
  phoneNumber,
  contractPrice,
}: specializationTypes.Specialization) => {
  return (
    <div
      className="relative min-h-[350px]  flex flex-col justify-between p-10 rounded-2xl bg-[#d2effc]"
      // style={{
      //   background:
      //     'linear-gradient(175deg, rgba(42,33,115,1) 0%, rgba(0,149,111,1) 100%)',
      // }}
    >
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="black" href="/">
            {t('specialization.home')}
          </Link>
          <Typography color="black">{title}</Typography>
        </Breadcrumbs>
        <Typography
          variant="h1"
          component="h1"
          className="max-w-[600px] text-[47px] font-medium mt-3 text-black"
        >
          {title}
        </Typography>
        {/* <Button
          variant="contained"
          size="large"
          className="px-20 py-3 rounded-lg shadow-none bg-green mt-5"
        >
          Оставить заявку
        </Button> */}
      </div>
      <div className="flex gap-10 justify-between lg:flex-col lg:mt-10">
        <Card className="shadow-none min-w-[250px] p-5 rounded-2xl min-h-[100px] max-h-[50px] z-10">
          <p className="">{t('specialization.level')}</p>
          <Typography variant="h6" className="font-semibold">
            {educationLevel[0]}
          </Typography>
        </Card>
        <Card className="min-w-[250px] shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">{t('specialization.studyDuration')}</p>
          <Typography variant="h6" className="font-semibold">
            {studyPeriod}
          </Typography>
        </Card>
        <Card className="min-w-[250px] shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">{t('specialization.format')}</p>
          <Typography variant="h6" className="font-semibold">
            {trainingForm}
          </Typography>
        </Card>
        <Card className="min-w-[250px] shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">{t('specialization.result')}</p>
          <Typography variant="h6" className="font-semibold">
            {diploma}
          </Typography>
        </Card>
        {phoneNumber && (
          <Card className=" shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
            <p className="">Номер Телефона</p>
            <Typography variant="h6" className="font-semibold text-[18px]">
              {phoneNumber}
            </Typography>
          </Card>
        )}
        {contractPrice && (
          <Card className=" shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
            <p className="">Стоимость Контракта</p>
            <Typography variant="h6" className="font-semibold text-[18px]">
              {contractPrice}
            </Typography>
          </Card>
        )}
      </div>
      <img
        className="absolute right-[150px] top-0 h-[200px] w-[200px] lg:static lg:h-auto"
        src={photo}
        alt=""
      />
    </div>
  )
}
