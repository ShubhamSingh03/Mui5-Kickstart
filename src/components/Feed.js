import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={500} />
        </Stack>
      ) : (
        <>
        {postData.map((item) => (
          <Post avatar={item.avatar} userName={item.userName} postDate={item.postDate} imgSrc={item.imgSrc} content={item.content}  />
        ))} 
        </>
      )}
    </Box>
  );
};

export default Feed;

const postData = [
  {
    avatar: "https://material-ui.com/static/images/avatar/5.jpg",
    userName: "Sepp Neil",
    postDate: "April 30, 2023",
    imgSrc: "https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "A man who has a vision is not able to use the power of it until after he has performed the vision on earth for the people to see. - Black Elk"
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
    userName: "Johnie Kitchens",
    postDate: "April 29, 2023",
    imgSrc: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "The hidden harmony is better than the obvious. - Heraclitus"
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    userName: "Llyr Méndez",
    postDate: "April 28, 2023",
    imgSrc: "https://images.pexels.com/photos/1157386/pexels-photo-1157386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "You could leave life right now. Let that determine what you do and say and think. - Marcus Aurelius"
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",
    userName: "Sharif Brinley",
    postDate: "March 30, 2023",
    imgSrc: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "What a man hasn't been reasoned into believing, he cannot be reasoned out of believing. - "
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/4.jpg",
    userName: "Mickey Fitzroy",
    postDate: "March 15, 2023",
    imgSrc: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Asking myself 'is this helping me get what I want' is becoming one of my favorite questions. - Shane Parrish"
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/7.jpg",
    userName: "Trevor Henderson",
    postDate: "March 01, 2023",
    imgSrc: "https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "The worst loneliness is to not be comfortable with yourself. - Mark Twain"
  },
]