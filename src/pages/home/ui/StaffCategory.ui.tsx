import { Button } from '@mui/material';

const buttonLabels = [
  'Ректорат',
  'Директора Институтов',
  'Заведующий отделения',
  'Заместитель директора по УВР',
  'Профессорско-преподавательский состав',
];

const StaffButtonsSwiper = () => {
  return (
    <div className="my-5 py-1 px-1 staff-buttons-swiper flex gap-2">
      {buttonLabels.map((label) => (
        <Button
          size="small"
          variant="outlined"
          className="border-blue text-blue hover:bg-blue hover:text-white"
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default StaffButtonsSwiper;
