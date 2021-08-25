// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerInfo} = props
  const {headerText, description, className} = bannerInfo
  return (
    <li className={className}>
      <div>
        <h1 className="header">{headerText}</h1>
        <p className="descript">{description}</p>
        <button className="button-item" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
