import { Box } from "@mui/material";
import Post from "./Post";

export default function Feed() {
  return (
    <Box px={2} py={3}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
