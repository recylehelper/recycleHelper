import React from 'react';
import SearchBarContainer from '../redux/containers/searchContainer.js';
import SearchResultsContainer from '../redux/containers/SearchResultsContainer.js';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ProductContainer from '../redux/containers/productContainer.js';
import Button from '@material-ui/core/Button'
import axios from 'axios';
import '../styles.css';

const url = 'http://localhost:3005';

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
    },
  });

  function getModalStyle() {
    const top = 50
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: true,
            zipCode: ''
        }
    }

    componentDidMount() {
        document.getElementById('app').addEventListener('keyup', (e) => {this.handleKeyDown(e)})
    }

    handleChange(e) {
        e.preventDefault();

        this.setState({
            zipCode: e.target.value
        })
    }

    handleKeyDown(e) {

        if (e.which === 13) {
            axios.get(`${url}/api/zipcodes?zip=${this.state.zipCode}`)
            .then((response) => {
                if (response.data === 'success') {
                    this.props.handleZipChange(this.state.zipCode)
                    this.setState({
                        open: false
                    });
                } else {
                    document.getElementById('zipText').value = '';
                    document.getElementById('zipText').placeholder = 'Please enter a valid zip';
                    document.getElementById('zipText').id = 'zipErr';

                }
            })
            .catch(err => {
                console.log(err)
            })

            //change to be esc when can! currently q key
        } else if (e.which === 113) {
            this.setState({
                open: false
            })
        }
    }

    handleModalOpen(e) {
        e.preventDefault()
        this.setState({
            open: true
        })
    }

    render() {
        const { classes } = this.props;
        let display;
        if (this.props.currentProduct) {
            display = <div id = 'product'><ProductContainer /></div>
        } else {
            display = <div id = 'searchResults'>
            {this.props.searchResults.map((value, index) => {
                return <SearchResultsContainer key = {index} value = {value}/>
            })}
        </div>
        }
        return (
            <div>
                <div id = 'zipcode'>
                    <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    >      
                        <div style = {getModalStyle()} className = {classes.paper}>
                            <Typography variant = 'body2'>
                                Please Enter your Zip Code:
                            </Typography>
                            <TextField id = 'zipText' placeholder = 'enter zip here...' onChange = {(e) => this.handleChange(e)} onKeyPress = {(e) => {this.handleKeyDown(e)}}/>
                            <Button id = 'zipEnter'  variant = 'contained' onClick = {() => this.handleKeyDown({which: 13})}>Submit</Button>
                        </div>
                    </Modal>
                </div>
                <SearchBarContainer handleModalOpen = {this.handleModalOpen.bind(this)} />
                {display}
            </div>
        )
    }
}

export default withStyles(styles)(App);