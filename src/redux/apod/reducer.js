import { Actions } from './action';
import { moment } from 'moment';

const {
    PREV,
    NEXT
} = Actions;

// 초기 상태
const initialState = {
    loading : false,
    maxDate : null,
    date : null,
    urL : null,
    mediaType : null
}
const apod = (state = initialState,action) => {
    // 래퍼런스 생성
    const { date, prevDate,nextDate,maxDate } = state;

    switch (action.type) {
        case PREV:
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
                    
                }
        default:
           return state;
    }
}

export default apod