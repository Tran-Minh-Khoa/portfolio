import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const useStyles = makeStyles(theme =>({
   footer:{
    backgroundColor: "rgb(41, 38, 38)",
    width: "100%",
    color:"white",
    boxSizing: "border-box",
    display:" flex",
    flexDirection: "column",
    overflow: "hidden",
   },
   container2:{
    padding:0,
    fontFamily: "New York Extra Large",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "35px",
    textAlign: "center",
    letterSpacing: "0.1em",
   },
   container3:{
    fontFamily: "New York Small",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "19px",
    lineHeight: "140%",
/* or 22px */
    textAlign: "center",
    width : "488px",
    marginLeft: "auto",
    marginRight: "auto",
   },
   container4:{
    display: "flex",
    gap: "27px",
    justifyContent:" center",
   },
   container5:{
    display: "flex",
    color:"white",
    textDecoration: "none",

   }
}));

export default function Footer() {
    const classes = useStyles();
    return (
    
        <div className={classes.footer}>
        <div className={classes.container2}>
            <p>Tran Minh Khoa</p>
        </div>

        <div className={classes.container3}>
            <p>The page to store my projects in university. This page is only used for storing projects.</p>
            <p>Contact me at:</p>
        </div>
        <div className={classes.container4}>
      <a href="" className={classes.container5}>Slack</a>
            <a href=""className={classes.container5}>Email</a>
            <a href=""className={classes.container5}>Facebook</a>
        
        </div>

    </div>
    );
  }