import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { articleQueries } from '~entities/makalabox/degree'
import { ArticleCard } from '~entities/makalabox/degree/ui/ArticleCard'
import { Title } from '~shared/ui/title'

export const ArticleList = () => {
  const { t } = useTranslation()
  const { data: articles, isSuccess } = articleQueries.useGetArticles()

  const latestArticles = articles?.data.results.slice(0, 4)

  return (
    <div>
      <Title>{t('homepage.universityBlogArticles')}</Title>
      <div className="flex justify-between md:flex-col md:gap-5">
        {isSuccess &&
          latestArticles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
      </div>
    </div>
  )
}
