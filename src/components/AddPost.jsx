import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const ModalPost = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  gap: "10px",
});

export default function AddPost() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (isShow) => setIsOpen(isShow);

  return (
    <>
      <Tooltip
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: {
            xs: "calc(50% - 25px)",
            sm: 30,
          },
        }}
      >
        <Fab
          color="primary"
          aria-label="add post"
          onClick={() => toggleModal(true)}
        >
          <Add />
        </Fab>
      </Tooltip>
      <ModalPost open={isOpen} onClose={() => toggleModal(false)}>
        <Box
          width={350}
          bgcolor={"background.default"}
          p={3}
          borderRadius={2}
        >
          <Typography
            variant="h5"
            component="h2"
            color="gray"
            textAlign="center"
            mb={3}
          >
            Create a Post
          </Typography>
          <UserBox mb={0.5}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{
                width: 20,
                height: 20,
                cursor: "pointer",
              }}
            />
            <Typography variant="subtitle2" lineHeight={1}>John Doe</Typography>
          </UserBox>
          <TextField
            fullWidth
            multiline
            rows={3}
            variant="standard"
            placeholder="What&#34;s on your mind?"
          />
          <Stack mt={2} mb={3} direction="row" gap={1}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="set post date">
            <Button>Post</Button>
            <Button size="small" sx={{
              width: 80
            }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </ModalPost>
    </>
  );
}
