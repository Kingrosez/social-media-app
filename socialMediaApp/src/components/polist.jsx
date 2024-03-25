import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-context";
import Loading from "./lodingscreen";
import Post from "./post";
import Welcome from "./welcome";

const PostList = () => {
  const { postList, fetchig } = useContext(PostListData);
  console.log(fetchig);
  return (
    <>
      <center>
        {fetchig && <Loading></Loading>}
        {!fetchig && postList.length === 0 && <Welcome></Welcome>}
        {!fetchig &&
          postList.map((post) => <Post key={post.id} post={post}></Post>)}
      </center>
    </>
  );
};
export default PostList;
