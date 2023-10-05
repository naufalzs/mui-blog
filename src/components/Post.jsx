import { useState } from "react";
import {
  ChatBubble,
  Favorite,
  FavoriteOutlined,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

export default function Post() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite(!isFavorite);
  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{
              width: 30,
              height: 30,
              cursor: "pointer",
            }}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Naufal Zufar"
        subheader="September 25, 2023"
      />
      <CardMedia
        component="img"
        image="https://images.pexels.com/photos/601174/pexels-photo-601174.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Paella dish"
        sx={{
          aspectRatio: "4/3",
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Mount Fuji, Japan&#39;s iconic stratovolcano, stands majestically at
          3,776 meters above sea level and is a symbol of both natural beauty
          and cultural significance. Its perfectly symmetrical cone shape, often
          capped with a blanket of snow, makes it a breathtaking sight
          year-round. Mount Fuji has been a source of inspiration for countless
          artists, writers, and photographers throughout history, capturing its
          timeless allure. Climbing Mount Fuji is a cherished tradition for many
          visitors, offering a rewarding journey and a chance to witness the
          awe-inspiring sunrise from its summit. This iconic peak is a testament
          to Japan&#39;s rich natural heritage and its deep-rooted spiritual
          connection to the land.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={toggleFavorite}>
          {isFavorite ? <Favorite color="error" /> : <FavoriteOutlined />}
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Button
          variant="text"
          aria-label="comment"
        >
          <IconButton aria-label="share" component="div" disableRipple>
            <ChatBubble />
          </IconButton>
          <Typography
            variant="p"
            ml={1}
            lineHeight={1}
            fontSize={12}
            sx={{
              borderBottom: "1px solid gray",
            }}
          >
            5 comments
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
