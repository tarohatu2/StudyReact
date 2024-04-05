import { React } from 'react' 
import PropTypes from 'prop-types'
import style from './PhotoGridView.module.css'

export const PhotoGridView = (props) => { 
  const photos = props.photos ?? []

  const cells = photos.map((photo, i) => {
    const { imageUrl, title, alt } = photo 
    return (
      <div key={'photo-' + i} className={style.gridItem}>
        <img src={imageUrl} title={title} alt={alt} className={style.image}/>
      </div>
    )
  });

  return (
    <div className={style.grid}>
      {cells}
    </div>
  );
}

PhotoGridView.propTypes = {
  photos: PropTypes.array.isRequired
}