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
  useMediaQuery,
} from "@mui/material";

export default function Rightbar() {
  const isLaptop = useMediaQuery((theme) => theme.breakpoints.only("md"));

  return (
    <Box>
      <Box p={2} position="fixed" maxWidth={380}>
        <Box mb={3}>
          <Typography variant="h6" component="h2" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={isLaptop ? 5 : 7}>
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
            <Avatar
              alt="Agnes Walker"
              src="https://mui.com/static/images/avatar/4.jpg"
            />
            <Avatar
              alt="Trevor Henderson"
              src="https://mui.com/static/images/avatar/5.jpg"
            />
            <Avatar
              alt="Alan Walker"
              src="https://mui.com/static/images/avatar/6.jpg"
            />
            <Avatar
              alt="Christian Bautista"
              src="https://mui.com/static/images/avatar/7.jpg"
            />
            <Avatar
              alt="Roland Navas"
              src="https://mui.com/static/images/avatar/8.jpg"
            />
          </AvatarGroup>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" component="h2" fontWeight={100}>
            Latest Photos
          </Typography>
          <ImageList cols={3} gap={6}>
            <ImageListItem>
              <img
                src="https://images.pexels.com/photos/601174/pexels-photo-601174.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Mount Fuji"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://images.pexels.com/photos/755858/pexels-photo-755858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Boat in Yellow Forest"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://images.pexels.com/photos/3694341/pexels-photo-3694341.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Desert"
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Box>
        <Box mb={3}>
          <Typography variant="h6" component="h2" fontWeight={100}>
            Latest Conversations
          </Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem disablePadding={isLaptop} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem disablePadding={isLaptop} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem disablePadding={isLaptop} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://mui.com/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
}
