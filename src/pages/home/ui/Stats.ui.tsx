import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { t } from 'i18next';
interface StatsCardProps {
  count: number;
  label: string;
  color?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ count, label, color = 'blue' }) => {
    const [isCounting, setIsCounting] = useState(false);
    const { ref, inView } = useInView({
      triggerOnce: false, 
      threshold: 0.3, 
    });
  
    React.useEffect(() => {
      if (inView) {
        setIsCounting(true);
      } else {
        setIsCounting(false); 
      }
    }, [inView]);
  
    return (
      <Card
        ref={ref}
        className="w-[300px] border border-gray rounded-lg flex flex-col "
      >
        <CardContent>
          <Typography
            variant="h5"
            className={`text-${color}-600 font-bold text-center`}
          >
            {isCounting ? (
              <CountUp start={0} end={count} duration={2} separator="" />
            ) : (
              '0'
            )}
          </Typography>
          <Typography
            variant="subtitle1"
            className="mt-2 font-semibold text-center"
          >
            {label}
          </Typography>
        </CardContent>
      </Card>
  );
};

export const Stats = () => {
  return (
      <div className="flex justify-between flex-wrap my-5 lg:justify-center lg:gap-3">
      <StatsCard count={2007} label={t('homepage.Stats.yearOfEstablishment')} />
      <StatsCard count={8} label={t('homepage.Stats.institutes')} color="green" />
      <StatsCard count={120} label={t('homepage.Stats.facultyMembers')} color="purple" />
      <StatsCard count={20000} label={t('homepage.Stats.graduates')} color="red" />
    </div>
  );
};
