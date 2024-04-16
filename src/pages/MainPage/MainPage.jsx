import { React, Suspense } from 'react' 
import PropTypes from 'prop-types' 
import style from './MainPage.module.css' 

import { trafficJamInfo, otherTrafficInfo, areaName, otherTrafficInfoParams } from '../../recoil/traffic'
import { useRecoilValue } from "recoil"
import { ErrorBoundary } from "react-error-boundary";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { IconButton } from '../../components/IconButton'

import { TrafficInfoTable } from '../../components/TrafficInfoTable'
import { trafficStateModule } from '../../recoil/traffic'

const TrafficInfo = () => {
  const info = useRecoilValue(trafficJamInfo)
  return <TrafficInfoTable caption='渋滞情報' info={info} />
}

const OtherTrafficInfo = () => {
  const info = useRecoilValue(otherTrafficInfo)
  return <TrafficInfoTable caption='その他規制' info={info} />
}

const OtherTrafficInfoParams = (areaId) => {
  const info = useRecoilValue(otherTrafficInfoParams('area01'))
  return <TrafficInfoTable caption='その他' info={info} />
}

const AreaName = () => {
  const area = useRecoilValue(areaName)
  return (
    <div className={style.areaNameContainer}>
      <IconButton onClick={trafficStateModule.decrement}>
        <MdArrowBackIos />
      </IconButton>
      <h2>{area}</h2>
      <IconButton onClick={trafficStateModule.increment}>
				<MdArrowForwardIos />
			</IconButton>
    </div>
  )

}

export const MainPage = (props) => { 
  return (
    <div className={style.container}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense fallback="">
          <AreaName />
        </Suspense>
        <Suspense fallback="検索中...">
          <div className={style.trafficInfoContainer}>
            <div className={style.trafficInfoItem}>
              <TrafficInfo />
            </div>
            <div className={style.trafficInfoItem}>
              <OtherTrafficInfo />
            </div>
            <div className={style.trafficInfoItem}>
              <OtherTrafficInfoParams />
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

MainPage.propTypes = { }