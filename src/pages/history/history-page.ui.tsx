import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { t } from "i18next";

const bachelorPrograms = [
  {
    code: t("HistoryPage.code1"),
    program: t("HistoryPage.program1"),
    profile: t("HistoryPage.profile1"),
  },
  {
    code: t("HistoryPage.code2"),
    program: t("HistoryPage.program2"),
    profile: t("HistoryPage.profile2"),
  },
  {
    code: t("HistoryPage.code3"),
    program: t("HistoryPage.program3"),
    profile: t("HistoryPage.profile3"),
  },
  {
    code: t("HistoryPage.code4"),
    program: t("HistoryPage.program4"),
    profile: t("HistoryPage.profile4"),
  },
  {
    code: t("HistoryPage.code5"),
    program: t("HistoryPage.program5"),
    profile: t("HistoryPage.profile5"),
  },
  {
    code: t("HistoryPage.code6"),
    program: t("HistoryPage.program6"),
    profile: t("HistoryPage.profile6"),
  },
  {
    code: t("HistoryPage.code7"),
    program: t("HistoryPage.program7"),
    profile: t("HistoryPage.profile7"),
  },
  {
    code: t("HistoryPage.code8"),
    program: t("HistoryPage.program8"),
    profile: t("HistoryPage.profile8"),
  },
  {
    code: t("HistoryPage.code9"),
    program: t("HistoryPage.program9"),
    profile: t("HistoryPage.profile9"),
  },
  {
    code: t("HistoryPage.code10"),
    program: t("HistoryPage.program10"),
    profile: t("HistoryPage.profile10"),
  },
  {
    code: t("HistoryPage.code11"),
    program: t("HistoryPage.program11"),
    profile: t("HistoryPage.profile11"),
  },
  {
    code: t("HistoryPage.code12"),
    program: t("HistoryPage.program12"),
    profile: t("HistoryPage.profile2"),
  },
  {
    code: t("HistoryPage.code13"),
    program: t("HistoryPage.program13"),
    profile: t("HistoryPage.profile13"),
  },
  {
    code: t("HistoryPage.code14"),
    program: t("HistoryPage.program14"),
    profile: t("HistoryPage.profile14"),
  },
  {
    code: t("HistoryPage.code15"),
    program: t("HistoryPage.program15"),
    profile: t("HistoryPage.profile15"),
  },
  {
    code: t("HistoryPage.code16"),
    program: t("HistoryPage.program16"),
    profile: t("HistoryPage.profile16"),
  },
  {
    code: t("HistoryPage.code17"),
    program: t("HistoryPage.program17"),
    profile: t("HistoryPage.profile17"),
  },
  {
    code: t("HistoryPage.code18"),
    program: t("HistoryPage.program18"),
    profile: t("HistoryPage.profile18"),
  },
];

const postgraduateSpecialties = [
  {
    code: t("HistoryPage.postgraduateSpecialties.code1"),
    specialty: t("HistoryPage.postgraduateSpecialties.specialty1"),
  },
  {
    code: t("HistoryPage.postgraduateSpecialties.code2"),
    specialty: t("HistoryPage.postgraduateSpecialties.specialty2"),
  },
  {
    code: t("HistoryPage.postgraduateSpecialties.code3"),
    specialty: t("HistoryPage.postgraduateSpecialties.specialty3"),
  },
  {
    code: t("HistoryPage.postgraduateSpecialties.code4"),
    specialty: t("HistoryPage.postgraduateSpecialties.specialty4"),
  },
  {
    code: t("HistoryPage.postgraduateSpecialties.code5"),
    specialty: t("HistoryPage.postgraduateSpecialties.specialty5"),
  },
  {
    code: t("HistoryPage.postgraduateSpecialties.code6"),
    specialty: t("HistoryPage.postgraduateSpecialties.specialty6"),
  },
  {
    code: t("HistoryPage.postgraduateSpecialties.code7"),
    specialty: t("HistoryPage.postgraduateSpecialties.specialty7"),
  },
  {
    code: t("HistoryPage.postgraduateSpecialties.code8"),
    specialty: t("HistoryPage.postgraduateSpecialties.specialty8"),
  },
  {
    code: t("HistoryPage.postgraduateSpecialties.code9"),
    specialty: t("HistoryPage.postgraduateSpecialties.specialty9"),
  },
];

const masterPrograms = [
  {
    code: t("HistoryPage.masterPrograms.code1"),
    program: t("HistoryPage.masterPrograms.program1"),
    details: t("HistoryPage.masterPrograms.details1"),
  },
  {
    code: t("HistoryPage.masterPrograms.code2"),
    program: t("HistoryPage.masterPrograms.program2"),
    details: t("HistoryPage.masterPrograms.details2"),
  },
  {
    code: t("HistoryPage.masterPrograms.code3"),
    program: t("HistoryPage.masterPrograms.program3"),
    details: t("HistoryPage.masterPrograms.details3"),
  },
  {
    code: t("HistoryPage.masterPrograms.code4"),
    program: t("HistoryPage.masterPrograms.program4"),
    details: t("HistoryPage.masterPrograms.details4"),
  },
  {
    code: t("HistoryPage.masterPrograms.code5"),
    program: t("HistoryPage.masterPrograms.program5"),
    details: t("HistoryPage.masterPrograms.details5"),
  },
];

