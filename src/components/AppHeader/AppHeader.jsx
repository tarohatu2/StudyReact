import { React } from 'react'
import PropTypes from 'prop-types'
import style from './AppHeader.module.css'

export const AppHeader = (props) => {
    return (
        <header>
            <div className={style.hwrapper}>
                <div className={style.header}>
                    <h2>{props.title}</h2>
                </div>
            </div>
        </header>
    )
}

AppHeader.propTypes = {
    title: PropTypes.string.isRequired
}