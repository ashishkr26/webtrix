import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const ServiceDrawer = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, marginTop: "10px" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "Web Development",
          "SEO",
          "Mobile App Development",
          "E-Commerce Solutions",
          "Digital Marketing",
          "UI/UX Designs"
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className=" text-white relative -ml-5">
      <Button
        sx={{ background: "none", color: "white" }}
        onClick={toggleDrawer(true)}
      >
        <KeyboardArrowDownOutlinedIcon />
      </Button>
      <Drawer
        sx={{ marginTop: "20px" }}
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default ServiceDrawer;
