import {connect} from 'react-redux';
import Users from '../../components/Users/Users';

const mapStateToProps = ({users}) => {
    return {
        users: users.users,
    };
};

export default connect(mapStateToProps)(Users);