import { React, Suspense } from 'react' 
import PropTypes from 'prop-types' 
import style from './MainPage.module.css' 

import { trafficAreaState, trafficJamInfo, otherTrafficInfo, areaName } from '../../recoil/traffic'
import { useRecoilState, useRecoilValue } from "recoil"

import { TrafficInfoTable } from '../../components/TrafficInfoTable'

const TrafficInfo = () => {
  const info = useRecoilValue(trafficJamInfo)
  return <TrafficInfoTable caption='渋滞情報' info={info} />
}

const OtherTrafficInfo = () => {
  const info = useRecoilValue(otherTrafficInfo)
  return <TrafficInfoTable caption='その他規制' info={info} />
}

export const MainPage = (props) => { 
  const area = useRecoilValue(areaName)
  return (
    <div className={style.container}>
      <Suspense fallback="">
        <h2>{area}</h2>
      </Suspense>
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