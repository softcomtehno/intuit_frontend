import {
  Container,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from '@mui/material';

export const WindowPage = () => {
  const services = [
    { name: 'Обходной лист', time: '1 рабочий день' },
    { name: 'Справка с места учебы', time: '1 рабочий день' },
    { name: 'Справка в военкомат', time: '1 рабочий день' },
    { name: 'Академическая справка', time: '3 рабочих дня' },
    { name: 'Архивная справка', time: '3 рабочих дня' },
  ];

  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography variant="h4" className="font-semibold text-gray-700 mb-6">
        Услуги в режиме "Единого окна"
      </Typography>

      <Typography className="text-gray-600 mb-6">
        В целях реализации Концепции цифровой трансформации "Цифровой Кыргызстан
        2019-2023" и обеспечения качественного, своевременного оказания услуг, в
        МУИТ автоматизированы следующие виды услуг:
      </Typography>

      <TableContainer component={Paper} className="mb-8">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell>
                <Typography className="font-semibold">Услуга</Typography>
              </TableCell>
              <TableCell>
                <Typography className="font-semibold">
                  Срок выполнения
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service, index) => (
              <TableRow key={index}>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography className="text-gray-600 mb-4">
        Готовые справки можно получить в кабинете "Единое окно" (Учебное
        управление, каб. 346). При себе иметь документ, удостоверяющий личность.
      </Typography>

      <Typography className="text-gray-600 mb-6">
        Телефоны для справок: 0312 46-79-15 <br />
        Для студентов очной формы обучения: +996-707-980-788 <br />
        Для студентов заочной формы обучения: +996-709-988-758
      </Typography>

      <div>
        <a
        target='_blank'
          href="http://178.217.169.139:3000/lms/login"
          className=" border  p-2 rounded bg-green text-white border-white"
        >
          Подать заявку на справку
        </a>
      </div>
    </Container>
  );
};
