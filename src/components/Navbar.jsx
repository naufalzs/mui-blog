import { Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Container,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  width: "40%",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;

  const toggleMenu = (e) => {
    if (!e) return setAnchorEl(null);
    setAnchorEl(e.currentTarget);
  };

  return (
    <AppBar position="sticky">
      <Container disableGutters maxWidth={"xl"}>
        <StyledToolbar>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Naufal Blog
          </Typography>
          <Avatar
            alt="Naufal Blog"
            src="/favicon.png"
            sx={{
              width: 40,
              height: 40,
              padding: "4px",
              display: { xs: "block", sm: "none" },
            }}
          />
          <Search>
            <InputBase fullWidth placeholder="Search..." />
          </Search>
          <Stack
            direction="row"
            gap={2.5}
            alignItems="center"
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
            onClick={toggleMenu}
          >
            <Badge badgeContent={2} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={10} color="error">
              <Notifications />
            </Badge>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{
                width: 30,
                height: 30,
                cursor: "pointer",
              }}
            />
          </Stack>
          <UserBox onClick={toggleMenu}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{
                width: 30,
                height: 30,
                cursor: "pointer",
              }}
            />
            <Typography variant="subtitle2">John Doe</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={() => toggleMenu(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Container>
    </AppBar>
  );
}
