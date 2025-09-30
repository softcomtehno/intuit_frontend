import { useQuery } from "@tanstack/react-query";
import {
  getEduCourses,
  getEduLevel,
  getGroups,
  getGroupsDetails,
  getTeacherDetails,
  getTeachers,
} from "./schedules.api";
import { EducationLevel, Course, Group, Teacher } from "./schedules.types";

const keys = {
  root: () => ["eduLvl"],
  courses: () => [...keys.root(), "courses"],
  groups: () => [...keys.root(), "groups"],
  groupsDetail: (slug: string) => [...keys.root(), slug] as const,
  // teacher
  teacher: () => ["scheduleTeacher"],
  teacherDetail: (slug: string) => [...keys.teacher(), slug] as const,
};

export function useGetEduLvl() {
  return useQuery<EducationLevel[]>({
    queryKey: keys.root(),
    queryFn: getEduLevel,
  });
}

export function useGetCourses() {
  return useQuery<Course[]>({
    queryKey: keys.courses(),
    queryFn: getEduCourses,
  });
}

export function useGetGroups() {
  return useQuery<Group[]>({
    queryKey: keys.groups(),
    queryFn: getGroups,
  });
}

export function useGetGroupsDetails(slug: string) {
  return useQuery({
    queryKey: keys.groupsDetail(slug),
    queryFn: () => getGroupsDetails(slug),
  });
}

// ----------teachers

export function useGetTeachers() {
  return useQuery<Teacher[]>({
    queryKey: keys.teacher(),
    queryFn: getTeachers,
  });
}

export function useGetTeacherDetails(slug: string) {
  return useQuery({
    queryKey: keys.teacherDetail(slug),
    queryFn: () => getTeacherDetails(slug),
  });
}
