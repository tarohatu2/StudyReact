import { React } from 'react' 
import PropTypes from 'prop-types'
import style from './LoginPage.module.css'
import { Link } from 'react-router-dom'
export const LoginPage = (props) => { 
  return (
    <div>
      ログインページ
      <Link to='/'>メインページ</Link>
    </div>
  )
}

LoginPage.propTypes = { }