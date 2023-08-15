import './index.css'

const ThumbnailItem = props => {
  const {eachDetails, getImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachDetails

  const thumbnailBtn = () => {
    getImageId(id)
  }
  const activeBtn = isActive ? 'active-thumbnail' : ''
  return (
    <li>
      <button type="button" className="image-btn" onClick={thumbnailBtn}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${activeBtn}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
