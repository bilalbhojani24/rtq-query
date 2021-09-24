import React, { useState, useEffect } from "react";
import {
  useCreatePostMutation,
  useUpdatePostMutation,
} from "../../services/posts";

function PostForm({ data }) {
  const [alert, setAlert] = useState("");
  const [inputData, setInputData] = useState({
    title: data ? data.title : "",
    body: data ? data.body : "",
  });

  const [createPost, createPostResponse] = useCreatePostMutation();
  const [updatePost, updatePostResponse] = useUpdatePostMutation();

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      updatePost({ data: updatePost, id: data.id });
    } else {
      createPost(inputData);
    }
  };

  useEffect(() => {
    if (createPostResponse.isSuccess) {
      setAlert("Post created successfully!!");
      setInputData({ title: "", body: "" });
      setTimeout(() => {
        setAlert(null);
      }, [2000]);
    }
    if (updatePostResponse.isSuccess) {
      setAlert("Post updated successfully!!");
      setTimeout(() => {
        setAlert(null);
      }, [2000]);
    }
  }, [createPostResponse, updatePostResponse]);

  return (
    <>
      <form
        className="mt-5 row d-flex justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="form-group col-8 mb-4">
          <label>Enter Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={handleChange}
            value={inputData.title}
          />
        </div>
        <div className="form-group col-8">
          <label>Enter Body</label>
          <input
            type="text"
            className="form-control"
            name="body"
            onChange={handleChange}
            value={inputData.body}
          />
        </div>
        <div className="form-group col-8">
          <button type="submit" className="btn btn-primary">
            {data ? "Update Post" : "Create Post"}
          </button>
        </div>
      </form>
      {alert && (
        <div className="row justify-content-center mt-4">
          <div className="alert alert-success col-8">{alert}</div>
        </div>
      )}
    </>
  );
}

export default PostForm;
