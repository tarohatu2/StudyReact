import { React } from 'react' 
import PropTypes from 'prop-types'
import style from './IconButton.module.css'
export const IconButton = ({ children }) => { 

  return (
    <button className={style.listiconbutton}>
      <div className={style.listicon}>
        {children}
      </div>
    </button>
  )
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired
}