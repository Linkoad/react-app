import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { FixedSizeList } from 'react-window';
import  { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '360%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Row(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <Link to="/post">
        <ListItemText primary={`Post ${index + 1}`} />
      </Link>
      <ListItemText />
      <IconButton edge="end" aria-label="delete">      
        <DeleteIcon />
      </IconButton>  
    </ListItem>
  );
}

Row.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={400} width={360} itemSize={46} itemCount={10}>
        {Row}
      </FixedSizeList>
    </div>
  );
}