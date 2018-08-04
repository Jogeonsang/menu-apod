import * as types from '../action/ActionTypes'

// 초기 상태
const initialState = {
    loading : false,
    maxDate : null,
    date : null,
    urL : null,
    mediaType : null
}
function space(state = initialState,action) {
    switch (action.type) {
        case types.PREV:
            return {
                ...state
            }
    }
}
export default space