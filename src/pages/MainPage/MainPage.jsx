import { React, Suspense } from 'react' 
import PropTypes from 'prop-types' 
import style from './MainPage.module.css' 

import { trafficAreaState, trafficJamInfo, otherTrafficInfo } from '../../recoil/traffic'
import { useRecoilState, useRecoilValue } from "recoil"

import { TrafficInfoTable } from '../../components/TrafficInfoTable'

const TrafficInfo = () => {
  const info = useRecoilValue(trafficJamInfo)
  return <TrafficInfoTable info={info} />
}

const OtherTrafficInfo = () => {
  const info = useRecoilValue(otherTrafficInfo)
  return <TrafficInfoTable info={info} />
}

export const MainPage = (props) => { 
  const [area] = useRecoilState(trafficAreaState)

  return (
    <div className={style.container}>
      {area}
      <Suspense fallback="検索中...">
        <div className={style.trafficInfoContainer}>
          <div className={style.trafficInfoItem}>
            <TrafficInfo />
          </div>
          <div className={style.trafficInfoItem}>
            <OtherTrafficInfo />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

MainPage.propTypes = { }