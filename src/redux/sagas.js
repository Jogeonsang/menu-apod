import { all, fork}  from 'redux-saga/effects';

import apodRoot from './apod/sagas';

export default function* root(){
    yield all([
        apodRoot()
    ]);
}