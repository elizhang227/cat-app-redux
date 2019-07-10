import React from 'react';
import { connect } from 'react-redux';
import { eat, nap, play } from '../redux/actions/activity';

const Activity = ({ activity, eat, nap, play }) => {
    return (
        <div>
            <h2>THE CAT IS: {activity}</h2>
            <button onClick={() => eat()}>eat</button>
            <button onClick={() => nap()}>nap</button>
            <button onClick={() => play()}>play</button>
        </div>
    )
}

// this is the subscriber - this listens for changes in state
const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}

const mapDispatchToProps = dispatch => {
    return {
        eat: () => dispatch(eat()),
        nap: () => dispatch(nap()),
        play: () => dispatch(play())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);