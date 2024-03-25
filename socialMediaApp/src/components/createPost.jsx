import { useContext, useReducer } from "react";
import { PostList } from "../store/post-list-context";
import CSS from "./CSS/style.module.css";
const CreatePost = ({ changeSelected }) => {
  const userIdElement = useReducer();
  const postTitelElement = useReducer();
  const postBodyElement = useReducer();
  const postRefrenceElement = useReducer();
  const postTagsElement = useReducer();

  const { setPostList } = useContext(PostList);
  const handelSubmit = (event) => {
    event.preventDefault();
    const userID = userIdElement.current.value;
    const postTite = postTitelElement.current.value;
    const postBody = postBodyElement.current.value;
    const postRefrence = postRefrenceElement.current.value;
    const postTags = postTagsElement.current.value.split(" ");
    setPostList(userID, postTite, postBody, postRefrence, postTags);
    userIdElement.current.value = "";
    postTitelElement.current.value = "";
    postBodyElement.current.value = "";
    postRefrenceElement.current.value = "";
    postTagsElement.current.value = "";
    changeSelected("Home");
  };
  return (
    <>
      <form className={CSS["create-post"]} onSubmit={handelSubmit}>
        <div className="mb-3">
          <label htmlFor="user_id" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="user_id"
            placeholder="Enter user id"
            ref={userIdElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Titel
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={postTitelElement}
            placeholder="Enter Titel"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            rows={4}
            className="form-control"
            id="body"
            ref={postBodyElement}
            placeholder="Enter Post Content"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reaction" className="form-label">
            Post Reaction
          </label>
          <input
            type="number"
            className="form-control"
            id="reaction"
            ref={postRefrenceElement}
            placeholder="Howmany  reactions does this post have?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Post Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={postTagsElement}
            placeholder="Enter the tags by giving space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
