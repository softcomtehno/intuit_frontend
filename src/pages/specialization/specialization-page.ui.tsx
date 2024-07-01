import { ProgramAccordion } from "~widgets/program-accordion"
import { SpecializationBanner } from "./ui/SpecializationBanner.ui"
import StaffList from "~widgets/staff-list/staff-list.ui"
import { DiplomList } from "~widgets/diplom-list"
import { EnrollForm } from "~widgets/enroll-form"

export const SpecializationPage = () => {
  return (
    <div className="my-5">
      <SpecializationBanner/>
      <ProgramAccordion/>
      <StaffList/>
      <DiplomList/>
      <EnrollForm/>
    </div>
  )
}
