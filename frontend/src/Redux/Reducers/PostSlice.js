import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Define your API endpoint
const GET_POST = "http://localhost:5000/api/post/posts";
const CREATE_POST_URL = "http://localhost:5000/api/post/create-post";
const UPDATE_POST_URL = "http://localhost:5000/api/post/update-post";
const DELETE_POST_URL = "http://localhost:5000/api/post/delete-post";

// Define your async thunk for fetching posts
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(GET_POST);
    return response.data;
  } catch (error) {
    throw Error("Error fetching posts");
  }
});

// Define your async thunk for creating a post
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData) => {
    try {
      const response = await axios.post(CREATE_POST_URL, postData);
      return response.data;
    } catch (error) {
      throw Error("Error creating post");
    }
  }
);

// Define your async thunk for updating a post
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (postData) => {
    try {
      const id = postData._id;
      const response = await axios.put(`${UPDATE_POST_URL}/${id}`, postData);
      return response.data;
    } catch (error) {
      throw Error("Error updating post");
    }
  }
);

// Define your async thunk for deleting a post
export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    try {
      await axios.delete(`${DELETE_POST_URL}/${postId}`);
      return postId;
    } catch (error) {
      throw Error("Error deleting post");
    }
  }
);

export const increaseLikes = createAsyncThunk(
  "posts/increaseLikes",
  async (postId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/post/increase-likes/${postId}`
      );
      return response.data;
    } catch (error) {
      throw Error("Error increasing likes");
    }
  }
);

// Define your async thunk for decreasing likes
export const decreaseLikes = createAsyncThunk(
  "posts/decreaseLikes",
  async (postId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/post/decrease-likes/${postId}`
      );
      return response.data;
    } catch (error) {
      throw Error("Error decreasing likes");
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  posts: [],
};

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        console.log("fetched", action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("rejected", action.payload);
      })
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("failure", action.error);
      })
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        const updatedPostIndex = state.posts.findIndex(
          (post) => post._id === action.payload._id
        );
        if (updatedPostIndex !== -1) {
          state.posts[updatedPostIndex] = action.payload;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("failure", action.error);
      })
      .addCase(increaseLikes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(increaseLikes.fulfilled, (state, action) => {
        state.loading = false;
        const postIndex = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (postIndex !== -1) {
          state.posts[postIndex] = action.payload;
        }
      })
      .addCase(increaseLikes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("failure", action.error);
      })
      .addCase(decreaseLikes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(decreaseLikes.fulfilled, (state, action) => {
        state.loading = false;
        const postIndex = state.posts.findIndex(
          (post) => post.id === action.payload.id
        );
        if (postIndex !== -1) {
          state.posts[postIndex] = action.payload;
        }
      })
      .addCase(decreaseLikes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("failure", action.error);
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        // Remove the deleted post from the state
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("failure", action.error);
      });
  },
});

export const postReducer = PostSlice.reducer;

export const postsSelector = (state) => state.postReducer;
