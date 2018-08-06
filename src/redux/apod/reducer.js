
import { moment } from 'moment';

import {
    PREV,
    NEXT,
    DATA
} from './action';

// 초기 상태
const initialState = {
    loading : false,
    maxDate : null,
    date : null,
    urL : null,
}
const apod = (state = initialState,action) => {
    // 래퍼런스 생성

    switch (action.type) {
        /*case PREV:
        console.log(prevDate)
            return {
                    prevDate : moment(date).subtract(1, 'days').format('YYYY-MM-DD')
                    
            }
        case NEXT:
        console.log(nextDate)
            if(date === maxDate)
            return {
                ...state,
                nextDate : moment(date).add(1, 'days').format('YYYY-MM-DD')
                    
                } */
        case DATA:
            return {
                state : {
                date : DATA
                }
            }
        default:
           return state;
    }
}

export default apod