import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          {avatarImageData.map((item) => (
            <Avatar alt={item.alt} src={item.src} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {latestImageData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {conversationdetailsData.map((item) => (
            <>
             <ListItem alignItems="flex-start">
             <ListItemAvatar>
               <Avatar
                 alt={item.avatar[0]?.alt}
                 src={item?.avatar[0]?.src}
               />
             </ListItemAvatar>
             <ListItemText
               primary={item.primaryText}
               secondary={
                 <React.Fragment>
                   <Typography
                     sx={{ display: "inline" }}
                     component="span"
                     variant="body2"
                     color="text.primary"
                   >
                     {item.userName}
                   </Typography>
                   {item.secondaryText}
                 </React.Fragment>
               }
             />
           </ListItem>
           <Divider variant="inset" component="li" />
           </>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;

const conversationdetailsData = [
  {
    avatar: [
      {
        alt: "SerAli Connors",
        src: "https://material-ui.com/static/images/avatar/3.jpg",
      },
    ],
    primaryText: "Lunch this weekend?",
    userName: "SerAli Connors",
    secondaryText: " — I'll be in.",
  },
  {
    avatar: [
      {
        alt: "Raúl Duke",
        src: "https://material-ui.com/static/images/avatar/2.jpg",
      },
    ],
    primaryText: "Any Updates?",
    userName: "Raúl Duke",
    secondaryText: " — Hey h u doing..",
  },
];

const avatarImageData = [
  {
    src: "https://material-ui.com/static/images/avatar/1.jpg",
    alt: "Llyr Méndez",
  },
  {
    alt: "Sharif Brinley",
    src: "https://material-ui.com/static/images/avatar/2.jpg",
  },
  {
    alt: "Raúl Duke",
    src: "https://material-ui.com/static/images/avatar/3.jpg",
  },
  {
    alt: "Mickey Fitzroy",
    src: "https://material-ui.com/static/images/avatar/4.jpg",
  },
  {
    alt: "Trevor Henderson",
    src: "https://material-ui.com/static/images/avatar/7.jpg",
  },
  {
    alt: "Johnie Kitchens",
    src: "https://material-ui.com/static/images/avatar/5.jpg",
  },
  {
    alt: "Jamaluddin Terzi",
    src: "https://material-ui.com/static/images/avatar/7.jpg",
  },
  {
    alt: "Sepp Neil",
    src: "https://material-ui.com/static/images/avatar/8.jpg",
  },
];

const latestImageData = [
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
