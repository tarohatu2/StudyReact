import { React } from 'react'
import PropTypes from 'prop-types'
import style from './AppFooter.module.css'
export const AppFooter = (props) => {
    return (
        <footer>
            <div className={style.contents}>
                フッター
            </div>
        </footer>
    )
}

AppFooter.propTypes = {

}