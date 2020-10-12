import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles({
  header: {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
  },
  left: {

  },
  center: {

  },
  right: {

  },
});

export default function Header() {
  const classes = useStyles();
  const history = useHistory();


  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <button onClick={() => history.push('/')}>HOME</button>
      </div>
      <div className={classes.center}>
        <h2>Jira 2</h2>
      </div>
      <div className={classes.right}>
        <button>User</button>
      </div>
    </div>
  );
};
