import * as types from './ActionTypes'

export const prev = (date) => ({
    type : tpyes.PREV,
    date
});

export const next = (date) => ({
    type : types.NEXT,
    date
});