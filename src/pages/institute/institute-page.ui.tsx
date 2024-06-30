import { useParams } from 'react-router-dom';
import { EnrollForm } from '~widgets/enroll-form';
import { OpportunitiesList } from '~widgets/opportunities-list';
import StaffList from '~widgets/staff-list/staff-list.ui';
import { InstituteBanner } from './ui/InstituteBanner.ui';

export const InstitutePage = () => {
  const slug = useParams();
  console.log(slug);

  return (
    <div className="my-5">
      <InstituteBanner />
      <OpportunitiesList />
      <StaffList />
      <EnrollForm />
    </div>
  );
};
