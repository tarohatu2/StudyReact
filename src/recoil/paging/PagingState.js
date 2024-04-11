import { atom, selector } from 'recoil'

export const pagingState = atom({
    key: 'paging',
    default: 0
});
  
export const pagingStrState = selector({
    key: 'pagingStr',
    get: ({get}) => `pagingState: ${get(pagingState)}`
});