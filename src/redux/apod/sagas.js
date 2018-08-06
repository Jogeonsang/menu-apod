import { takeEvery, put, call, all, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as service from '../../api/apod';
import {
    PREV,
    NEXT,
    DATA,
    data,
} from './action';


export function* loadData(action) {
    const { date } = action;
    
    try {
        const response = yield call(service.getAPOD,{date} )
        console.log(response)
        yield put(data(date))
        console.log(data(date))
    }
    catch (error) {
        console.log(error);
    }
}

export function* watchData() {
    yield takeEvery(DATA, loadData)
    console.log(DATA)
}