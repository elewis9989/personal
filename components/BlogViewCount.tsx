import { useEffect } from 'react';
import useSWR from 'swr';

async function fetcher(input: RequestInfo, init?: RequestInit, ...args: any[]) {
  const res = await fetch(input, init);

  return res.json();
}

interface IBlogViewCountProps {
  slug: string;
  className?: string;
}

export default function BlogViewCount({
  slug,
  className,
}: IBlogViewCountProps) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const viewCount = data?.total as number;

  return <p className={className}>{viewCount > 0 ? viewCount : '---'} views</p>;
}
