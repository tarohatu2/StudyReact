import { setRecoil } from 'recoil-nexus' 
import { pagingState } from './PagingState'
export const pagingStateModule = {
    increment: () => setRecoil(pagingState, (pre) => pre + 1), 
    decrement: () => setRecoil(pagingState, (pre => pre - 1))
}