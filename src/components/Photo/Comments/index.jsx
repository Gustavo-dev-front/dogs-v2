import React from "react";
import { ReactComponent as Enviar } from "../../../assets/enviar.svg";
import useFetch from "../../../hooks/useFetch";
import { COMMENT_POST } from "../../../api_endpoints";
import Error from "../../Helper/Error/Error";
import { UserContext } from "../../../pages/User/context";
import styles from "./styles.module.css";

const Comments = (props) => {
  const [comment, setComment] = React.useState();
  const [comments, setComments] = React.useState(props.comments);
  const { error, request } = useFetch();
  const comment_box = React.useRef();
  const { logged } = React.useContext(UserContext);

  React.useEffect(() => {
    const { scrollHeight } = comment_box.current;
    const { clientHeight } = comment_box.current;
    const distanceScroll = scrollHeight - clientHeight;
    comment_box.current.scrollTo({
      top: distanceScroll,
      left: 0,
      behavior: "smooth",
    });
  }, [comments]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(props.id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) setComments((prev) => [...prev, json]);
    setComment("");
  }

  return (
    <div className={styles.comments}>
      <ul className={styles.messages} ref={comment_box}>
        {comments.map(({ comment_ID, comment_author, comment_content }) => {
          return (
            <li key={comment_ID}>
              <span className={styles.author_comment}>{comment_author}:</span>
              <span className={styles.comment}>{comment_content}</span>
            </li>
          );
        })}
      </ul>
      {logged && (
        <div className={styles.send}>
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Comente..."
              value={comment}
              onChange={({ target }) => setComment(target.value)}
            ></textarea>
            <button>
              <Enviar />
            </button>
          </form>
        </div>
      )}
      {error && <Error error={error} />}
    </div>
  );
};

export default Comments;
