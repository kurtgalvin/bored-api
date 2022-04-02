import { useEffect } from 'react';
import { Grid, Paper, Button } from '@mui/material'
import { styled } from '@mui/system';

import useController from './useController';
import UserForm from './user/Form'
import User from './user/User'
import Activity from './activity/Activity';

const PaddedPaper = styled(Paper)({
  padding: '0.5rem',
  width: '20rem'
});

export default () => {
  const [state, dispatcher] = useController();

  useEffect(() => {
    dispatcher.getActivityOptions()
  }, [])

  useEffect(() => {
    dispatcher.getUser()
  }, [state.activityOptions])

  useEffect(() => {
    dispatcher.getActivity()
  }, [state.activityOptions])

  return (
    <Grid container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ height: '100vh' }}
    >
      <Grid item>
        <PaddedPaper elevation={3}>
          <UserForm onSubmit={dispatcher.createUser} activityOptions={state.activityOptions} />
        </PaddedPaper>
      </Grid>

      <Grid item>
        <PaddedPaper elevation={3}>
          {state.user.name && (
            <User {...state.user} />
          )}
        </PaddedPaper>
      </Grid>

      <Grid item>
        <PaddedPaper elevation={3}>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item xs={12}>
              <Activity {...state.activity} />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={dispatcher.getActivity}>Next Activity</Button>
            </Grid>
          </Grid>
        </PaddedPaper>
      </Grid>
    </Grid>
  );
}
