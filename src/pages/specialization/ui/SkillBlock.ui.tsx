import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

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
const chunks = chunkArray(tasks.slice(0, maxTasks), 5);

export const SkillsBlock = () => {
  return (
    <div>
      <Typography variant="h3" className="font-semibold">
        В итоге вы освоите следующие навыки и инструменты
      </Typography>
      <div className="bg-[#f5f5f5] p-5 flex justify-between rounded-xl  mt-3">
        {chunks.map((chunk, chunkIndex) => (
          <List key={chunkIndex}>
            {chunk.map((task, taskIndex) => (
              <ListItem className="p-0" key={taskIndex}>
                <ListItemIcon className="min-w-[35px]">
                  <CheckCircleRoundedIcon className="text-green" />
                </ListItemIcon>
                <ListItemText id={`${task} + ${taskIndex}`} primary={task} />
              </ListItem>
            ))}
          </List>
        ))}
      </div>
      <div className="bg-[#f5f5f5] p-5 flex  gap-3 flex-wrap rounded-xl  mt-3">
        <div className="flex bg-white py-2 px-3 gap-2 rounded-md">
          <img
            className="rounded"
            src="https://248006.selcdn.ru/LandGen/46927/MySQL.svg"
            alt=""
          />
          <p className="font-bold">My Sql</p>
        </div>
        <div className="flex bg-white py-2 px-3 gap-2 rounded-md">
          <img
            className="rounded"
            src="https://248006.selcdn.ru/LandGen/46927/MySQL.svg"
            alt=""
          />
          <p className="font-bold">My Sql</p>
        </div>
        <div className="flex bg-white py-2 px-3 gap-2 rounded-md">
          <img
            className="rounded"
            src="https://248006.selcdn.ru/LandGen/46927/MySQL.svg"
            alt=""
          />
          <p className="font-bold">My Sql</p>
        </div>
        <div className="flex bg-white py-2 px-3 gap-2 rounded-md">
          <img
            className="rounded"
            src="https://248006.selcdn.ru/LandGen/46927/MySQL.svg"
            alt=""
          />
          <p className="font-bold">My Sql</p>
        </div>
      </div>
    </div>
  );
};
