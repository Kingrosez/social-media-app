import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-context";
import CSS from "./CSS/style.module.css";
const Post = ({ post }) => {
  const { deletePostList } = useContext(PostList);
  return (
    <>
      <div className={`card ${CSS["card"]}`} style={{ width: "30rem" }}>
        <h1
          className={`${CSS["post_delete"]}`}
          onClick={() => deletePostList(post.id)}
        >
          <MdDeleteForever />
        </h1>

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className={`badge text-bg-primary ${CSS["tags"]}`}>
              {tag}
            </span>
          ))}
          <div className={`alert alert-info ${CSS["reaction"]}`} role="alert">
            This post is Reacted by {post.reactions} Persons
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
