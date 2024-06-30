export const pathKeys = {
  root: '/',
  home() {
    return pathKeys.root;
  },
  page404() {
    return pathKeys.root.concat('404/');
  },
  enroll: {
    root() {
      return pathKeys.root.concat('enroll/');
    },
    payments() {
      return pathKeys.enroll.root().concat('payments/');
    },
  },
  about: {
    root() {
      return pathKeys.root.concat('about/');
    },
    newsBySlug(params: { slug: string }) {
      return pathKeys.about.root().concat('news/', String(params.slug), '/');
    },
  },
  faculties: {
    root() {
      return pathKeys.root.concat('institutes/');
    },
    bySlug(params: { slug: string }) {
      return pathKeys.faculties.root().concat(String(params.slug), '/');
    },
  },
  degree: {
    root() {
      return pathKeys.root.concat('degree/');
    },
    bySlug(params: { slug: string }) {
      return pathKeys.degree.root().concat(String(params.slug), '/');
    },
  },
  specialization: {
    root() {
      return pathKeys.root.concat('specialization/');
    },
    bySlug(params: { slug: string }) {
      return pathKeys.specialization.root().concat(String(params.slug), '/');
    },
  },
  staff: {
    root() {
      return pathKeys.root.concat('teachers/');
    },
    bySlug(params: { slug: string }) {
      return pathKeys.staff.root().concat(String(params.slug), '/');
    },
  },
};
