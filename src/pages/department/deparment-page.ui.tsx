import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

export const DeparmentPage = () => {
  return (
    <Container maxWidth="lg" className="py-10">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
      >
        Департамент качества образования
      </Typography>
      <Typography variant="h6" className="text-center text-gray-600 mb-10">
        Департамент обеспечения и контроля качества образования
      </Typography>

      <Box className="border-2 border-blue-500 rounded-lg p-6 mb-8">
        <Typography variant="body1" className="text-gray-700">
          Основной целью Департамента качества образования является координация
          образовательного процесса и организация деятельности структурных
          подразделений, отделов и служб университета по управлению и
          обеспечению качества образования, с целью удовлетворения потребителей
          (работодателей, студентов, родителей, общества и т.д.) и других
          заинтересованных сторон.
        </Typography>
      </Box>

      <Typography variant="h5" className="font-bold text-gray-800 mb-6">
        МИССИЯ МУИТ
      </Typography>
      <Box className="border-2 border-blue-500 rounded-lg p-6 mb-8">
        <Typography variant="body1" className="text-gray-700">
          Миссия МУИТ - подготовка конкурентоспособных специалистов, отвечающих
          требованиям и ожиданиям заинтересованных сторон, владеющих
          инновационными технологиями, способных эффективно решать инженерные и
          социально-экономические проблемы современного общества.
        </Typography>
      </Box>

      <Typography variant="h5" className="font-bold text-gray-800 mb-6">
        СТРАТЕГИЧЕСКИЕ ЦЕЛИ
      </Typography>
      <Grid container spacing={4}>
        {[
          'Модернизация деятельности учебно-образовательного комплекса через наращивание научного потенциала ППС...',
          'Поддерживать тесное сотрудничество с работодателями на предмет модернизации учебных программ...',
          'Разрабатывать и внедрять актуальные на рынке труда инновационные образовательные программы...',
          'Улучшать материально-техническую базу образовательной и научной деятельности...',
        ].map((goal, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card className="border-2 border-blue-500 rounded-lg">
              <CardContent>
                <Typography variant="body2" className="text-gray-700">
                  {goal}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
