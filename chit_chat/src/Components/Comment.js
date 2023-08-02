import styles from '../Styles/home.module.css';
const comment = () => {
  return (
    <div className={styles.postCommentItem}>
      <div className={styles.postCommentHeader}>
        <span className={styles.postCommentAuthor}>Bill</span>
        <span className={styles.postCommentTime}>a minute ago</span>
        <span className={styles.postCommentLikes}>22</span>
      </div>
      <div className={styles.postCommentContent}>Random comment</div>
    </div>
  );
};
export default comment;