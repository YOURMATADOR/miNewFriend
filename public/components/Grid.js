import React, { Component } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

import cyan from "@material-ui/core/colors/cyan";
import pink from "@material-ui/core/colors/pink";

import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import CachedIcon from "@material-ui/icons/Cached";
import WhereToVoteIcon from "@material-ui/icons/WhereToVote";
import CategoryIcon from "@material-ui/icons/Category";

import ImgAvatar from "./Avatar";
import Noticia from "./Noticia";
import Footer from "./Footer";

const secundario = cyan[300];
const primario = pink[400];
const imagenes = [
  "perroUno.jpg",
  "perroDos.jpg",
  "perroTres.jpg",
  "perroCuatro.jpg",
  "perroCinco.jpg",
  "perroSeis.jpg"
];
/* jshint ignore:start */
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100,
    backgroundColor: primario
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  rowAvatar: {
    display: "flex",
    justifyContent: "center"
  },
  navegacion: {
    alignSelf: "center",
    marginBottom: "5%"
  },
  avatarImg: {
    alignSelf: "flex-end"
  },
  avatarCon: {
    display: "flex",
    alignSelf: "flex-end"
  }
});

class App extends Component {
  state = { espacio: 16, value: 0 };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { espacio } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container className={classes.root} justify="center">
          <Grid item xs={10} className={classes.navegacion}>
            <Paper square className={classes.root}>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth
                indicatorColor="secondary"
                textColor="secondary"
              >
                <Tab icon={<CachedIcon />} label="Nuevo" />
                <Tab icon={<CategoryIcon />} label="Noticias" />
                <Tab icon={<WhereToVoteIcon />} label="Notificaciones" />

                <ImgAvatar className={classes.avatarImg} />
              </Tabs>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center" spacing={8}>
              {imagenes.map((v, i) => (
                <Grid key={i} item>
                  <Noticia imagen={v} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Footer />
        </Grid>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);

/* jshint ignore:end */
