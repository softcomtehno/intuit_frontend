import { Typography, Box } from '@mui/material';
import { specializationTypes } from '~entities/specialization';

export const About = ({
  text,
  subtext,
  textPhoto,
}: specializationTypes.Specialization) => {
  return (
    <Box
      className="flex gap-10 my-12 lg:flex-col lg:items-center"
      component="section"
      sx={{
        alignItems: 'center',
      }}
    >
      {/* Текстовая информация */}
      <Box
        sx={{
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
          {/* Безопасный рендеринг HTML */}
          <div dangerouslySetInnerHTML={{ __html: subtext }} />
        </Typography>
      </Box>

      {/* Фото */}
      <Box
        component="img"
        src={textPhoto}
        alt="Фото о профессии"
        sx={{
          maxWidth: '400px',
          borderRadius: '16px',
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
