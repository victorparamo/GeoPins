import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import NoContent from './Pin/NoContent';
import CreatePin    from './Pin/CreatePin';
import PinContent    from './Pin/PinContent';
import Context from '../context';

const Blog = ({ classes }) => {
  const mobileSize = useMediaQuery('(max-width: 650px)');
  const { state } = useContext(Context);
  const { draft, currentPin } = state;

  let BlogContet;
  if (!draft && !currentPin) {
    BlogContet = NoContent;
  } else if (draft && !currentPin) {
    BlogContet = CreatePin;
  } else if (!draft && currentPin) {
    BlogContet = PinContent;
  }

  return (
    <Paper className={mobileSize ? classes.rootMobile : classes.root}>
      <BlogContet />
    </Paper>
  );
};

const styles = {
  root: {
    minWidth: 350,
    maxWidth: 400,
    maxHeight: "calc(100vh - 64px)",
    overflowY: "scroll",
    display: "flex",
    justifyContent: "center"
  },
  rootMobile: {
    maxWidth: "100%",
    maxHeight: 300,
    overflowX: "hidden",
    overflowY: "scroll"
  }
};

export default withStyles(styles)(Blog);
