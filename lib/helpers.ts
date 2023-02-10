export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export type Post = {
  title: string;
  slug: string;
  custom_excerpt: string;
  feature_image: string;
  html: string;
  reading_time: number;
  published_at: Date;
  meta_title: string;
  meta_description: string;
};
