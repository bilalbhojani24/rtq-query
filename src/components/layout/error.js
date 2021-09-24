import React from "react";

function Error({ message }) {
  return (
    <div>
      <h1>Something Went Wrong</h1>
      <p>{message}</p>
    </div>
  );
}

export default Error;
