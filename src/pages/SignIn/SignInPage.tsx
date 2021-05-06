import { Card, CardContent, Grid } from '@material-ui/core';
import React from 'react';
import { createUseStyles } from 'react-jss';
import signinImage from '../../static/images/signin.jpeg';

const useStyles = createUseStyles({
  root: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '500px',
    maxHeight: '700px',
  },
});

export const SignInPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <img className={classes.image} src={signinImage} alt="woman-signin" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <h1>Jup</h1>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};
