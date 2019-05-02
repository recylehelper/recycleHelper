import { connect } from 'react-redux';
import ZipCode from '../../components/zipCode.jsx';
import changeZip from '../actions/changeZip.js';
import changeModalOpen from '../actions/changeModalOpen.js';

const mapStateToProps = (state) => {
    
    return ({
        zip: state.zip,
        open: state.modalOpen,
        url: state.url
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return ({
        handleZipChange: (ownProps) => dispatch(changeZip(ownProps)),
        handleModalChange: (ownProps) => dispatch(changeModalOpen(ownProps))
    })
}



const ZipContainer = connect(mapStateToProps, mapDispatchToProps)(ZipCode);

export default ZipContainer