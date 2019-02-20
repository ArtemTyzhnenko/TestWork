import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {

        componentDidMount() {
            this.shouldNavigateAway();
        };

        componentDidUpdate() {
            this.shouldNavigateAway();
        };

        shouldNavigateAway = () => {
            if(!this.props.auth && !this.props.token){
                this.props.history.push('/');
            }
        };

        render(){
            return <ChildComponent {...this.props}/>
        }
    }

    const mapStateToProps = ({login}) => {
        return {
            auth: login.auth,
            token: login.token,
        };
    };

    return connect(mapStateToProps)(ComposedComponent);
}