import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme =>({
   footer:{
    backgroundColor: "#967E76",
    width: "100%",
    color:"white",
    boxSizing: "border-box",
    display:" flex",
    flexDirection: "column",
    overflow: "hidden",
   },
   container2:{
    padding:0,
    marginTop:0,
    fontFamily: "New York Extra Large",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "35px",
    textAlign: "center",
    letterSpacing: "0.1em",
   },
   container3:{
    display: "flex",
  direction:"row",
  justifyContent:"center",
  alignItems:"center",
  gap:10,
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
   },
   logo:{
   }

}));

export default function Footer() {
    const classes = useStyles();
    return (
    
        <div className={classes.footer}>
       


        <div className={classes.container3}>
        <Avatar variant="rounded" src="/Linkedin.png"  className={classes.logo}></Avatar>
        <Avatar variant="rounded" src="/25231.png" className={classes.logo}></Avatar>
        <Avatar variant="rounded" src="/25237.png" className={classes.logo}></Avatar>
        <Avatar variant="rounded" src="/25872.png" className={classes.logo}></Avatar>

        </div>
        <div className={classes.container4}>
      <p>@ 2022 by Tran MInh Khoa</p>
        
        </div>

    </div>
    );
  }