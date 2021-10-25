import axios from "axios";
import { BASE_URL } from "../../config";
import { formatErrorMessage, getToken } from "../../utils/helpers";
import {
  createPostFailure,
  createPostStart,
  createPostSuccess,
  deletePostFailure,
  deletePostStart,
  deletePostSuccess,
  getPostsFailure,
  getPostsStart,
  getPostsSuccess,
} from "./PostActions";

// get posts
export const getPosts = async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const res = await axios.get(BASE_URL + "post/all", {
      headers: {
        authorization: "Bearer " + getToken(),
      },
    });
    dispatch(getPostsSuccess(res.data));
  } catch (error) {
    dispatch(getPostsFailure());
  }
};

// create post
export const createPost = async (post, dispatch, onSuccess, onError) => {
  dispatch(createPostStart());
  try {
    const res = await axios.post(BASE_URL + "post/create", {body: post}, {
      headers: {
        authorization: "Bearer " + getToken(),
      },
    });
    onSuccess("Created Successfully")
    dispatch(createPostSuccess(res.data));
  } catch (error) {
    onError(formatErrorMessage(error.response.data))
    dispatch(createPostFailure());
  }
};

// delete
export const deletePost = async (id, dispatch) => {
  dispatch(deletePostStart());
  try {
    await axios.delete(BASE_URL + "/delete/:postId" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deletePostSuccess(id));
  } catch (error) {
    dispatch(deletePostFailure());
  }
};
