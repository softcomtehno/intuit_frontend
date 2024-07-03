import { SpecializationBanner } from './ui/SpecializationBanner.ui';
import { EnrollForm } from '~widgets/enroll-form';
import { SkillsBlock } from './ui/SkillBlock.ui';
import { ProgramAccordion } from './ui/ProgramAccordion.ui.tsx';
import { CareerBlock } from './ui/CareerBlock.ui.tsx';
import { About } from './ui/About.ui.tsx';

export const SpecializationPage = () => {
  return (
    <div className="my-5">
      <SpecializationBanner />
      <About/>
      <ProgramAccordion />
      <SkillsBlock />
      <CareerBlock />
      <EnrollForm />
    </div>
  );
};
