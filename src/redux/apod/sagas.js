import { takeEvery, put, call, all, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as api from '../../api/apod';

import { Actions } from './action';
import { getAPOD } from '../../api/apod';

export function* getData(action) {
    const { date } = action;
    try {
        const response = yield call(getAPOD,{ date })
        console.log(response)
        yield put(Actions.DATA);

    }
    catch (error) {
        console.log(error);
    }
}

export function* watchData() {
    yield takeEvery(Actions.DATA, getData)
}

export default function* apodRoot() {
    yield all([watchData()]);
}