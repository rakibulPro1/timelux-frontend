import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import { Button } from "@mui/material";
import Review from "../Review/Review";
import useAuth from "../../../hooks/useAuth";
import ManageOrders from "../Admin/ManageOrders/ManageOrders";
import AddProduct from "../Admin/AddProduct/AddProduct";
import ManageProducts from "../Admin/ManageProducts/ManageProducts";
import MakeAdmin from "../Admin/MakeAdmin";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { logout, admin } = useAuth();
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            Back To Home
          </NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <NavLink
            to={`${url}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            My Orders
          </NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <NavLink
            to={`${url}/payment`}
            style={{ textDecoration: "none", color: "black" }}
          >
            Payment
          </NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <NavLink
            to={`${url}/review`}
            style={{ textDecoration: "none", color: "black" }}
          >
            Review
          </NavLink>
        </ListItem>
        {admin && (
          <Box>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <NavLink
                to={`${url}/manage-orders`}
                style={{ textDecoration: "none", color: "black" }}
              >
                Manage All Orders
              </NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <NavLink
                to={`${url}/add-product`}
                style={{ textDecoration: "none", color: "black" }}
              >
                Add Product
              </NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <NavLink
                to={`${url}/manage-products`}
                style={{ textDecoration: "none", color: "black" }}
              >
                Manage All Products
              </NavLink>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <NavLink
                to={`${url}/make-admin`}
                style={{ textDecoration: "none", color: "black" }}
              >
                Make Admin
              </NavLink>
            </ListItem>
          </Box>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: " #f3f3f3",
          border: "none",
          boxShadow: "none",
          color: "black",
          fontWeight: "bold",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route path={`${path}/manage-orders`}>
            <ManageOrders></ManageOrders>
          </Route>
          <Route path={`${path}/add-product`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/manage-products`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/make-admin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

export default Dashboard;
