import React, {useState, useEffect, Fragment} from 'react'
import styled from 'styled-components';

const Span = styled.span`
    font: 20px;
    margin: 0 10px 0 0
`;
const FieldWrapper = styled.div`
    display: flex
    margin: 0 0 20px 0;
`;
const Input = styled.input`
    width: 200px;
    border: 1px solid #000;
    border-radius: 5px
    outline:none;
`;
const SubmitInput = styled.input`
    width: 100px;
    height: 30px;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
    background: blue;
    outline:none;
`;
const ErrorMessage = styled.p`
    font: 14px bold;
    color: red;
`;
const Login = (props) => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const handleSubmit = () => (e) => {
        e.preventDefault()
        const {dispatch} = props;
        const callback = () => props.history.push('/users');
        dispatch({type: 'USER_LOGIN', payload: {email, password, callback}});
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit()}>
                <p>Please log in :)</p>
                {props.error ? <ErrorMessage>{props.error}</ErrorMessage> : null}
                <FieldWrapper>
                    <Span>Email</Span>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FieldWrapper>
                <FieldWrapper>
                    <Span>Password</Span>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FieldWrapper>
                <SubmitInput type="submit" value="Submit"/>
            </form>

        </Fragment>
    )
}


export default Login;