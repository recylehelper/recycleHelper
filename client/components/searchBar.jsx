import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import '../styles.css';


const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 0,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
  });

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSearch: '',
            LoggedIn: 'Log In'
        }
    }

    componentDidMount() {
        document.getElementById('searchBar').addEventListener('keydown', (e) => {this.handleKeyDown(e)})
    }

    handleChange(e) {
        e.preventDefault();

        this.setState({
            currentSearch: e.target.value
        })
    }

    handleKeyDown(e) {

        if (e.which === 13) {
            let currSearch = this.state.currentSearch
            this.props.handleSearchChange(currSearch);
            this.props.handleProductSearch([currSearch]);
            this.props.deleteCurrentProduct();

            this.setState({
              currentSearch: ''
            }, () => {
              document.getElementById('searchBox').value = ''
            })
        }
    }

    handleLogOut(e) {
      e.preventDefault();
      axios.get(`${this.props.url}/logout`)
      .then((success) => {
        console.log('success')
      })
      .catch((err) => {
        console.log('err')
      })
    }

    handleLogIn(e) {
      e.preventDefault();
      this.setState({
        LoggedIn: 'Logged In'
      })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar id = 'searchBar' >
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase id = 'searchBox'
                            placeholder="Search…"
                            classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                            }}
                            onChange = {(e) => {this.handleChange(e)}}
                            // onKeyPress = {(e) => {this.handleKeyDown(e)}}
                        />
                    </div>  
                      <Button id = 'searchEnter' variant = 'contained' onClick = {() => {this.handleKeyDown({which: 13})}}>Enter</Button>
                      <Button id = 'resetZip' variant = 'contained' onClick = {(e) => {this.props.handleModalChange(true)}}>
                            Reset Zip
                      </Button>
                      <Button id = 'googleSignIn' variant = 'contained'><a href = {`${this.props.url}/auth/google`}>{this.state.LoggedIn}</a></Button>
                      <Button id = 'googleLogOut' variant = 'contained' onClick = {(e) => {this.handleLogOut(e)}}>Logout</Button>
                </AppBar>
            </div>
        )
    }


}

export default withStyles(styles)(SearchBar);