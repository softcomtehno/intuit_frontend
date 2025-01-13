import {
  Typography,
  Container,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

export const ApplicantsPage = () => {
  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Информация для абитуриентов
      </Typography>

      <Grid container spacing={4}>
        {/* Раздел 1: Поступление на бюджет и контракт */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6" className="font-semibold mb-4">
              Поступление
            </Typography>
            <Typography variant="body1" gutterBottom>
              В МУИТ можно поступить на бюджетные места, финансируемые из
              бюджета МУИТ (если ОРТ свыше 200 баллов или золотой сертификат), и
              на контрактную основу обучения.
            </Typography>
            <Typography variant="body1">
              Льготы по оплате предоставляются инвалидам I и II групп,
              детям-сиротам и детям, находящимся под опекой. Размер и период
              предоставления льгот устанавливается комиссией МУИТ.
            </Typography>
          </Box>
        </Grid>

        {/* Раздел 2: Регистрация и отбор абитуриентов */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6" className="font-semibold mb-4">
              Регистрация и отбор
            </Typography>
            <Typography variant="body1" gutterBottom>
              Электронная регистрация осуществляется исключительно в
              дистанционном формате на порталах:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="https://2020.edu.gov.kg (для граждан КР)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="https://edugate.edu.gov.kg (для иностранных граждан)" />
              </ListItem>
            </List>
          </Box>
        </Grid>

        {/* Раздел 3: Документы для поступления */}
        <Grid item xs={12}>
          <Box>
            <Typography variant="h6" className="font-semibold mb-4">
              Документы при электронной регистрации
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Скан-копия паспорта" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Скан-копия документа об образовании" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Электронная версия фотографии размером 3х4 см" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Скан-копии документов, дающих право на льготы" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Скан-копия сертификата ОРТ (для граждан КР)" />
              </ListItem>
            </List>
          </Box>
        </Grid>

        {/* Раздел 4: Дополнительная информация */}
        <Grid item xs={12}>
          <Box>
            <Typography variant="h6" className="font-semibold mb-4">
              Дополнительная информация
            </Typography>
            <Typography variant="body1">
              • Справка № 086-У не требуется.
              <br />
              • МУИТ не имеет общежитий.
              <br />• Полный перечень специальностей доступен в буклете МУИТ.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
