import {
  Typography,
  Container,
} from '@mui/material';


export const ApplicantsPage = () => {
  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
      >
        Абитуриентам
      </Typography>

    </Container>
  );
};
