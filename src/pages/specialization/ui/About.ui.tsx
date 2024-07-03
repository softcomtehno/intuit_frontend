import { Typography } from '@mui/material';

export const About = () => {
  return (
    <div className="flex gap-5 my-10">
      <div className="flex flex-col gap-4">
        <Typography variant="h3" className="font-semibold">
          В итоге вы освоите следующие навыки и инструменты
        </Typography>
        <p className="text-lg font-medium">
          Именно он следит, чтобы задачи проекта были выполнены в срок и сделаны
          на высшем уровне. Проджектов ищут все: от творческих стартапов до
          IT-компаний. Если вы любите общаться с людьми и упорядочивать хаос,
          вам понравится.
        </p>
      </div>
      <img
        className="rounded-2xl"
        src="https://cdn.skillbox.pro/landgen/blocks/market/116467/xl/c8f817ea-c2f2-4984-8bb1-b1dd4c22c72d.webp"
        alt=""
      />
    </div>
  );
};
