import { Avatar, Card, Typography } from '@mui/material';

export const CareerBlock = () => {
  return (
    <div className='my-10 bg-[#f5f5f5] p-5 rounded-xl'>
      <Typography variant="h3" className="font-semibold">
        Кем вы станете
      </Typography>
      <Typography variant="body1">
        После завершения этой специальности вы сможете стать:
      </Typography> 
      <div className="flex justify-between mt-5">
        <Card className="h-[250px] min-w-[200px] rounded-lg flex flex-col items-center justify-center p-8 shadow-none bg-white">
          <Avatar
            className="h-[90px] w-[90px]"
            src="https://cdn.skillbox.pro/landgen/blocks/universal-extra-info/224403/lg/54ef68f4-b6e5-403f-8288-438945abb2a7.webp"
          />
          <Typography variant="h6" className="font-medium">
            Product Manager
          </Typography>
          <p className='font-medium'>Зарплата 55000с</p>
        </Card>
        <Card className="h-[250px] min-w-[200px] rounded-xl flex flex-col items-center justify-center p-8 shadow-none bg-white">
          <Avatar
            className="h-[90px] w-[90px]"
            src="https://cdn.skillbox.pro/landgen/blocks/universal-extra-info/224403/lg/54ef68f4-b6e5-403f-8288-438945abb2a7.webp"
          />
          <Typography variant="h6" className="font-medium">
            Product Manager
          </Typography>
          <p className='font-medium'>Зарплата 55000с</p>
        </Card>
        <Card className="h-[250px] min-w-[200px] rounded-xl flex flex-col items-center justify-center p-8 shadow-none bg-white">
          <Avatar
            className="h-[90px] w-[90px]"
            src="https://cdn.skillbox.pro/landgen/blocks/universal-extra-info/224403/lg/54ef68f4-b6e5-403f-8288-438945abb2a7.webp"
          />
          <Typography variant="h6" className="font-medium">
            Product Manager
          </Typography>
          <p className='font-medium'>Зарплата 55000с</p>
        </Card>
        <Card className="h-[250px] min-w-[200px] rounded-xl flex flex-col items-center justify-center p-8 shadow-none bg-white">
          <Avatar
            className="h-[90px] w-[90px]"
            src="https://cdn.skillbox.pro/landgen/blocks/universal-extra-info/224403/lg/54ef68f4-b6e5-403f-8288-438945abb2a7.webp"
          />
          <Typography variant="h6" className="font-medium">
            Product Manager
          </Typography>
          <p className='font-medium'>Зарплата 55000с</p>
        </Card>

      </div>
    </div>
  );
};
