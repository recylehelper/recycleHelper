import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const SearchResults = (props) => {
    const { classes } = props;

    const handleClick = (e) => {
        e.preventDefault();

        props.handleProductClick(props.value)
    }

    return (
        <div className = 'results' onClick = {(e) => {handleClick(e)}}>
            <Paper className = {classes.root} elevation ={3}>
                <Typography variant = 'h5' component = 'h3'>
                    {props.value}
                </Typography>
                <Typography variant = 'body2'>
                    Short Description
                </Typography>
            </Paper>
        </div>
    )
}

export default withStyles(styles)(SearchResults);