
export const Actions = {
    PREV : 'PREV',
    NEXT : 'NEXT',
};

// 액션 생성 함수

export const prev = (date) => ({
    type : Actions.PREV,
    date
});

export const next = (date) => ({
    type : Actions.NEXT,
    date
});