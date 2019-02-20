import React, {useEffect, Fragment} from 'react'
import requireAuth from '../requireAuth/requireAuth';
import styled from 'styled-components';

const List = styled.ul`
    display: inline-flex
    width: 700px;
    margin: 0 auto;
`;

const ListItem  = styled.li`
    display: flex-root;
    list-style-type: none;
    margin: 0 20px 0 0;
    text-align: center;
    align-items: center;
    width: 200px;
`;

const Img = styled.img`
    border-radius: 50%;
`;
const UserInfo = styled.p`
    font: 20px;
    margin: 10px 0;
`;


const Users = (props) => {

    useEffect(() => {
        const {dispatch} = props;
        dispatch({type: 'GET_USERS_SAGA'});
    }, []);

    const renderUsers = () => {
        let {users} = props;
        return users.map(user => {
            return (
                <ListItem key={user.id}>
                    <Img src={user.avatar} alt="avatar"/>
                    <UserInfo>First name: {user.first_name}</UserInfo>
                    <UserInfo>Last name: {user.last_name}</UserInfo>
                </ListItem>)
        })
    };

    return (
        <Fragment>
            <List>
                {renderUsers()}
            </List>
        </Fragment>
    )
}


export default requireAuth(Users)