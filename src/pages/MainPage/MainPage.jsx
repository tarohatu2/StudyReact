import { React } from 'react' 
import PropTypes from 'prop-types' 
import style from './MainPage.module.css' 

import { pagingState  } from '../../recoil/paging'
import { useRecoilState } from "recoil"

export const MainPage = (props) => { 
  const [page] = useRecoilState(pagingState)
  return (
    <div className={style.container}>
      main{page}
    </div>
  )
}

MainPage.propTypes = { }