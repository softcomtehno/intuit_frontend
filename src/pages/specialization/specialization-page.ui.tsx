import { SpecializationBanner } from './ui/SpecializationBanner.ui';
import StaffList from '~widgets/staff-list/staff-list.ui';
import { EnrollForm } from '~widgets/enroll-form';
import { SkillsBlock } from './ui/SkillBlock.ui';
import { ProgramAccordion } from './ui/ProgramAccordion.ui.tsx';
import { CareerBlock } from './ui/CareerBlock.ui.tsx';

export const SpecializationPage = () => {
  return (
    <div className="my-5">
      <SpecializationBanner />
      <ProgramAccordion />
      <SkillsBlock />
      <CareerBlock />
      <StaffList />
      <EnrollForm />
    </div>
  );
};
