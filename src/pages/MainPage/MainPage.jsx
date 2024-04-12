import { React, Suspense } from 'react' 
import PropTypes from 'prop-types' 
import style from './MainPage.module.css' 

import { pagingState  } from '../../recoil/paging'
import { trafficAPIRequest } from '../../recoil/traffic'
import { useRecoilState, useRecoilValue } from "recoil"

import { TrafficInfoTable } from '../../components/TrafficInfoTable'

const TrafficInfo = () => {
  const traffic = useRecoilValue(trafficAPIRequest)
  const area = traffic.body.area04
  const info = area.trafficInfo.jam?.info ?? []
  return <TrafficInfoTable info={info} />
}

export const MainPage = (props) => { 
  const [page] = useRecoilState(pagingState)

  return (
    <div className={style.container}>
      main{page}
      <Suspense fallback="検索中...">
        <TrafficInfo />
      </Suspense>
    </div>
  )
}

MainPage.propTypes = { }