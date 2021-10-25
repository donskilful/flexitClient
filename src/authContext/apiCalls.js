import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch, onSuccess, onError) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
    onSuccess("Logged in Successfully")
  } catch ({ response }) {
    onError(response?.data?.message ?? "Authentication failed")
    dispatch(loginFailure());
  }
};

