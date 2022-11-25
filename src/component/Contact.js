import NavBar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import Footer from "./Footer";
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
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
    
   },
   container:
   {
   
        display: "flex",
      direction:"row",
      alignItems:"center",
      gap:10,
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
            <div class="about-left">
                <h1 className={classes.aboutRighth1}>Contact Me</h1>
                <img src="/ContactUs.png" width="350px" />
            </div>

            <div className={classes.aboutRight}>
                <h4>Tran Minh Khoa's Story</h4>
                <h1 className={classes.aboutRighth1}>About Me</h1>
                <p className={classes.aboutRightp}>
                    I am an enthusiastic, self-motivated, reliable, responsible and hard working person.
                     I am a mature team worker and adaptable to all challenging situations. 
                     I am able to work well both in a team environment as well as using own initiative.
                     I am able to work well under pressure and adhere to strict deadlines.
                </p>
                <Link to="/Minh Khoa.pdf" target="_blank" download><Button variant="contained" color="primary" >Read more</Button></Link>


               <div className={classes.list}>
                <HomeIcon/>
                <p className={classes.aboutRightp} > address: 227 Nguyễn Văn Cừ, Phường 4, Quận 5, Thành phố Hồ Chí Minh</p>
               </div>
               <div className={classes.list}>
                <PhoneIcon/>
                <p className={classes.aboutRightp} > Phone: 0924936662</p>
               </div>
               <h3>My Experties</h3>
                <div className={classes.container}>
                    
                    <Avatar variant="rounded" src="/html.png" className={classes.logo}></Avatar>
                    <Avatar variant="rounded" src="/CSS.png" className={classes.logo}></Avatar>
                    <Avatar variant="rounded" src="/logo512.png" className={classes.logo}></Avatar>
                    <Avatar variant="rounded" src="/javaScrip.png" className={classes.logo}></Avatar>
                    <Avatar variant="rounded" src="/nodejs.png" className={classes.logo}></Avatar>


                </div>
                </div>

        </section>
        <Footer/>
      </div>
    );
  }