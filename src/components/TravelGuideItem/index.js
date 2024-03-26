import {CardCont, Img, Para} from './styledComponents'

const TravelGuideItem = props => {
  const {travelDetails} = props
  const {id, name, imageUrl, description} = travelDetails

  return (
    <CardCont>
      <Img src={imageUrl} alt={name} />
      <Para>{name}</Para>
      <Para as="p" desc>
        {description}
      </Para>
    </CardCont>
  )
}

export default TravelGuideItem
