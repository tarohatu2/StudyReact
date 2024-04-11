import { setRecoil } from 'recoil-nexus' 
import { trafficState } from './TrafficState'
export const trafficStateModule = {
    increment: () => setRecoil(trafficState, (pre) => pre + 1), 
    decrement: () => setRecoil(trafficState, (pre => pre - 1))
}