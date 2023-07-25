import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`
export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
`

export const VideosSectionContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const VideoSection = styled.div`
  flex-grow: 1;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f1f1f1')};
  padding: 10px;
`

export const BannerSectionContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  box-shadow: 1px 1px 4px 4px #439793;
  margin-bottom: 10px;
`

export const BannerLogo = styled.img`
  width: 30%;
`
export const BannerText = styled.p`
  font-size: 20px;
  color: #616e7c;
  font-weight: 600;
  width: 40%;
`

export const BannerButtonElement = styled.button`
  border: 2px solid #7e858e;
  padding: 10px;
  border-radius: 6px;
  background-color: transparent;
  align-self: flex-start;
  outline: none;
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  font-size: 20px;
  border: none;
  outline: none;
  align-self: flex-end;
`

export const SearchInputContainer = styled.div`
  border: 2px solid ${props => (props.isDarkMode ? '#424242' : '#d7dfe9')};
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-top: 20px;
  width: 50%;
  margin-left: 20px;
  border-radius: 6px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 90%;
    margin-left: 0px;
    align-self: center;
  }
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  padding-left: 10px;
  padding: 5px;
  width: 85%;
  padding-right: 20px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  background-color: transparent;
`

export const SearchButton = styled.button`
  font-size: 20px;
  flex-grow: 1;
  padding: 5px;
  outline: none;
  border: none;
  border-left: 2px solid ${props => (props.isDarkMode ? '#cccccc' : '#d7dfe9')};
  background-color: ${props => (props.isDarkMode ? '#424242' : '#f1f1f1')};
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`

export const AllVideosContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 10px;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  height: 70vh;
  overflow-y: auto;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`

export const LinkElement = styled(Link)`
  width: 30%;
  margin-right: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-right: 0px;
  }
`

export const VideoContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f1f1f1')};
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoContentContainer = styled.div`
  display: flex;
  padding: 10px;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`

export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const TitleText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: -6px;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
`
export const VideoInfoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-top: -6px;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
`

export const VideoInfoPara = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
`

export const OtherCaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const OtherCaseImage = styled.img`
  width: 30%;
`
export const OtherCaseHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  font-size: 30px;
  font-weight: 600;
`

export const OtherCasePara = styled.p`
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#64748b')};
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`

export const OtherCaseButton = styled.button`
  padding: 10px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  border: none;
  outline: none;
  background-color: #3b82f6;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const LoaderContainer = styled.div`
  color: #4f46e5;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
