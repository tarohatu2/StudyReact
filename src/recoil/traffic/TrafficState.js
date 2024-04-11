import { atom, selector } from 'recoil'
import { pagingState } from '../paging'
import axios from 'axios'

export const trafficState = atom({
    key: 'traffic',
    default: 0
});
  
const trafficQueryState = selector({
    key: 'trafficQuery',
    get: ({ get }) => {
        return {
            traffic: get(trafficState),
            paging: get(pagingState)
        }
    }
});

export const trafficAPIRequest = selector({
    key: 'trafficAPIRequest',
    get: async ({ get }) => {
        const { traffic, paging } = get(trafficQueryState)
        console.log(traffic, paging)
        const result = await axios.get('https://www.c-ihighway.jp/datas/json/traffic.json')
        return { body: result.data, traffic, paging }
    }
})

