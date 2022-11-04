import NavBar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';;
const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%",
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
    marginTop: "32px",
    width: "50%",
    },
    wrapall:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
}));

export default function AboutMe() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <div className={classes.wrapall}>
        <img src="/SnakeHunter.png"></img>
        <div className={classes.aboutMe} >  
        <h1 className={classes.Title}>FullStack Developer</h1>
        <p className={classes.info}>Tran Minh Khoa la 1 dev vua dep trai vua hoc gioi 
        sieu than thien hoa dong voi moi nguoi hien dang hoc nam 2 HCMUS.</p>
        </div>
        </div>
      </div>
    );
  }