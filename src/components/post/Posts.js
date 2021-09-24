import React from "react";
import LayoutContainer from "../layout";
import { useGetPostsQuery, useDeletePostMutation } from "../../services/posts";
import Error from "../layout/error";
import { useHistory } from "react-router-dom";

const Posts = () => {
  const history = useHistory();
  const { data, isLoading, error , status} = useGetPostsQuery();
  const [deletePost, responseDeletePost] = useDeletePostMutation();

  console.log(status)
  if (isLoading) {
    return <div className="spinner-border text-primary" />;
  }

  if (error) {
    return <Error message={error.message || error.status} />;
  }
  return (
    <LayoutContainer>
      <div className="row justify-content-between m-0 p-0">
        {data.map((item) => (
          <div key={item.id} className="col-3 p-4 m-2 border">
            <p>User ID : {item.userId}</p>
            <p>Title : {item.title}</p>
            <i
              className="far fa-eye cursor"
              onClick={() => history.push(`/post/${item.id}`)}
            />
            <i
              className="fas fa-edit mx-3 cursor"
              onClick={() =>
                history.push({
                  pathname: `/update`,
                  state: item,
                })
              }
            />
            <i className="far fa-trash-alt cursor" />
          </div>
        ))}
      </div>
    </LayoutContainer>
  );
};

export default Posts;
