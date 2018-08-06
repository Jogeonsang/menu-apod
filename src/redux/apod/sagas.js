import { takeEvery, put, call, all, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as getAPOD from '../../api/apod';
import {
    Actions
} from './action';


export function* loadData(action) {
    console.log('!!')
    const { date } = action;
    console.log(date)
    try {
        const response = yield call(getAPOD, date )
        console.log(response)
    }
    catch (error) {
        console.log(error);
    }
}

export function* watchData() {
    yield takeEvery(Actions.DATA, loadData)
}

export default function* apodRoot() {
    yield all([watchData()]);
}