import { Card } from '@mui/material';
import CodeIcon from '../../assets/code-icon.svg';
import { Link } from 'react-router-dom';

type FacultyCardProps = {
  instituteName: string;
  programCount: number;
  slug:string
};

export const FacultyCard: React.FC<FacultyCardProps> = ({
  instituteName,
  programCount,
  slug,
}) => {
  return (
    <Link to={`/institutes/${slug}/`}>
      <Card className="min-w-[400px] max-w-[400px] min-h-[190px] p-5 text-black/80 rounded-lg border border-gray shadow-none transition duration-300 hover:bg-green  hover:text-white flex flex-col  hover:shadow-xl hover:cursor-pointer sm:min-w-[300px]">
        <h3 className="font-bold min-h-[51px] text-lg">{instituteName}</h3>
        <div className="flex justify-between min-h-[90px]">
          <div className="self-end px-6 py-1 border border-gray rounded-full text-sm">
            {programCount} программ
          </div>
          <img
            className="h-[40px] w-[40px] rounded-full self-end"
            alt="Intuit"
            src={CodeIcon}
          />
        </div>
      </Card>
    </Link>
  );
};
