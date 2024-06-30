import { Card } from '@mui/material';
import CodeIcon from '../../assets/code-icon.svg';
import { Link } from 'react-router-dom';

type FacultyCardProps = {
  instituteName: string;
  programCount: number;
};

export const FacultyCard: React.FC<FacultyCardProps> = ({
  instituteName,
  programCount,
}) => {
  return (
    <Link to={`/institutes/${instituteName}/`}>
      <Card className="min-w-[400px] max-w-[400px] min-h-[190px] p-5 text-black/80 rounded-lg transition duration-300 hover:bg-green hover:scale-105 hover:text-white flex flex-col bg-[#ecedf0] shadow-none  hover:shadow-xl hover:cursor-pointer">
        <h3 className="font-bold min-h-[51px]">{instituteName}</h3>
        <div className="flex justify-between min-h-[90px]">
          <div className="self-end px-5 py-1 border border-gray rounded-full">
            {programCount} программ
          </div>
          <img
            className="h-[80px] w-[80px] rounded-full self-end"
            alt="Intuit"
            src={CodeIcon}
          />
        </div>
      </Card>
    </Link>
  );
};
