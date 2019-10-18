import React from "react";
import { Button } from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';

import Logo from "../images/labby.png";

const useStyles = makeStyles({
  display: {
    // display: 'flex'
  },
  button: {
    width: '247px',
    background: '#222E44',
    color: 'white',
    margin: '100px'
  },
  image: {
    width: '506px',
    height: '506px',
    marginTop: '314px'
  }
});

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className={classes.display}>
      <div>
        <img src={Logo} alt="labby logo" className={classes.image}/>
      </div>
      <div>
        <Button variant="contained" className={classes.button}>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default Welcome;
