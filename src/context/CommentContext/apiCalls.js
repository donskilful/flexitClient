import axios from "axios";
import {
  createCommentFailure,
  createCommentStart,
  createCommentSuccess,
  deleteCommentFailure,
  deleteCommentStart,
  deleteCommentSuccess,
  getCommentsFailure,
  getCommentsStart,
  getCommentsSuccess,
} from "./CommentActions";

// get comments
export const getComments = async (dispatch) => {
  dispatch(getCommentsStart());
  try {
    const res = await axios.get("/allcomment - no api yet", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getCommentsSuccess(res.data));
  } catch (error) {
    dispatch(getCommentsFailure());
  }
};

// create comment
export const createComment = async (post, dispatch) => {
  dispatch(createCommentStart());
  try {
    const res = await axios.post("/create", post, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createCommentSuccess(res.data));
  } catch (error) {
    dispatch(createCommentFailure());
  }
};

// delete
export const deleteComment = async (id, dispatch) => {
  dispatch(deleteCommentStart());
  try {
    await axios.delete("/delete/:commentId" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteCommentSuccess(id));
  } catch (error) {
    dispatch(deleteCommentFailure());
  }
};
