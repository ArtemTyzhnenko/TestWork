import {connect} from 'react-redux';
import Login from '../../components/Login/Login';

const mapStateToProps = ({login}) => {
    return {
        error: login.error,
    };
};

export default connect(mapStateToProps)(Login);