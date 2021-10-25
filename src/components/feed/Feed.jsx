import "./feed.css";
import { React, useContext, useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import moment from 'moment'
import InputOption from "../../components/inputOption/InputOption";
import Post from "../../components/post/Post";
import useAlert from "../../hooks/useAlert";
import { createPost, getPosts } from "../../context/PostContext/apiCalls";
import { PostContext } from "../../context/PostContext/PostContext";

function Feed() {
  const [post, setPost] = useState('');
  const { showError } = useAlert()
  const {posts, dispatch} = useContext(PostContext)

  const sendPost = (e) => {
    e.preventDefault();
    if (!post || !post.trim()) {
      return showError("Post cannot be empty")
    }
    createPost(post, dispatch, () => {
      setPost('')
    }, showError)
  };

  useEffect(() => {
    getPosts(dispatch)
  }, [])

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="What's on your mind?" onChange={(e) => setPost(e.target.value)} value={post} />
            <button onClick={sendPost} type="submit">
              post
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      <div>
        {posts.map(post => <Post
          postId={post._id}
          name={post?.user?.name}
          datePosted={moment(post.created).format("MMM Do YY")}
          timePosted={moment(post.created).format("H:mm a")}
          description={post.body}
        />)}

      </div>
    </div>
  );
}

export default Feed;
