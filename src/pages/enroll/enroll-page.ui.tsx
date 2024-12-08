import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { IntroCard } from '~entities/intro'

export const EnrollPage = () => {
  return (
    <div>
      <IntroCard
        description={
          'Поступайте в МУИТ».Пройдите тест и узнайте, на кого вам лучше учиться'
        }
        img={
          'https://synergy.ru/assets/template/v5/new3/images/s_quiz/abiturientam-lg.webp'
        }
        title={'Абитуриентам'}
      ></IntroCard>

      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Информация для абитуриентов
          </Typography>
          <Typography variant="body2" color="text.secondary">
            В МУИТ можно поступить на бюджетные места, финансируемые из бюджета
            МУИТ (если ОРТ свыше 200 баллов или золотой сертификат) и на
            контрактную основу обучения.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            В МУИТ предусмотрены льготы и скидки по оплате за обучение. Льготы
            по оплате за обучение предоставляются инвалидам I и II групп, детям
            сиротам и детям, находящимся под опекой (попечительством)
            физического лица. Размер и период предоставления льгот
            устанавливается комиссией МУИТ.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Отбор и зачисление абитуриентов по результатам ОРТ текущего года
            проводится через Автоматизированную информационную систему
            «Абитуриент Online» на сайтах:
            <a
              href="https://2020.edu.gov.kg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://2020.edu.gov.kg/
            </a>{' '}
            и МУИТ.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Электронная регистрация и конкурсный отбор абитуриентов в 2022 г.
            осуществляется ИСКЛЮЧИТЕЛЬНО в дистанционном формате на порталах:
            <a
              href="https://2020.edu.gov.kg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              2020.edu.gov.kg
            </a>{' '}
            (портал для граждан Кыргызской Республики) и
            <a
              href="https://edugate.edu.gov.kg"
              target="_blank"
              rel="noopener noreferrer"
            >
              edugate.edu.gov.kg
            </a>{' '}
            (портал приема граждан зарубежных стран), т.е. личное присутствие
            абитуриента не требуется.
          </Typography>

          <List>
            <ListItem>
              <ListItemText primary="Справка № 086-У не требуется." />
            </ListItem>
            <ListItem>
              <ListItemText primary="МУИТ не имеет в своем распоряжении общежитий." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Перечень специальностей/направлений реализуемых в МУИТ на 2024-2025 учебный год (бакалавриат)." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Буклет МУИТ" />
            </ListItem>
          </List>

          <Typography variant="h6" component="div">
            Документы
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Порядок приема в высшие учебные заведения Кыргызской Республики" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Перечень направлений/профилей, в которых при поступлении не требуется результаты ОРТ." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Документы необходимые для предоставления льготы" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Стоимость обучения студентов МУИТ на 2024-2025 учебный год" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Стоимость обучения магистрантов МУИТ на 2024-2025 учебный год" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Стоимость обучения иностранных студентов МУИТ на 2024-2025 учебный год" />
            </ListItem>
          </List>

          <Typography variant="h6" component="div">
            Иностранцам
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Порядок приема иностранных граждан в МУИТ осуществляется в
            соответствии с «Порядком приема в высшие учебные заведения
            Кыргызской Республики» утвержденным постановлением Правительства
            Кыргызской Республики от 27.05.2011 г. №256 и «Порядком приема
            студентов в МУИТ на 2024-2025 учебный год».
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Вступительные испытания для иностранных граждан" />
            </ListItem>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="Все иностранные граждане, поступающие на бакалавриат МУИТ, сдают вступительные испытания (тестирование): по русскому языку" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Иностранные граждане, поступающие на определенные направления, также сдают тест по математике или физике в зависимости от направления." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Для зачисления абитуриенту необходимо набрать минимальный балл по каждому предмету и суммировать баллы." />
              </ListItem>
              <ListItem>
                <ListItemText primary="Подробности вступительных испытаний и требования к документам доступны на сайте МУИТ и портале edugate.edu.gov.kg." />
              </ListItem>
            </List>
            <ListItem>
              <ListItemText primary="Регистрация иностранных граждан" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Документы для зачисления иностранных студентов в МУИТ" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  )
}
