import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

//logo
// import scalapayLogo from "../images/scalapay-logo.svg";

//icons


const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%",
    },
    navBarContainer:{
        padding: "1% 8%",
        background: "#B7C4CF",
        position: "fix",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

    },
    listIcons:{
        display:"flex",

    },
    icons:{
        color: "black",
        marginLeft: "1.5rem",
        cursor: "pointer",
        fontSize: "large",
        fontWeight: 600,
        textDecoration: "none",

    },
    HomePageLogo:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
}));

export default function NavBar() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div className={classes.navBarContainer}>
            <div className={classes.HomePageLogo}>
                <Link to="/"><img src="/HomePage.png" width="200px" height="80px" alt="scalapay logo"/></Link>
                <h1>Portfolio MK</h1>
            </div>
            <div className={classes.listIcons}>
                <Link to="/" className={classes.icons}>Home</Link>
                <Link to="/About" className={classes.icons}>About</Link>
                <Link to="/Project" className={classes.icons}>Project</Link>
                <Link to="/Contact" className={classes.icons}>Contact</Link>
            </div>
            
        </div>
        
      </div>
    );
  }
