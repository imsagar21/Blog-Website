import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddBlog,
  handleInputChange,
  handleUpdateBlog,
  setCurrentEditBlogId,
} from "../../redux/BlogSlice";

const AddBlog = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state);
  const { currentEditBlogId } = blog;
  function onInputChange(e) {
    dispatch(
      handleInputChange({
        [e.target.name]: e.target.value,
      })
    );
  }
  function onAddBlog(e) {
    e.preventDefault();
    if (currentEditBlogId !== null) {
      dispatch(handleUpdateBlog());
      dispatch(setCurrentEditBlogId(null));
    } else dispatch(handleAddBlog());

    dispatch(
      handleInputChange({
        title: "",
        description: "",
      })
    );
  }

  return (
    <form onSubmit={onAddBlog}>
      <div>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter Blog Title"
          name="title"
          value={blog.formData.title}
          onChange={onInputChange}
        />
      </div>
      <div style={{ display: "flex", justifyItems: "center" }}>
        <label>Description</label>
        <textarea
          placeholder="Enter Blog description"
          name="description"
          onChange={onInputChange}
          value={blog.formData.description}
          rows={4}
          cols={50}
        />
      </div>
      <button type="submit">
        {blog.currentEditBlogId ? `Update Blog` : `Add Blog`}
      </button>
    </form>
  );
};

export default AddBlog;
