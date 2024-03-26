import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BgCont, Heading, UlCont, LoaderCont} from './styledComponents'
import TravelGuideItem from '../TravelGuideItem'

class TravelGuide extends Component {
  state = {guideList: [], isLoading: false}

  componentDidMount() {
    this.getGuideList()
  }

  onSuccessFullResponse = guideList => {
    this.setState({guideList, isLoading: false})
  }

  getGuideList = async () => {
    this.setState({isLoading: true})

    const url = 'https://apis.ccbp.in/tg/packages'

    const response = await fetch(url)
    const data = await response.json()

    if (response.ok === true) {
      const formatedGuideList = data.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.image_url,
        description: eachItem.description,
      }))
      this.onSuccessFullResponse(formatedGuideList)
    }
  }

  renderLoadingView = () => (
    <LoaderCont data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </LoaderCont>
  )

  render() {
    const {guideList, isLoading} = this.state

    return (
      <BgCont>
        <Heading>Travel Guide</Heading>
        {isLoading ? (
          this.renderLoadingView()
        ) : (
          <UlCont>
            {guideList.map(eachItem => (
              <TravelGuideItem travelDetails={eachItem} key={eachItem.id} />
            ))}
          </UlCont>
        )}
      </BgCont>
    )
  }
}

export default TravelGuide
