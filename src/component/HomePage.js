import NavBar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import AboutMe from "./AboutMe";
import Footer from "./Footer";
const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%"
    },
    card:{
        maxWidth:345,
        backgroundColor:'#f5e5cf'
    },
    wrapperCard:{
        display: "flex",
        padding: 42,
        justifyContent: "center",
        gap: 84,
        margin:0
    },
}));

export default function HomePage() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <NavBar/>
        <AboutMe/>
        <Footer/>
      </div>
    );
  }