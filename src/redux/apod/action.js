
export const PREV = 'PREV';
export const NEXT = 'NEXT';
export const DATA = 'DATA';
// 액션 생성 함수

export const prev = (date) => ({
    type : PREV,
    date
});

export const next = (date) => ({
    type : NEXT,
    date
});

export const data = (date) => ({
    type : DATA,
    date
})