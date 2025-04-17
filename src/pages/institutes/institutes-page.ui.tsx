import { Typography } from "@mui/material";
import { facultyQueries } from "~entities/faculties";
import { IntroCard } from "~entities/intro";
import { EnrollForm } from "~widgets/enroll-form";
import { FacultyCard } from "~widgets/faculty-card";
import { OpportunitiesList } from "~widgets/opportunities-list";
import intro from "./img/intro.png";
import { t } from "i18next";

export const InstitutesPage = () => {
  const {
    data: facultyData,
    isLoading,
    isError,
  } = facultyQueries.useGetFaculties();

  if (isLoading) {
    return <div>{t("loading.loading")}</div>;
  }
  if (isError) {
    return <div>{t("loading.error")}</div>;
  }

  return (
    <div className="my-5 mb-10">
      <IntroCard
        title={t("institutesPage.introCard.title")}
        description={t("institutesPage.introCard.description")}
        img={intro}
      />
      <div className="my-5">
        <Typography className="font-medium" variant="h3" component="div">
        {t("institutesPage.introCard.title")}
        </Typography>
        <div className="flex flex-wrap justify-between my-10 gap-5 ">
          {facultyData?.data.map((institute, index) => (
            <FacultyCard
              key={index}
              slug={institute.slug}
              instituteName={institute.title}
              programCount={institute.programs}
            />
          ))}
        </div>
      </div>
      <OpportunitiesList />
      <EnrollForm />
    </div>
  );
};
