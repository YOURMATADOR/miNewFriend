import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
/* jshint ignore:start */

const styles = {
  row: {
    display: "flex",
    justifyContent: "center"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
};

function ImgPerfil(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="Chabelo del ocho"
        src="../static/images/avatars/linux.svg"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

ImgPerfil.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgPerfil);
/* jshint ignore:end */
