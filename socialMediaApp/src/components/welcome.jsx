import { useContext } from "react";
import { PostList } from "../store/post-list-context";
import CSS from "./CSS/style.module.css";
const Welcome = () => {
  const { addPost } = useContext(PostList);
  return (
    <>
      <h1 className={CSS["welcome"]}>Nothing is Here</h1>
      <button type="button" className="btn btn-primary" onClick={addPost}>
        Load from Server
      </button>
    </>
  );
};
export default Welcome;
