import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black", px: 3 }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h5"
            className="text-cursive"
            component="div"
            sx={{ flexGrow: 1, fontFamily: "" }}
          >
            TimeLux
          </Typography>
          <NavLink
            to="/"
            style={{
              color: "white",
              fontSize: "18px",
              textDecoration: "none",
              marginRight: "30px",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            style={{
              color: "white",
              fontSize: "18px",
              textDecoration: "none",
              marginRight: "30px",
            }}
          >
            Explore
          </NavLink>
          {user?.email && (
            <NavLink
              to="/dashboard"
              style={{
                color: "white",
                fontSize: "18px",
                textDecoration: "none",
                marginRight: "30px",
              }}
            >
              Dashboard
            </NavLink>
          )}
          {user?.email ? (
            <button
              onClick={logout}
              style={{
                color: "white",
                fontSize: "18px",
                textDecoration: "none",
                background: "transparent",
                border: "none",
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              style={{
                color: "white",
                fontSize: "18px",
                textDecoration: "none",
              }}
            >
              Login
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
