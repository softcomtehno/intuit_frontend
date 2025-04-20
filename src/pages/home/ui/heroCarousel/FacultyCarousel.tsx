import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { Link, useNavigate } from 'react-router-dom';

import { facultyQueries } from '~entities/faculties';

export const FacultyCarousel: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    data: eventsData,
    isLoading,
    isError,
  } = facultyQueries.useGetFaculties();

  if (isLoading) {
    return <div>Загрузка</div>;
  }
  if (isError) {
    return <div>Ошибка</div>;
  }

  return (
    <div className="w-full overflow-hidden">
      <Marquee direction="left" speed={100} className="overflow-x-none">
        <div className="flex items-center r-sm:gap-3 r-sm:ml-3 gap-4 ml-4">
          {eventsData.data.map((carusel, i) => (
            <Link
              key={i}
              to={`/institutes/${carusel.slug}`}
              className="no-underline"
            >
              {!isMobile ? (
                <div className="group flex items-center justify-between backdrop-blur-xl bg-white/30 p-3 rounded-lg w-full text-white hover:bg-white/90 hover:text-black transition">
                  <div className="flex flex-col items-start">
                    <Typography
                      variant="h3"
                      className="text-[14px] font-normal gap-1 flex items-center"
                    >
                      {carusel.subtitle}
                      <ArrowUpRight
                        size={18}
                        className="ml-1 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </Typography>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4">
                  <Typography
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: '220px',
                    }}
                    variant="h3"
                    className="mb-2 r-sm:text-base backdrop-blur-xl bg-white/30 px-2 py-1 rounded-md text-white text-lg font-normal hover:bg-white/40 transition"
                  >
                    {carusel.subtitle}
                  </Typography>
                </div>
              )}
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
