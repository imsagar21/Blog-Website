import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
  currentEditBlogId: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      let cpyFormData = { ...state.formData };
      cpyFormData = {
        ...cpyFormData,
        ...action.payload,
      };

      state.formData = cpyFormData;
    },
    handleAddBlog: (state, action) => {
      console.log("coming from add new button");
      
      state.blogList.push({
        id: nanoid(),
        ...state.formData,
      });
      state.formData = {
        title: "",
        description: "",
      };
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },
    setBlogListOnInitialLoad: (state, action) => {
      state.blogList = action.payload.blogList;
    },
    handleDeleteBlog: (state, action) => {
      const { payload } = action;
      const { currentDeleteId } = payload;

      let cpyFormData = [...state.blogList];

      cpyFormData = cpyFormData.filter(
        (singleItem) => singleItem.id !== currentDeleteId
      );

      state.blogList = cpyFormData;
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },
    setCurrentEditBlogId: (state, action) => {
        state.currentEditBlogId = action.payload
    },
    handleUpdateBlog: (state, action) => {
      console.log("its coming from update edit button");
      let cpyBlogList = [...state.blogList]
      let findIndexOfUpdatedBlogList = cpyBlogList.findIndex(singleItem=>singleItem.id===state.currentEditBlogId)
      cpyBlogList[findIndexOfUpdatedBlogList]={
        ...cpyBlogList[findIndexOfUpdatedBlogList],
        ...state.formData
      }
      state.blogList=cpyBlogList
      localStorage.setItem("blogList",JSON.stringify(state.blogList))
    },
  },
});
export const {
  handleInputChange,
  handleAddBlog,
  setBlogListOnInitialLoad,
  handleDeleteBlog,
  setCurrentEditBlogId,
  handleUpdateBlog,
} = blogSlice.actions;
export default blogSlice.reducer;
