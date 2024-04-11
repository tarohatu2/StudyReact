import { React } from 'react' 
import { Link } from 'react-router-dom'
export const LoginPage = () => { 
  return (
    <div>
      ログインページ
      <Link to='/'>メインページ</Link>
    </div>
  )
}

LoginPage.propTypes = { }