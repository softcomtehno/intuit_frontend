import { Typography, Box } from '@mui/material';
import { specializationTypes } from '~entities/specialization';

export const About = ({
  text,
  subtext,
  textPhoto,
}: specializationTypes.Specialization) => {
  return (
    <Box
      className="flex gap-10 my-12 lg:flex-col lg:items-center justify-between"
      component="section"
      sx={{
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth:'750px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textAlign: { xs: 'center', lg: 'left' },
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.125rem',
            color: 'text.secondary',
            lineHeight: 1.75,
            textAlign: { xs: 'justify', lg: 'left' },
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: subtext }} />
        </Typography>
      </Box>
      <Box
        component="img"
        src={textPhoto}
        alt="Фото о профессии"
        sx={{
          maxWidth: '450px',
          borderRadius: '16px',
          maxHeight:"300px",
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
    </Box>
  );
};
