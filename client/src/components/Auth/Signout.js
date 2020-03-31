import React, { useContext } from "react";
import { GoogleLogout } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Context from '../../context';

const Signout = ({ classes }) => {
  const mobileSize = useMediaQuery('(max-width: 650px)');
  const { dispatch } = useContext(Context);

  const onSignOut = () => {
    dispatch({ type: "SIGNOUT_USER"});
  }

  return (
    <GoogleLogout 
      onLogoutSuccess={onSignOut}
      buttonText="Signout"
      render={({ onClick }) => (
        <span className={classes.root} onClick={onClick}>
          {!mobileSize && (
            <Typography
              variant="body1"
              className={classes.buttonText}
            >
              Signout
            </Typography>
          )}
          <ExitToApp className={classes.buttonIcon}/>
        </span>
      )}
    />
  );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonText: {
    color: "orange"
  },
  buttonIcon: {
    marginLeft: "5px",
    color: "orange"
  }
};

export default withStyles(styles)(Signout);
