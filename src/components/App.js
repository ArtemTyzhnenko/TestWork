import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from '../containers/LoginContainer/LoginContainer';
import Users from '../containers/UsersContainer/UsersContainer';
import {logout} from '../reducers/Login/actions';

import styled from 'styled-components';

const MainWrapper = styled.div`
    display: block;
    margin: 50px;
`;
const WrapperComponents = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;
const Ul = styled.ul`
    margin: 0;
    padding: 0;
`;
const ListItem = styled.li`
    display: inline;
    margin-right: 20px;
`;
const Nav = styled.div`
    display: flex;
    margin: 0 0 20px 0;
`;

class App extends Component {

    renderHeader = () => {
        return (
            <Ul>
                <ListItem>
                    {this.props.token ? <Link to="/" onClick={() => this.props.logout()}>Logout</Link> :
                        <Link to="/">Login</Link>}
                </ListItem>
                <ListItem>
                    <Link to="/users">Users</Link>
                </ListItem>
            </Ul>
        )
    };

    render() {
        return (
            <MainWrapper className="App">
                <Nav>
                    {this.renderHeader()}
                </Nav>
                <WrapperComponents>
                    <Route path='/users' component={Users}/>
                    <Route path='/' exact component={Login}/>
                </WrapperComponents>
            </MainWrapper>
        );
    }
}

const mapStateToProps = ({login}) => {
    return {
        auth: login.auth,
        token: login.token,
    };
};
export default connect(mapStateToProps, {logout})(App);
