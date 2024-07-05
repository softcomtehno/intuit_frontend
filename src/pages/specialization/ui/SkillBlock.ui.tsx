import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { specializationTypes } from '~entities/specialization';

const tasks = [
  'Проводить анализ CJM и конкурентов',
  'Составлять бэклог задач',
  'Формировать состав MVP',
  'Создавать дорожную карту на основе полученных данных',
  'Выдвигать гипотезы на основе аномалий',
  'Рассчитывать юнит-экономику',
  'Подготавливать карту стейкхолдеров',
  'Составлять бриф для проведения качественного исследования',
  'Проектировать дальнейший путь пользователя',
  'Составлять сценарий глубинного интервью',
];

const chunkArray = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};

const maxTasks = 10;

export const SkillsBlock = ({ skills }: specializationTypes.Specialization) => {
  const chunks = chunkArray(skills.slice(0, maxTasks), 5);
  return (
    <div>
      <Typography variant="h3" className="font-semibold">
        В итоге вы освоите следующие навыки и инструменты
      </Typography>

      <div className='flex gap-20'>
      <div className="p-5  border-t mt-5 border-gray">
        <List>
          {skills.map((chunk, chunkIndex) => (
            <ListItem className="p-0" key={chunkIndex}>
              <ListItemIcon className="min-w-[35px]">
                <CheckCircleRoundedIcon className="text-green" />
              </ListItemIcon>
              <ListItemText
                id={`${chunk.name} + ${chunkIndex}`}
                primary={chunk.name}
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className="border-t mt-5 border-gray  flex flex-wrap  gap-5 items-start  pt-5">
        <Tooltip title="My Sql  - язык базы данных" className='cursor-pointer'>
        <div className="flex bg-[#f5f5f5] py-2 px-3 gap-2 rounded-md border border-gray">
          <img
            className="rounded max-h-[40px] "
            src="https://248006.selcdn.ru/LandGen/46927/MySQL.svg"
            alt=""
          />
          <p className="font-bold">My Sql</p>
        </div>
        </Tooltip>
        <Tooltip title="Яндекс метрика - аналихз данных сайта" className='cursor-pointer'>
        <div className="flex bg-[#f5f5f5] py-2 px-3 gap-2 rounded-md border border-gray">
          <img
            className="rounded max-h-[40px] "
            src="https://248006.selcdn.ru/LandGen/46712/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%9C%D0%B5%D1%82%D1%80%D0%B8%D0%BA%D0%B0.svg"
            alt=""
          />
          <p className="font-bold">Яндекс Метрика</p>
        </div>
        </Tooltip>
        <Tooltip title="Figma - это инструмент для дизайна" className='cursor-pointer'>
        <div className="flex bg-[#f5f5f5] py-2 px-3 gap-2 rounded-md border border-gray">
          <img
            className="rounded max-h-[40px] "
            src="https://248006.selcdn.ru/LandGen/46658/adjust.svg"
            alt=""
          />
          <p className="font-bold">Adjust</p>
        </div>
        </Tooltip>
      </div>
      </div>
    </div>
  );
};
