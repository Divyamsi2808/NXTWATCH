import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {RiMenuAddLine} from 'react-icons/ri'
import {BiLike, BiDislike} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import ReactPlayer from 'react-player'
import Header from '../Header'
import NxtWatchAppContext from '../../NxtWatchAppContext'
import SideBar from '../SideBar'

import {
  BackgroundContainer,
  ContentContainer,
  VideoContainer,
  VideoContentContainer,
  OtherCaseContainer,
  OtherCaseImage,
  OtherCaseHeading,
  OtherCasePara,
  OtherCaseButton,
  LoaderContainer,
  TitleText,
  VideoInfoContainer,
  VideoLikeViewsContainer,
  VideoInfoPara,
  VideoIconsContainer,
  VideoIconitem,
  LikeVideoIconButton,
  DislikeVideoIconButton,
  SaveVideoIconButton,
  ChannelInfoContainer,
  ChannelLogo,
  ChannelInfoContent,
  ChannelName,
  ChannelSubscribers,
  VideoDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoRoute extends Component {
  state = {
    videoObj: {},
    fetchStatus: apiStatusConstants.initial,
    isLike: false,
    isDislike: false,
  }

  componentDidMount() {
    this.getVideoObj()
  }

  getVideoObj = async () => {
    this.setState({fetchStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const data = await fetch(url, options)

    if (data.ok) {
      const jsonData = await data.json()
      const videoDetails = jsonData.video_details
      const modifiedObj = {
        id: videoDetails.id,
        channel: {
          name: videoDetails.channel.name,
          profileImgUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        description: videoDetails.description,
        videoUrl: videoDetails.video_url,

        title: videoDetails.title,
        thumbnailUrl: videoDetails.thumbnail_url,
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
      }
      this.setState({
        fetchStatus: apiStatusConstants.success,
        videoObj: {...modifiedObj},
      })
    } else {
      this.setState({
        fetchStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeLikeStatus = () => this.setState({isLike: true, isDislike: false})

  onChangeDislikeStatus = () => this.setState({isLike: false, isDislike: true})

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
              <br />
              Please try again.
            </OtherCasePara>
            <OtherCaseButton type="button" onClick={this.getVideoObj}>
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

  renderSuccessView = () => {
    const {videoObj, isLike, isDislike} = this.state
    const {
      id,
      videoUrl,
      thumbnailUrl,
      viewCount,
      title,
      channel = {},
      description,
      publishedAt,
    } = videoObj

    let postedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = postedAt.split(' ')

    if (postedAtList.length === 3) {
      postedAtList.shift()
      postedAt = postedAtList.join(' ')
    }
    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {isDarkMode, savedVideosList, onEditSavedVideosList} = value

          const isSave = savedVideosList.some(eachObj => eachObj.id === id)

          const onClickSaveButton = () => {
            onEditSavedVideosList({
              id,
              viewCount,
              title,
              channel,
              publishedAt,
              thumbnailUrl,
            })
          }

          return (
            <VideoContainer isDarkMode={isDarkMode}>
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="400px"
                controls
              />
              <VideoContentContainer>
                <TitleText isDarkMode={isDarkMode}>{title}</TitleText>
                <VideoInfoContainer isDarkMode={isDarkMode}>
                  <VideoLikeViewsContainer isDarkMode={isDarkMode}>
                    <VideoInfoPara>{viewCount} views</VideoInfoPara>
                    <BsDot />
                    <VideoInfoPara>{postedAt} ago</VideoInfoPara>
                  </VideoLikeViewsContainer>
                  <VideoIconsContainer>
                    <VideoIconitem>
                      <LikeVideoIconButton
                        type="button"
                        isDarkMode={isDarkMode}
                        onClick={this.onChangeLikeStatus}
                        isLike={isLike}
                      >
                        <BiLike /> Like
                      </LikeVideoIconButton>
                    </VideoIconitem>
                    <VideoIconitem>
                      <DislikeVideoIconButton
                        type="button"
                        isDarkMode={isDarkMode}
                        onClick={this.onChangeDislikeStatus}
                        isDislike={isDislike}
                      >
                        <BiDislike /> Dislike
                      </DislikeVideoIconButton>
                    </VideoIconitem>

                    <VideoIconitem>
                      <SaveVideoIconButton
                        type="button"
                        isDarkMode={isDarkMode}
                        isSave={isSave}
                        onClick={onClickSaveButton}
                      >
                        <RiMenuAddLine /> {isSave ? 'Saved' : 'Save'}
                      </SaveVideoIconButton>
                    </VideoIconitem>
                  </VideoIconsContainer>
                </VideoInfoContainer>
                <hr />
                <ChannelInfoContainer>
                  <ChannelLogo src={channel.profileImgUrl} alt="channel logo" />
                  <ChannelInfoContent>
                    <ChannelName isDarkMode={isDarkMode}>
                      {channel.name}
                    </ChannelName>
                    <ChannelSubscribers isDarkMode={isDarkMode}>
                      {channel.subscriberCount} subscribers
                    </ChannelSubscribers>
                    <VideoDescription isDarkMode={isDarkMode}>
                      {description}
                    </VideoDescription>
                  </ChannelInfoContent>
                </ChannelInfoContainer>
              </VideoContentContainer>
            </VideoContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
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
            <BackgroundContainer
              isDarkMode={isDarkMode}
              data-testid="videoItemDetails"
            >
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

export default VideoRoute
