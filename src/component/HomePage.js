import NavBar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import { Height } from "@material-ui/icons";
const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%",
        Height:"100%",
        backgroundColor:'#f5e5cf'

    },
    Title:{
      display: "flex",
      marginLeft: 250,
      marginRight:" auto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 54,
      lineHeight: "100%",
      width: "85%",
      
  },
  aboutImage:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      display: "none",
  },
  aboutMe:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
  },
  info:{
      
  marginLeft: "auto",
  marginRight: "auto",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "20px",
  lineHeight: "170%",
  width: "50%",
  },
  wrapall:{
      display: "flex",
      flexDirection: "colum",
      alignItems: "center",
      height:500,
  }
}));

export default function HomePage() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <NavBar/>
        <div className={classes.wrapall}>
        <img src="/25231.png" alt="home"></img>
        <div className={classes.aboutMe} >  
        <h1 className={classes.Title}>FullStack Developer</h1>
        <p className={classes.info}>UpWork's Top Rate Plus Freelancer</p>
        <p className={classes.info}>100% Job Success Rate</p>
        <p className={classes.info}>Official Wix Partner</p>
        <p className={classes.info}>Velo Certified</p>
        </div>
        </div>  
        <Footer/>
      </div>
    );
  }