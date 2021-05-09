import {
  Card, CardContent, Grid, Switch,
} from '@material-ui/core';
import React from 'react';
import { createUseStyles } from 'react-jss';
import signinImage from '../../static/images/signin.jpeg';

const useStyles = createUseStyles({
  root: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  cardInputs: {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    textAlign: 'center',
    alignItems: 'center',
  },
});

export const SignInPage: React.FC = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    signinTypeForm: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <img className={classes.image} src={signinImage} alt="woman-signin" />
            </Grid>
            <Grid className={classes.cardInputs} item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <h1>Jup</h1>
                  <h3>Crie sua conta</h3>
                  <Switch
                    checked={state.signinTypeForm}
                    onChange={handleChange}
                    name="tipoForm"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
