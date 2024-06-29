import { PaidRounded, SchoolRounded } from "@mui/icons-material"
import { Box, Card, Typography } from "@mui/material"

export const InfoBlock = () => {
  return (
    <Box className="grid grid-cols-2 gap-5 mt-10">
      <Card className="bg-[#e0e1e5] p-5 shadow-none flex flex-col justify-between gap-16">
        <Box className="flex flex-col gap-3">
          <Typography variant="h4" className="font-bold">
            Магистратура — следующий после бакалавриата уровень высшего
            образования, построенный на его основе. Магистратура предполагает
            двухгодичное обучение.
          </Typography>
          <Typography variant="body1">
            Она дает более глубокие знания по выбранной специальности и
            предусмотрена для тех, кто хочет заниматься наукой или стать
            преподавателем.
          </Typography>
        </Box>
        <Box className="flex justify-between">
          <Box className="flex gap-3  ">
            <div className="border-[1px] rounded-3xl border-black p-2">
              Выпускники
            </div>
            <div className="border-[1px] rounded-3xl border-black p-2">
              Бакалавриат
            </div>
          </Box>
          <Box className="flex gap-3">
            <div className="bg-white p-2 rounded-[100%]">
              <SchoolRounded></SchoolRounded>
            </div>
            <div className="bg-white p-2 rounded-[100%]">
              <PaidRounded></PaidRounded>
            </div>
          </Box>
        </Box>
      </Card>
      <Box className="grid grid-cols-2 gap-5">
        <Card className="bg-[#e0e1e5] shadow-none flex flex-col justify-between p-5 bg-[url('https://synergy.ru/assets/template/v5/new3/images/s_about/1.svg')] bg-no-repeat bg-right-bottom">
          <Typography variant="h3" className="font-bold">
            45
          </Typography>
          <Typography variant="h6">программ</Typography>
        </Card>
        <Card className="bg-[#e0e1e5] shadow-none flex flex-col justify-between p-5 bg-[url('https://synergy.ru/assets/template/v5/new3/images/s_about/1.svg')] bg-no-repeat bg-right-bottom">
          <Typography variant="h3" className="font-bold">
            45
          </Typography>
          <Typography variant="h6">программ</Typography>
        </Card>
        <Card className="bg-[#e0e1e5] shadow-none flex flex-col justify-between p-5 bg-[url('https://synergy.ru/assets/template/v5/new3/images/s_about/1.svg')] bg-no-repeat bg-right-bottom">
          <Typography variant="h3" className="font-bold">
            45
          </Typography>
          <Typography variant="h6">программ</Typography>
        </Card>
        <Card className="bg-[url('https://synergy.ru/assets/template/v5/new3/images/s_about/5533.webp')] bg-center bg-no-repeat bg-cover shadow-none flex flex-col justify-between p-5">
          <Typography variant="h3" className="font-bold text-white">
            45
          </Typography>
          <Typography variant="h6" className="text-white">
            программ
          </Typography>
        </Card>{' '}
      </Box>
    </Box>
  )
}
