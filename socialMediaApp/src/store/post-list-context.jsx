import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  setPostList: () => {},
  deletePostList: () => {},
});

const postListReducer = (state, action) => {
  let newState = state;

  if (action.type === "REMOVE") {
    newState = state.filter((post) => post.id !== action.payload.id);
  } else if (action.type === "ADD") {
    newState = [action.payload, ...state];
  } else if (action.type === "SERVER") {
    newState = action.payload;
  }
  return newState;
};

const PostListProvider = ({ children }) => {
  let [fetchig, setFetchig] = useState(false);
  console.log(fetchig);
  const [postList, dipatchPostList] = useReducer(postListReducer, []);
  const setPostList = (userID, postTite, postBody, postRefrence, postTags) => {
    dipatchPostList({
      type: "ADD",
      payload: {
        id: Date.now(),
        titel: postTite,
        body: postBody,
        reactoin: postRefrence,
        user_id: userID,
        tags: postTags,
      },
    });
  };
  const deletePostList = (id) => {
    dipatchPostList({
      type: "REMOVE",
      payload: {
        id,
      },
    });
  };
  const addPost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.posts);
        dipatchPostList({ type: "SERVER", payload: json.posts });
      });
  };
  useEffect(() => {
    setFetchig(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((json) => {
        console.log(json.posts);
        dipatchPostList({ type: "SERVER", payload: json.posts });
        setFetchig(false);
      });
  }, []);
  return (
    <PostList.Provider
      value={{ postList, addPost, setPostList, deletePostList, fetchig }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
