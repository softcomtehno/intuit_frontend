import { Card, Typography } from '@mui/material';
import { eventTypes } from '..';
import { Link } from 'react-router-dom';

export const EventCard = ({ banner, title, slug }: eventTypes.Event) => {
  return (
    <Link to={`/news/event/${slug}`} className="relative block w-[350px] h-[200px] mx-2">
      <div className="absolute  bg-black rounded-xl backdrop-blur"></div>
      <Card
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-cover bg-center w-full h-full flex flex-col justify-between p-5 gap-3 rounded-xl shadow-lg border border-gray-300 relative z-10"
      >
        <Typography
          variant="body1"
          className="font-bold uppercase text-[18px] text-white drop-shadow-md"
        >
          {title}
        </Typography>
        <Link
          className="rounded text-white inline-block bg-green p-2 hover:bg-green-600 transition"
          to={`/news/event/${slug}`}
        >
          Узнать больше
        </Link>
      </Card>
    </Link>
  );
};

