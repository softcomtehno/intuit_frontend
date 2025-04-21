import { Card } from '@mui/material';
import CodeIcon from '../../assets/code-icon.svg';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

type FacultyCardProps = {
  instituteName: string;
  programCount: number;
  slug: string;
};

export const FacultyCard: React.FC<FacultyCardProps> = ({
  instituteName,
  programCount,
  slug,
  icon,
}) => {
  return (
    <Link to={`/institutes/${slug}/`} className='md:w-full'>
      <Card className="min-w-[400px] max-w-[400px] h-[190px] p-5 rounded-lg border border-gray shadow-none transition duration-300 bg-green  text-white flex flex-col  hover:shadow-xl hover:cursor-pointer md:min-w-full ">
        <h3 className="font-bold min-h-[51px] text-lg">{instituteName}</h3>
        <div className="flex justify-between min-h-[90px] items-end">
          <div className="self-end sm:text-xs px-2 py-1 bg-blue/80 font-bold rounded-full text-sm">
            {programCount} {t('homepage.programs')}
          </div>
          <img
            className="h-[140px] sm:h-[120px] sm:w-[150px] w-[200px] relative bottom-[-35px] right-[-60px] self-end filter invert opacity-70"
            alt="Intuit"
            src={icon}
          />
        </div>
      </Card>
    </Link>
  );
};
