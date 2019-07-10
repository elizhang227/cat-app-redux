import { ACTION_EAT, ACTION_NAP, ACTION_PLAY } from './actionTypes';

export const eat = () => {
    return {
        type: ACTION_EAT
    }
}

export const nap = () => {
    return {
        type: ACTION_NAP
    }
}

export const play = () => {
    return {
        type: ACTION_PLAY
    }
}