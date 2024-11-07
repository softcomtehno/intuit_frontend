import React from 'react';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/system';

interface DescriptionCardProps {
  subtitle: string;
  text: string;
  subtext: string;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({
  subtitle,
  text,
  subtext,
}) => {
  return (
    <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
      <CardContent>
        <Typography
          variant="h5"
          className="text-center font-semibold text-blue-600"
        >
          {subtitle}
        </Typography>
        <Divider className="my-4" />
        <Box className="text-gray-700 space-y-4 leading-relaxed">
          {text.split('\r\n\r\n').map((paragraph, index) => (
            <Typography key={index} variant="body1" paragraph>
              {paragraph}
            </Typography>
          ))}
        </Box>
        <Divider className="my-4" />
        <Box className="text-gray-500 space-y-2">
          {subtext.split('\r\n\r\n').map((paragraph, index) => (
            <Typography key={index} variant="body2" paragraph>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default DescriptionCard;
