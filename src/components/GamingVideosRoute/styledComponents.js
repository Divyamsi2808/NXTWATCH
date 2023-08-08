import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-grow: 1;
`

export const SuccessViewContainer = styled.div`
  width: 70%;
  flex-grow: 1;
  background-color: black;
`

export const AllVideosContainer = styled.ul`
  list-style: none;
  flex-grow: 1;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  padding-top: 30px;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#e2e8f0')};
  width: 100%;
  height: 103vh;
  overflow-y: auto;
  margin-top: 0px;
`

export const OtherCaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  flex-grow: 1;
`

export const OtherCaseImage = styled.img`
  width: 50%;
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
`
export const LoaderContainer = styled.div`
  color: #4f46e5;
  height: 50vh;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LinkElement = styled(Link)`
  background-color: transparent;
  width: 180px;
  margin-bottom: 20px;
  margin-left: 20px;
  border-radius: 10px;
  border: 2px solid ${props => (props.isDarkMode ? '#606060' : '#cbd5e1')};
  padding: 10px;
  @media screen and (max-width: 767px) {
    width: 40%;
  }
`

export const GamingVideoCardItem = styled.li`
  font-family: Roboto;
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 2px solid ${props => (props.isDarkMode ? '#606060' : '#cbd5e1')};
  border-radius: 10px;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#e2e8f0')};
`

export const VideoThumbnail = styled.img`
  width: 50%;
`

export const TitleText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
`

export const VideoInfoPara = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => (props.isDarkMode ? ' #94a3b8' : '#616e7c')};
`
