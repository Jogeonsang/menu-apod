import { all, fork}  from 'redux-saga/effects';

import apodRoot from '../src/api/apod';

export default function* root(){
    yield all([
        apodRoot()
    ]);
}