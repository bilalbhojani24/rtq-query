import React from "react";
import LayoutContainer from "../layout";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../services/posts";
import Error from "../layout/error";

const SinglePost = () => {
  const params = useParams();
  const { data, isLoading, error } = useGetPostByIdQuery(params.id);

  if (isLoading) {
    return <div className="spinner-border text-primary" />;
  }

  if (error) {
    return <Error message={error.message || error.status} />;
  }

  return (
    <LayoutContainer>
      <div className="container">
        <h1>{data.title}</h1>
        <br />
        <p>{data.body}</p>
      </div>
    </LayoutContainer>
  );
};

export default SinglePost;
