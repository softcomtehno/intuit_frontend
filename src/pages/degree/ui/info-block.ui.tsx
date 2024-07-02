import { PaidRounded, SchoolRounded } from '@mui/icons-material';
import { Box, Card, Typography } from '@mui/material';

interface InfoBlockProps {
  title: string;
  description: string;
  tags: string[];
  stats: { value: string; label: string }[];
}

export const InfoBlock: React.FC<InfoBlockProps> = ({
  title,
  description,
  tags,
  stats,
}) => {
  const staticBackgrounds = [
    'https://synergy.ru/assets/template/v5/new3/images/s_about/1.svg',
    'https://synergy.ru/assets/template/v5/new3/images/s_about/1.svg',
    'https://synergy.ru/assets/template/v5/new3/images/s_about/1.svg',
    'https://i.pinimg.com/736x/27/ab/89/27ab89c2730038168938dc8af4cdb8f7.jpg',
  ];

  return (
    <Box className="grid grid-cols-2 gap-5 my-7">
      <Card className="bg-[#e0e1e5] p-5 shadow-none flex flex-col justify-between gap-16 rounded-xl">
        <Box className="flex flex-col gap-3">
          <Typography variant="h4" className="font-bold">
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
        <Box className="flex justify-between">
          <Box className="flex gap-3">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="border-[1px] rounded-3xl border-black p-2"
              >
                {tag}
              </div>
            ))}
          </Box>
          <Box className="flex gap-3">
            <div className="bg-white p-2 rounded-[100%]">
              <SchoolRounded />
            </div>
            <div className="bg-white p-2 rounded-[100%]">
              <PaidRounded />
            </div>
          </Box>
        </Box>
      </Card>
      <Box className="grid grid-cols-2 gap-5">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="bg-[#e0e1e5] shadow-none flex flex-col justify-between p-5 rounded-xl"
            style={{
              backgroundImage: `url(${staticBackgrounds[index]})`,
              backgroundSize:
                staticBackgrounds[index] ===
                'https://i.pinimg.com/736x/27/ab/89/27ab89c2730038168938dc8af4cdb8f7.jpg'
                  ? 'cover'
                  : 'auto',
              backgroundPosition: 'right bottom',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Typography
              variant="h3"
              className={`font-bold ${
                staticBackgrounds[index] ===
                'https://i.pinimg.com/736x/27/ab/89/27ab89c2730038168938dc8af4cdb8f7.jpg'
                  ? 'text-white '
                  : ''
              }`}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="h6"
              className={`${
                staticBackgrounds[index] ===
                'https://i.pinimg.com/736x/27/ab/89/27ab89c2730038168938dc8af4cdb8f7.jpg'
                  ? 'text-white'
                  : ''
              }`}
            >
              {stat.label}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default InfoBlock;
