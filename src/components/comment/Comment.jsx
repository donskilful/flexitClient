import "./comment.css";
import { React, useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import useAlert from "../../hooks/useAlert";
import { formatErrorMessage, getToken, getUser } from "../../utils/helpers";
import axios from "axios";
import { BASE_URL } from "../../config";

const Comment = ({ postId }) => {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([])
  const { showError } = useAlert()

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      const data = await axios.post(BASE_URL + `/comment/create`, {postId, body: comment} ,{
        headers: {
          authorization: "Bearer " + getToken(),
        },
      });
      setComment('')
      setComments([...comments, {...data.data.data, user: getUser()}])
    } catch (error) {
      showError(formatErrorMessage(error.response.data))
    }
  }

  const deleteComment = async (id) => {
    try {
      await axios.delete(BASE_URL + `/comment/delete/${id}`, {
        headers: {
          authorization: "Bearer " + getToken(),
        },
      });
      setComments(comments.filter(comment => comment._id !== id))
    } catch (error) {
      showError(formatErrorMessage(error.response.data))
    }
  }

  useEffect(() => {
    getComments(postId)
  }, [])

  const getComments = async () => {
    try {
      const data = await axios.get(BASE_URL + `/comment/get/${postId}`, {
        headers: {
          authorization: "Bearer " + getToken(),
        },
      });
      setComments(data.data)
    } catch (error) {
      showError(formatErrorMessage(error.response.data))
    }
  };

  return (
    <div className="comment">
      <div className="feed__input">
        <CreateIcon />
        <form>
          <input type="text" placeholder="Write a comment" value={comment} onChange={e => setComment(e.target.value)} />
          <button onClick={sendComment} type="submit">
            send
          </button>
        </form>
      </div>
      <div className="comment-body">
        {comments.map(comment => <div className={'comment-item'} >
          <h4>{comment?.user?.name}</h4>
          <p>{comment?.body}</p>
          <button onClick={() => deleteComment(comment._id)} >Delete Comment</button>
        </div>)}
      </div>
    </div>
  )
}

export default Comment
