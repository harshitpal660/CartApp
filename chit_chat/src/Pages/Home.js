import styles from '../Styles/home.module.css';
import PropTypes from 'prop-types'; // type script and flow packages are other solution
import Comment from '../Components/Comment.js'
export const Home = ({ posts }) => {
  return (
    <div className={styles.postList}>

      {posts.map((post) => (
        <div className={styles.postWrapper} key={post._id}>
        <div className={styles.postHeader}>
          <div className={styles.postAvatar}>
            <img
              alt="user-pic"
              src="https://cdn-icons-png.flaticon.com/128/2922/2922510.png"
            />
            <div>
              <span className={styles.postAuthor}>{post.user.name}</span>
              <span className={styles.postTime}>a minute ago</span>
            </div>
          </div>
          <div className={styles.postContent}>{post.content}</div>
          <div className={styles.postActions}>
            <div className={styles.postLike}>
              <img
                alt="likes-icon"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
              />
              <span>5</span>
            </div>

            <div className={styles.postCommentsIcon}>
              <img
                alt="comments-icon"
                src="https://cdn-icons-png.flaticon.com/128/3114/3114810.png"
              />
              <span>2</span>
            </div>
          </div>
          <div className={styles.postCommentBox}>
            <input placeholder="Start typing a comment" />
          </div>

          <div className={styles.postCommentList}>
            <Comment/>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};
Home.propTypes={
    posts: PropTypes.array.isRequired
}