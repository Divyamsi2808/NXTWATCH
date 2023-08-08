import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import {GrFormClose} from 'react-icons/gr'
import {BsSearch, BsDot} from 'react-icons/bs'
import Header from '../Header'
import NxtWatchAppContext from '../../NxtWatchAppContext'
import SideBar from '../SideBar'

import {
  BackgroundContainer,
  ContentContainer,
  VideosSectionContainer,
  BannerSectionContainer,
  BannerLogo,
  BannerText,
  BannerButtonElement,
  BannerCloseButton,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  AllVideosContainer,
  LinkElement,
  VideoSection,
  VideoContainer,
  VideoThumbnail,
  VideoContentContainer,
  ChannelLogo,
  VideoContent,
  ChannelName,
  TitleText,
  VideoInfoContainer,
  VideoInfoPara,
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

class HomeRoute extends Component {
  state = {
    isBannerActive: true,
    searchInput: '',
    searchQuery: '',
    allVideosObjList: [],
    fetchStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({fetchStatus: apiStatusConstants.inProgress})
    const {searchQuery} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchQuery}`

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

  onCloseBanner = () => this.setState({isBannerActive: false})

  renderBannerSection = () => {
    const {isBannerActive} = this.state
    return (
      <>
        {isBannerActive && (
          <BannerSectionContainer data-testid="banner">
            <BannerCloseButton
              type="button"
              onClick={this.onCloseBanner}
              data-testid="close"
            >
              <GrFormClose />
            </BannerCloseButton>
            <BannerLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <BannerText>
              Buy Nxt Watch Premium prepaid plans with UPI
            </BannerText>
            <BannerButtonElement type="button">GET IT NOW</BannerButtonElement>
          </BannerSectionContainer>
        )}
      </>
    )
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchQuery: searchInput}, this.getData)
  }

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  renderSearchInputSection = () => {
    const {searchInput} = this.state

    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <SearchInputContainer isDarkMode={isDarkMode}>
              <SearchInput
                type="search"
                isDarkMode={isDarkMode}
                onChange={this.onChangeSearchInput}
                value={searchInput}
                placeholder="Search"
              />
              <SearchButton
                type="button"
                isDarkMode={isDarkMode}
                onClick={this.onClickSearchButton}
                data-testid="searchButton"
              >
                <BsSearch />
              </SearchButton>
            </SearchInputContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }

  renderNoSearchResultView = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <OtherCaseContainer isDarkMode={isDarkMode}>
            <OtherCaseImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <OtherCaseHeading isDarkMode={isDarkMode}>
              No Search results found
            </OtherCaseHeading>
            <OtherCasePara isDarkMode={isDarkMode}>
              Try different key words or remove search filter
            </OtherCasePara>
            <OtherCaseButton type="button" onClick={this.getData}>
              Retry
            </OtherCaseButton>
          </OtherCaseContainer>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  renderAllVideos = () => {
    const {allVideosObjList} = this.state
    if (allVideosObjList.length === 0) {
      return <>{this.renderNoSearchResultView()}</>
    }

    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <AllVideosContainer>
              {allVideosObjList.map(eachObj => {
                const {
                  channel,
                  title,
                  viewCount,
                  thumbnailUrl,
                  publishedAt,
                } = eachObj

                let postedAt = formatDistanceToNow(new Date(publishedAt))

                const postedAtList = postedAt.split(' ')

                if (postedAtList.length === 3) {
                  postedAtList.shift()
                  postedAt = postedAtList.join(' ')
                }

                return (
                  <LinkElement
                    to={`/videos/${eachObj.id}`}
                    style={{textDecoration: 'none'}}
                    key={eachObj.id}
                  >
                    <VideoContainer isDarkMode={isDarkMode}>
                      <VideoThumbnail
                        src={thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <VideoContentContainer isDarkMode={isDarkMode}>
                        <ChannelLogo
                          src={channel.profileImgUrl}
                          alt="channel logo"
                        />
                        <VideoContent>
                          <TitleText isDarkMode={isDarkMode}>{title}</TitleText>
                          <ChannelName isDarkMode={isDarkMode}>
                            {channel.name}
                          </ChannelName>
                          <VideoInfoContainer>
                            <VideoInfoPara>{viewCount} views</VideoInfoPara>
                            <BsDot />
                            <VideoInfoPara>{postedAt} ago</VideoInfoPara>
                          </VideoInfoContainer>
                        </VideoContent>
                      </VideoContentContainer>
                    </VideoContainer>
                  </LinkElement>
                )
              })}
            </AllVideosContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

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
            <OtherCaseButton type="button" onClick={this.getData}>
              Retry
            </OtherCaseButton>
          </OtherCaseContainer>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  renderAllViews = () => {
    const {fetchStatus} = this.state
    switch (fetchStatus) {
      case apiStatusConstants.success:
        return this.renderAllVideos()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderHomeRoute = () => (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkMode} = value

        return (
          <>
            <Header />
            <ContentContainer>
              <SideBar />
              <VideosSectionContainer>
                {this.renderBannerSection()}
                <VideoSection isDarkMode={isDarkMode}>
                  {this.renderSearchInputSection()}
                  {this.renderAllViews()}
                </VideoSection>
              </VideosSectionContainer>
            </ContentContainer>
          </>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )

  render() {
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <BackgroundContainer isDarkMode={isDarkMode} data-testid="home">
              {this.renderHomeRoute()}
            </BackgroundContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }
}

export default HomeRoute
