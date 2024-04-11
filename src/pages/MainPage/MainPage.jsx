import { React, Suspense } from 'react' 
import PropTypes from 'prop-types' 
import style from './MainPage.module.css' 

import { pagingState  } from '../../recoil/paging'
import { trafficAPIRequest } from '../../recoil/traffic'
import { useRecoilState, useRecoilValue } from "recoil"

const TrafficInfo = () => {
  const traffic = useRecoilValue(trafficAPIRequest)
  return <div>{JSON.stringify(traffic.body)}</div>
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