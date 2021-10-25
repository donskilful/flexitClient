import "./post.css";
import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import axios from 'axios'
import InputOption from "../../components/inputOption/InputOption";
import Comment from "../../components/comment/Comment";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/Chat";
import useAlert from '../../hooks/useAlert'
import { formatErrorMessage, getToken, getUser } from "../../utils/helpers";

function Post({ postId, name, description, datePosted, timePosted }) {
  const [likes, setLikes] = useState([])
  const [liked, setLiked] = useState(false)
  const { showError } = useAlert()

  const getLikes = async () => {
    try {
      const data = await axios.get(`/like/count/${postId}`, {
        headers: {
          authorization: 'Bearer ' + getToken()
        }
      })
      const user = getUser()
      setLikes(data.data.data)
      setLiked(Boolean(data.data.data.filter(like => like.user._id === user._id)[0]))
    } catch (error) {
      showError(formatErrorMessage(error.response.data))
    }
  }

  const toggleLike = async () => {
    try {
      setLiked(!liked)
      await axios.post(`/like/like`, { postId }, {
        headers: {
          authorization: 'Bearer ' + getToken()
        }
      })
    } catch (error) {
      showError(formatErrorMessage(error.response.data))
    }
  }

  useEffect(() => {
    getLikes(postId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{datePosted}</p>
          <p>{timePosted}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title={`${likes.length ? liked ? likes.length + 1 : likes.length : ''} Like`} color={liked ? "green" : "gray"} onClick={toggleLike} />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
      </div>
      <div className="post__body">
        <Comment postId={postId} />
      </div>
    </div>
  );
}

export default Post;