const additionalCourses = [
  { course: t("HistoryPage.additionalCourses.course1") },
  { course: t("HistoryPage.additionalCourses.course2") },
  { course: t("HistoryPage.additionalCourses.course3") },
  { course: t("HistoryPage.additionalCourses.course4") },
  { course: t("HistoryPage.additionalCourses.course5") },
  { course: t("HistoryPage.additionalCourses.course6") },
  { course: t("HistoryPage.additionalCourses.course7") },
  { course: t("HistoryPage.additionalCourses.course8") },
  { course: t("HistoryPage.additionalCourses.course9") },
  { course: t("HistoryPage.additionalCourses.course10") },
  { course: t("HistoryPage.additionalCourses.course11") },
  { course: t("HistoryPage.additionalCourses.course12") },
  { course: t("HistoryPage.additionalCourses.course13") },
];
const structureItems = [
  { title: t("HistoryPage.structureItems.title1") },
  { title: t("HistoryPage.structureItems.title2") },
  { title: t("HistoryPage.structureItems.title3") },
  { title: t("HistoryPage.structureItems.title4") },
  { title: t("HistoryPage.structureItems.title5") },
  { title: t("HistoryPage.structureItems.title6") },
  { title: t("HistoryPage.structureItems.title7") },
  { title: t("HistoryPage.structureItems.title8") },
  { title: t("HistoryPage.structureItems.title9") },
  { title: t("HistoryPage.structureItems.title10") },
  { title: t("HistoryPage.structureItems.title11") },
  { title: t("HistoryPage.structureItems.title12") },
  { title: t("HistoryPage.structureItems.title13") },
  { title: t("HistoryPage.structureItems.title14") },
  { title: t("HistoryPage.structureItems.title15") },
  { title: t("HistoryPage.structureItems.title16") },
  { title: t("HistoryPage.structureItems.title17") },
  { title: t("HistoryPage.structureItems.title18") },
  { title: t("HistoryPage.structureItems.title19") },
  { title: t("HistoryPage.structureItems.title20") },
  { title: t("HistoryPage.structureItems.title21") },
  { title: t("HistoryPage.structureItems.title22") },
  { title: t("HistoryPage.structureItems.title23") },
  { title: t("HistoryPage.structureItems.title24") },
  { title: t("HistoryPage.structureItems.title25") },
  { title: t("HistoryPage.structureItems.title26") },
  { title: t("HistoryPage.structureItems.title27") },
  { title: t("HistoryPage.structureItems.title28") },
  { title: t("HistoryPage.structureItems.title29") },
];


export const HistoryPage = () => {
  return (
    <Container maxWidth="lg" className="py-10 px-4">
      <Typography
        variant="h4"
        className="font-bold text-center mb-8 text-gray-800"
        style={{ fontSize: "clamp(1.5rem, 5vw, 2.5rem)" }}
      >
        {t("HistoryPage.InternationalUniversity")}
      </Typography>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          {t("HistoryPage.history")}
        </Typography>
        <Typography variant="body1" className="text-gray-600 text-justify">
          {t("HistoryPage.content")}
        </Typography>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          {t("HistoryPage.adress")}
        </Typography>
        <Typography variant="body1" className="text-gray-600 text-justify">
          {t("HistoryPage.location")}
        </Typography>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          {t("HistoryPage.Educational")}
        </Typography>
        <Typography variant="body1" className="text-gray-600 text-justify">
          {t("HistoryPage.content2")}
        </Typography>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          {t("HistoryPage.bachelor")}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-gray-700">
                  {t("HistoryPage.code")}
                </TableCell>
                <TableCell className="font-bold text-gray-700">
                  {t("HistoryPage.programma")}
                </TableCell>
                <TableCell className="font-bold text-gray-700">
                  {t("HistoryPage.profil")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bachelorPrograms.map((program, index) => (
                <TableRow key={index}>
                  <TableCell className="text-justify">{program.code}</TableCell>
                  <TableCell className="text-justify">
                    {program.program}
                  </TableCell>
                  <TableCell className="text-justify">
                    {program.profile}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          {t("HistoryPage.master")}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-gray-700">
                  {t("HistoryPage.code")}
                </TableCell>
                <TableCell className="font-bold text-gray-700">
                  {t("HistoryPage.programma")}
                </TableCell>
                <TableCell className="font-bold text-gray-700">
                  {t("HistoryPage.programms")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {masterPrograms.map((program, index) => (
                <TableRow key={index}>
                  <TableCell className="text-justify">{program.code}</TableCell>
                  <TableCell className="text-justify">
                    {program.program}
                  </TableCell>
                  <TableCell className="text-justify">
                    {program.details}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          {t("HistoryPage.doctoral")}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-gray-700">
                  {t("HistoryPage.code")}
                </TableCell>
                <TableCell className="font-bold text-gray-700">
                  {t("HistoryPage.specialty")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {postgraduateSpecialties.map((specialty, index) => (
                <TableRow key={index}>
                  <TableCell className="text-justify">
                    {specialty.code}
                  </TableCell>
                  <TableCell className="text-justify">
                    {specialty.specialty}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          {t("HistoryPage.continuing")}
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-gray-700">
                  {t("HistoryPage.course")}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {additionalCourses.map((course, index) => (
                <TableRow key={index}>
                  <TableCell>{course.course}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>
      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-6">
          {t("HistoryPage.structure")}
        </Typography>
        <Grid container spacing={3}>
          {structureItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="h-full display-flex flex-direction-column">
                <CardContent className="flex-grow-1">
                  <Typography
                    variant="h6"
                    className="font-medium text-gray-700 mb-2 "
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      <section className="mb-10">
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          {t("HistoryPage.funding")}
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          {t("HistoryPage.title")}
        </Typography>
      </section>
      <section>
        <Typography variant="h5" className="font-semibold text-gray-700 mb-4">
          {t("HistoryPage.contact")}
        </Typography>
        <Typography variant="body1" className="text-gray-600 text-justify">
          {t("HistoryPage.location2")}
        </Typography>
      </section>
    </Container>
  );
};
