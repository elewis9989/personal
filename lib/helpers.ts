export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};
