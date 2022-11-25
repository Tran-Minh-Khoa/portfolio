import NavBar from "./Navbar";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Footer from "./Footer";
const useStyles = makeStyles(theme =>({
    root:{
        padding: 0,
        margin: 0,
        width: "100%"
    },
    card:{
        maxWidth:260,
        backgroundColor:'#EEE3CB'
    },
    wrapperCard:{
        display: "flex",
        padding: 42,
        justifyContent: "center",
        gap: 84,
        margin:0
    },
}));

export default function () {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <NavBar/>
        <div style={{backgroundColor:'#f5e5cf'}}>
        <h1 className={classes.wrapperCard}>All Projects</h1>
        <div className={classes.wrapperCard}>
        <Card className={classes.card} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          width="260px" height="260px"
          image="/25231.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SnakeHunter
          </Typography>
          <Typography variant="body2" color="textSecondary" component="a" href="https://github.com/Tran-Minh-Khoa/HunterSnake" target="_blank">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card} >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          width="260px" height="260px"
          image="/25231.png"
          title="Contemplative Reptile"
          display="flex"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Road-Crossing
          </Typography>
          <Typography variant="body2" color="textSecondary" component="a" href="https://github.com/Thanh-Duy-03/TEAM"  target="_blank">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>  
      
        </div>
        <Footer/>
      </div>
    );
  }