import { Typography } from '@mui/material';
import { articleQueries } from '~entities/makalabox/degree';
import { ArticleCard } from '~entities/makalabox/degree/ui/ArticleCard';

export const ArticleList = () => {
  const {
    data: articles,
    isLoading,
    isSuccess,
    isError,
  } = articleQueries.useGetArticles();
  const latestArticles = articles?.data.results.slice(0, 3);


  return (
    <div>
      <Typography variant="h3" className="font-semibold max-w-[750px] my-5">
        Статьи с университетского блога статей
      </Typography>
      <div className="flex justify-between">
        
        {isSuccess && latestArticles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};
