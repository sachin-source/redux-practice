
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Grid, Avatar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import logo from '../assets/images/logoTopC.jpg'
import { useState } from "react";
// import routes from "../Routes/Routes";
import { useNavigate } from "react-router-dom";
import { MdMenuOpen } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import axios from "axios";
import { AiOutlineBell } from 'react-icons/ai'
import { Details, Arrow, NameBar } from '../ThemeProvider/style'
// import AccountMenu from "./ProfileComponent/AccountMenu";
// import ProgressBar from "./CommonComponent/ProgressBar";


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: " 0px 1px 0px #e0e0e0",
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,


        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));





const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export default function SideBar({ routes }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const userId = useSelector(state => state.login.userId);
    const userId = "asdf";



    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [appTitle, setAppTitle] = useState(routes[0]?.name);


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleItemClick = (index) => {
        if (index < routes?.length) {
            setAppTitle(routes[index]?.name);
            navigate(routes[index]?.path);
            setSelectedIndex(index);
        }
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // const response = await axios.get(`http://localhost:3000/User/${userId}`);
                // const userData = response.data;
                // setUserData(userData);
                // setUserData({ name : 'sachin', userType : 'admin', imgUrl : '' })
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, [userId]);
    console.log('here is user Data', userData);

    const name = userData?.name;
    const userType = userData?.userType;
    const imgUrl = userData?.imgUrl;


    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} >
                <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Grid display='flex'>
                        <img src={logo} alt='' width='160'
                            style={{
                                marginLeft: "-15px",
                                marginRight: "15px",
                                ...(open && { display: "none" }),
                            }}
                        />
                        <IconButton
                            color="default"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: "none" }),
                                transform: "rotate(180deg)"
                            }}
                        >
                            <MdMenuOpen />
                        </IconButton>
                    </Grid>

                    <Details>
                        {/* <ProgressBar /> */}

                        <IconButton size="large">
                            <AiOutlineBell />
                        </IconButton>

                        <IconButton size="large" style={{ marginLeft: "-10px" }}
                            onClick={handleClick}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar src={imgUrl} sx={{ width: 35, height: 35 }}></Avatar>
                        </IconButton>

                        <NameBar>
                            <Typography variant="C8" style={{ textTransform: "capitalize" }}>
                                Creator
                            </Typography>
                            <Typography variant="C9"> {name} <Arrow /></Typography>
                        </NameBar>
                    </Details>

                </Toolbar>

            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <img src={logo} alt='' width='160' />
                    <IconButton onClick={handleDrawerClose}>
                        <MdMenuOpen />
                    </IconButton>
                </DrawerHeader>

                <List>
                    {routes.map((route, index) => (
                        <React.Fragment key={index}>
                            <ListItem disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    component={Link}
                                    to={route.path}
                                    onClick={() => handleItemClick(index)}
                                    sx={{
                                        minHeight: 44,
                                        justifyContent: open ? "initial" : "center",
                                        px: 2.5,
                                        backgroundColor: selectedIndex === index ? "#EBEEF3" : "transparent",
                                        color: selectedIndex === index ? "Black" : "#526484"
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 2 : "auto",
                                            variant: 'L1',
                                            color: selectedIndex === index ? "Black" : "#526484"
                                        }}

                                    >
                                        <Typography variant="P2">{route.icon}</Typography>

                                    </ListItemIcon>
                                    <ListItemText

                                        sx={{ opacity: open ? 1 : 0 }}
                                    >
                                        <Typography variant="P1">{route.name}</Typography>

                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </React.Fragment>
                    ))}
                </List>

            </Drawer>
            {/* <AccountMenu
                open={openMenu}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                userId={userId}
                userData={userData}
                setIsAuthenticated={setIsAuthenticated}
            /> */}
        </Box>
    );
}
