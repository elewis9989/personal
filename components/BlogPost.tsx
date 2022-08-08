import { Post } from '../pages/blog';
import styles from '../styles/BlogPost.module.css';

interface IBlogPostProps {
  post: Post;
}
export default function BlogPost({ post }: IBlogPostProps) {
  return (
    <div
      className={styles.test}
      dangerouslySetInnerHTML={{ __html: post.html }}
    ></div>
  );
}
