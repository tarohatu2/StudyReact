import { React } from 'react' 
import PropTypes from 'prop-types'
import style from './IconButton.module.css'
export const IconButton = ({ children, onClick }) => { 

  return (
    <button
      className={style.listiconbutton}
      onClick={onClick}
    >
      <div className={style.listicon}>
        {children}
      </div>
    </button>
  )
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}