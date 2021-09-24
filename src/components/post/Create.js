import React from "react";
import LayoutContainer from "../layout";
import PostForm from "../reuseable/postForm";

const CreatePost = ({ PageTitle }) => {
  return (
    <LayoutContainer>
      <div className="row my-5">
        <div className="col-12">
          <h1 className="text-center">Create Post</h1>
        </div>
      </div>
      <PostForm />
    </LayoutContainer>
  );
};

export default CreatePost;
