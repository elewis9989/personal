import { Post } from '../pages/blog';
import styles from '../styles/BlogPost.module.css';

interface IBlogPostProps {
  post: Post;
}
export default function BlogPost({ post }: IBlogPostProps) {
  return (
    <section className={styles.postFullContent}>
      <div
        className={styles.postContent}
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </section>
  );
}
