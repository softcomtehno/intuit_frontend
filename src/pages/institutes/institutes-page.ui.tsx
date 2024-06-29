import { IntroCard } from '~entities/intro';
import { EnrollForm } from '~widgets/enroll-form';
import { FacultyCard } from '~widgets/faculty-card';

const institutes = [
  { name: 'Институт Цифровой Трансформации и Программирования', programs: 15 },
  { name: 'Институт Дизайна, Архитектуры и Текстиля', programs: 9 },
  { name: 'Институт Строительства и Инновационных Технологий', programs: 18 },
  { name: 'Институт Энергетики и Транспорта', programs: 5 },
  { name: 'Институт Экономики и Менеджмента', programs: 6 },
  {
    name: 'Российско-Кыргызский Институт Автоматизации Управления Бизнеса',
    programs: 11,
  },
  { name: 'Институт Межкультурной Коммуникации и Психологии', programs: 5 },
  { name: 'Креатив', programs: 2 },
  { name: 'Институт Маркетинга и Электронной Коммерции', programs: 4 },
];

export const InstitutesPage = () => {
  return (
    <div className="my-5 mb-10">
      <IntroCard
        description={
          'С университетом МУИТ вы получаете качественное образование и востребованные в современном мире профессии.'
        }
        img={
          'https://synergy.ru/assets/template/v5/new3/images/s_main_banner/main_banner_2_lg.webp'
        }
        title={'Институты '}
      ></IntroCard>
      <div className="flex flex-wrap justify-between my-10 gap-5 ">
        {institutes.map((institute, index) => (
          <FacultyCard
            key={index}
            instituteName={institute.name}
            programCount={institute.programs}
          />
        ))}
      </div>
      <EnrollForm />
    </div>
  );
};
