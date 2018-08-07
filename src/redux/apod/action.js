
export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
// 액션 생성 함수


export const dataRequest = (date) => ({
    type : DATA_REQUEST,
    date
})

export const dataSuccess =(data) =>({
    type : DATA_SUCCESS,
    data
})