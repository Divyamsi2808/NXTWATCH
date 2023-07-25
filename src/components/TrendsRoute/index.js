import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFireAlt} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NxtWatchAppContext from '../../NxtWatchAppContext'
import SideBar from '../SideBar'
import TabBannerSection from '../TabBannerSection'
import TabVideoCardItem from '../TabVideoCardItem'

import {
  BackgroundContainer,
  ContentContainer,
  SuccessViewContainer,
  AllVideosContainer,
  OtherCaseContainer,
  OtherCaseImage,
  OtherCaseHeading,
  OtherCasePara,
  OtherCaseButton,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendsRoute extends Component {
  state = {
    allVideosObjList: [],
    fetchStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAllVideosList()
  }

  getAllVideosList = async () => {
    this.setState({fetchStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const data = await fetch(url, options)

    if (data.ok) {
      const jsonData = await data.json()
      const modifiedList = jsonData.videos.map(eachObj => ({
        id: eachObj.id,
        channel: {
          name: eachObj.channel.name,
          profileImgUrl: eachObj.channel.profile_image_url,
        },
        title: eachObj.title,
        thumbnailUrl: eachObj.thumbnail_url,
        viewCount: eachObj.view_count,
        publishedAt: eachObj.published_at,
      }))
      this.setState({
        allVideosObjList: [...modifiedList],
        fetchStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        fetchStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const failureImage = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <OtherCaseContainer isDarkMode={isDarkMode}>
            <OtherCaseImage src={failureImage} alt="failure view" />
            <OtherCaseHeading isDarkMode={isDarkMode}>
              Oops! Something Went Wrong
            </OtherCaseHeading>
            <OtherCasePara isDarkMode={isDarkMode}>
              We are having some trouble to complete your request. Please try
              again.
            </OtherCasePara>
            <OtherCaseButton type="button" onClick={this.getAllVideosList}>
              Retry
            </OtherCaseButton>
          </OtherCaseContainer>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderAllVideos = () => {
    const {allVideosObjList} = this.state

    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <AllVideosContainer isDarkMode={isDarkMode}>
              {allVideosObjList.map(eachObj => (
                <TabVideoCardItem key={eachObj.id} videoObj={eachObj} />
              ))}
            </AllVideosContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }

  renderSuccessView = () => {
    const bannerObj = {
      name: 'Trending',
      icon: <FaFireAlt />,
    }
    return (
      <>
        <SuccessViewContainer>
          <TabBannerSection bannerObj={bannerObj} />
          {this.renderAllVideos()}
        </SuccessViewContainer>
      </>
    )
  }

  renderAllViews = () => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <BackgroundContainer isDarkMode={isDarkMode} data-testid="trending">
              <Header />
              <ContentContainer>
                <SideBar />
                {this.renderAllViews()}
              </ContentContainer>
            </BackgroundContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default TrendsRoute
