import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type FacultyPageType = {
  title: string;
  banner: string;
  programCount:number;
};
export const InstituteBanner: React.FC<FacultyPageType> = ({
  title,
  banner,
  programCount
}) => {
  console.log(banner);
  
  return (
    <div className="bg-[#f5f5f5] p-7 rounded-2xl flex md:flex-col ">
      <div className="flex flex-col justify-between min-h-[400px] ">
        <div>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/">
              Главная
            </Link>
            <Link to="/institutes/">Институты</Link>
            <Typography color="text.primary">{title}</Typography>
          </Breadcrumbs>
          <Typography
            variant="h1"
            component="h1"
            className="text-[3.3rem] font-medium mt-7  lg:text-[40px] md:!text-[30px] "
          >
            {title}
          </Typography>
        </div>
        <div className="self-start border py-1 px-7 rounded-lg">
          {programCount} Программ
        </div>
      </div>
      <img
        className="h-[350px] rotate-[45deg] self-end lg:max-h-[250px]"
        src={banner}
        alt=""
      />
    </div>
  );
};
