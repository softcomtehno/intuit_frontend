import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { articleQueries } from '~entities/makalabox/degree';
import { ArticleCard } from '~entities/makalabox/degree/ui/ArticleCard';

export const ArticleList = () => {
  const { t } = useTranslation();
  const {
    data: articles,
    isLoading,
    isSuccess,
    isError,
  } = articleQueries.useGetArticles();
  const latestArticles = articles?.data.results.slice(0, 3);

  return (
    <div>
      <Typography variant="h3" className="font-semibold max-w-[750px] my-5 md:text-[30px]">
        {t('homepage.universityBlogArticles')}
      </Typography>
      <div className="flex justify-between md:flex-col md:gap-5">
        {isSuccess && latestArticles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};
