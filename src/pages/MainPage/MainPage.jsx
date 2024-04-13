import { React, Suspense } from 'react' 
import PropTypes from 'prop-types' 
import style from './MainPage.module.css' 

import { trafficAPIRequest, trafficAreaState, trafficJamInfo } from '../../recoil/traffic'
import { useRecoilState, useRecoilValue } from "recoil"

import { TrafficInfoTable } from '../../components/TrafficInfoTable'

const TrafficInfo = () => {
  const info = useRecoilValue(trafficJamInfo)
  return <TrafficInfoTable info={info} />
}

export const MainPage = (props) => { 
  const [area] = useRecoilState(trafficAreaState)

  return (
    <div className={style.container}>
      {area}
      <Suspense fallback="検索中...">
        <TrafficInfo />
      </Suspense>
    </div>
  )
}

MainPage.propTypes = { }