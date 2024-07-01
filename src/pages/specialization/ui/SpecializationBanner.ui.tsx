import { Card, Typography } from '@mui/material';

export const SpecializationBanner = () => {
  return (
    <div className="relative min-h-[550px]  flex flex-col justify-between p-10 rounded-2xl bg-[#d2effc]">
      <Typography
        variant="h1"
        component="h1"
        className="max-w-[500px] text-[47px] font-medium"
      >
        Профессия Продакт-менеджер
      </Typography>
      <div className="flex gap-10 justify-between">
        <Card className="min-w-[250px] shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">Уровень</p>
          <Typography variant="h6" className="font-semibold">
            Бакалавриат
          </Typography>
        </Card>
        <Card className="min-w-[250px] shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">Срок обучения</p>
          <Typography variant="h6" className="font-semibold">
            4 года
          </Typography>
        </Card>
        <Card className="min-w-[250px] shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">Формат</p>
          <Typography variant="h6" className="font-semibold">
            Очный
          </Typography>
        </Card>
        <Card className="min-w-[250px] shadow-none p-5 rounded-2xl min-h-[100px] max-h-[100px] z-10">
          <p className="">Результат</p>
          <Typography variant="h6" className="font-semibold">
            Диплом
          </Typography>
        </Card>
      </div>
      <img
        className=" absolute right-0 top-0 h-[620px]"
        src="https://cdn.skillbox.pro/landgen/blocks/start-screen/283197/lg/11a76d78-4fd8-4760-a3d9-8404180dfc29.webp"
        alt=""
      />
    </div>
  );
};
