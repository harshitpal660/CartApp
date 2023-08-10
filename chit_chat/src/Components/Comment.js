import styles from '../Styles/home.module.css';
import PropTypes from 'prop-types';
const Comment = ({comment}) => {
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

Comment.prototype = {
  comment: PropTypes.object.isRequired,
}

export default Comment;