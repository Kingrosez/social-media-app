import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import CreatePost from "./components/createPost";
import Footer from "./components/footer";
import Header from "./components/header";

import PostList from "./components/polist";
import SiderBar from "./components/sideBar";
import PostListProvider from "./store/post-list-context";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SiderBar
            selectedTab={activeTab}
            changeSelected={setActiveTab}
          ></SiderBar>
          <div className="content-container">
            <Header></Header>
            {activeTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost changeSelected={setActiveTab}></CreatePost>
            )}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
