import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const InstituteBanner = () => {
  return (
    <div className="bg-[#f5f5f5] p-7 rounded-2xl flex ">
      <div className="flex flex-col justify-between min-h-[400px] ">
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/">
              Главная
            </Link>
            <Link to="/institutes/">Институты</Link>
            <Typography color="text.primary">Breadcrumbs</Typography>
          </Breadcrumbs>
          <Typography
            variant="h1"
            component="h1"
            className="text-[3.3rem] font-medium mt-7"
          >
            Институт Цифровой Трансформации и Программирования
          </Typography>
        </div>
        <div className="self-start border py-1 px-7 rounded-lg">
          15 Программ
        </div>
      </div>
      <img
        className="h-[350px] rotate-[45deg] self-end"
        src="https://sys3.ru/synergy-ru/content/faculties/new3_big/programmirovanie.svg"
        alt=""
      />
    </div>
  );
};
