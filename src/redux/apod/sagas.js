import { takeEvery, put, call, all, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as service from '../../api/apod';
import {
    PREV,
    NEXT,
    DATA_REQUEST,
    DATA_SUCCESS,
    data,
    dataSuccess,
} from './action';


export function* loadData(action) {
    const { date } = action;
    
    try {
        const response = yield call(service.getAPOD,{date} )
        console.log(response.data)
        yield put(dataSuccess(response.data))
        console.log(dataSuccess)
    }
    catch (error) {
        console.log(error);
    }
}

export function* watchData() {
    yield takeEvery(DATA_REQUEST, loadData)
    console.log(DATA_REQUEST)
}