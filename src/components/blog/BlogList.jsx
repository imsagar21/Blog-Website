import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteBlog,
  setCurrentEditBlogId,
  handleInputChange,
  setBlogListOnInitialLoad,
} from "../../redux/BlogSlice";

const BlogList = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state);
  const { blogList } = blog;

  function onDeleteHandle(getDeleteId) {
    dispatch(
      handleDeleteBlog({
        currentDeleteId: getDeleteId,
      })
    );
  }
  function onEditBlog(getCurrentBlog) {
    dispatch(setCurrentEditBlogId(getCurrentBlog.id));
    dispatch(
      handleInputChange({
        title: getCurrentBlog.title,
        description: getCurrentBlog.description,
      })
    );
  }

  useEffect(() => {
    dispatch(
      setBlogListOnInitialLoad({
        blogList: JSON.parse(localStorage.getItem("blogList")) || [],
      })
    );
  }, []);

  return (
    <ul>
      {blogList.length > 0 ? (
        blogList.map((singleBlogItem) => {
          return (
            <div
              key={singleBlogItem.id}
              style={{ border: "1px solid black", padding: "3px" }}
            >
              <h1>{singleBlogItem.title}</h1>
              <h1>{singleBlogItem.description}</h1>
              <button onClick={() => onEditBlog(singleBlogItem)}>
                Edit Blog
              </button>
              <button onClick={() => onDeleteHandle(singleBlogItem.id)}>
                Delete Blog
              </button>
            </div>
          );
        })
      ) : (
        <h1>No Blogs added please add</h1>
      )}
    </ul>
  );
};

export default BlogList;
