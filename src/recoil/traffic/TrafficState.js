import { atom, selector } from 'recoil'
import { pagingState } from '../paging'
import axios from 'axios'

export const trafficState = atom({
    key: 'traffic',
    default: 1
});

export const trafficAreaState = selector({
    key: 'trafficArea',
    get: ({ get }) => `area${('00' + get(trafficState)).slice(-2)}`
})
  
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

export const trafficJamInfo = selector({
    key: 'trafficJamInfo',
    get: ({ get }) => {
        const areaStr = get(trafficAreaState)
        const trafficInfo = get(trafficAPIRequest)
        const areaInfo = trafficInfo.body[areaStr]
        if (!areaInfo || !areaInfo.trafficInfo.jam) { return [] }
        let result = []
        areaInfo.trafficInfo.jam.forEach((j) => {
            j.info.forEach((value) => {
                result.push(value)
            })
        })
        return result
    }
})

export const otherTrafficInfo = selector({
    key: 'otherTrafficInfo',
    get: ({ get }) => {
        const areaStr = get(trafficAreaState)
        const trafficInfo = get(trafficAPIRequest)
        const areaInfo = trafficInfo.body[areaStr]
        if (!areaInfo || !areaInfo.otherTrafficInfo.laneRestriction) { return [] }
        let result = []
        areaInfo.otherTrafficInfo.laneRestriction.forEach((restriction) => {
            restriction.info.forEach((value) => {
                result.push(value)
            })
        })
        return result
    }
})
