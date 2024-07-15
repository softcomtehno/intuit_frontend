import { useQuery } from '@tanstack/react-query';
import {  getProgramBySlugQuery, getProgramsQuery } from './programs.api';

const keys = {
  root: () => ['program'],
  getProgramBySlug: (slug: string) => [...keys.root(), slug] as const,
};

export function useGetPrograms() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getProgramsQuery,
  });
}

export function useGetProgram(slug: string) {
  return useQuery({
    queryKey: keys.getProgramBySlug(slug),
    queryFn: () => getProgramBySlugQuery(slug),
  });
}
