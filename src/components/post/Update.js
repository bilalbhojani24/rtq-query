import React from "react";
import LayoutContainer from "../layout";
import { useHistory } from "react-router-dom";
import PostForm from "../reuseable/postForm";

const UpdatePost = () => {
  const params = useHistory();
  return (
    <LayoutContainer>
      <div className="row my-5">
        <div className="col-12">
          <h1 className="text-center">Update Post</h1>
        </div>
      </div>
      <PostForm data={params.location.state} />
    </LayoutContainer>
  );
};

export default UpdatePost;
