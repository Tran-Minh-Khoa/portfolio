import NavBar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import Footer from "./Footer";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%",
        backgroundColor:'#f5e5cf'
    },
    aboutSection:{
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px 10%",
        textAlign:"left",

    },
    aboutRight:
    {
        width:"57%",
    },
    aboutRighth1:
    {
        color: "#e74d06",
        fontSize: "37px",
        marginBottom: "5px",
    },
    aboutRightp:
    {
        color: "#444",
        lineHeight: "26px",
        fontSize: "15px",
        marginTop:0,
    },
   list:
   {
    display:"flex",
    direction:"row",
    justifyContent:"space-betwwen",
    marginBottom: "20px",
    gap:10,
   },
   container:
   {
   
        display: "flex",
      direction:"column",
      alignItems:"center",
      gap:10,
      height:"100%",
   },
   margin:
   {
    width:"100%",
    marginBottom: "20px",
   }

}));

export default function Contact() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <NavBar/>
        <h1 className={classes.aboutRighth1}>Contact Me</h1>
                <img src="/ContactUs.png" width="350px" />
                <section className={classes.aboutSection}>
                <form>
                    <div className={classes.list}>
                    <TextField id="outlined-search" label="Your Name"  variant="outlined" />
       <TextField id="outlined-search" label="Email"  variant="outlined" />
                    </div>
       
       <TextField id="outlined-search" label="Massage"  variant="outlined" className={classes.margin} />
       <Button variant="contained" color="primary">on Submit</Button>
       </form>
       <div className={classes.aboutRight}>
       <div className={classes.list}>
        <img src='/addressIcon.png' width="60px"/>
        <p>address: 227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh</p>
       </div>
       <div className={classes.list}>
        <img src='/Email.png' width="60px"/>
        <p>Mail: tmkhoa21@fitus.edu.vn</p>
       </div>
       <div className={classes.list}>
        <img src='/FaceBook.png' width="60px"/>
        <p>address: 227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh</p>
       </div>
       <div className={classes.list}>
        <img src='/Slack.png' width="60px"/>
        <p>address: 227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh</p>
       </div>
       </div>
    </section>
    
    
        <Footer/>
      </div>
    );
  }