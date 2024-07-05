import { Breadcrumbs, Card, Typography,Link, Button  } from '@mui/material';
import { specializationTypes } from '~entities/specialization';

export const SpecializationBanner = ({
  title,
  studyPeriod,
  trainingForm,
  diploma,
  photo,
}: specializationTypes.Specialization) => {
  return (
    <div className="relative min-h-[550px]  flex flex-col justify-between p-10 rounded-2xl bg-[#d2effc]">
      <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Главная
        </Link>
        <Typography color="text.primary">{title}</Typography>
      </Breadcrumbs>
      <Typography
        variant="h1"
        component="h1"
        className="max-w-[500px] text-[47px] font-medium mt-3"
      >
        {title}
      </Typography>
      <Button variant='contained' size='large' className='px-20 py-3 rounded-lg shadow-none bg-green mt-5'>Оставить заявку</Button>
      </div>
      <div className="flex gap-10 justify-between">
        <Card className="shadow-none min-w-[250px]  p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">Уровень</p>
          <Typography variant="h6" className="font-semibold">
            Бакалавриат
          </Typography>
        </Card>
        <Card className="min-w-[250px] shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">Срок обучения</p>
          <Typography variant="h6" className="font-semibold">
            {studyPeriod}
          </Typography>
        </Card>
        <Card className="min-w-[250px] shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">Формат</p>
          <Typography variant="h6" className="font-semibold">
            {trainingForm}
          </Typography>
        </Card>
        <Card className="min-w-[250px] shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">Результат</p>
          <Typography variant="h6" className="font-semibold">
            {diploma}
          </Typography>
        </Card>
      </div>
      <img
        className=" absolute right-0 top-0 h-[620px]"
        src={`${photo}`}
        alt=""
      />
    </div>
  );
};
