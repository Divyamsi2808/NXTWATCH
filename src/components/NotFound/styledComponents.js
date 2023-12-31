import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  flex-grow: 1;
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const SuccessViewContainer = styled.div`
  flex-grow: 1;
  height: 120vh;
  width: 100%;
  background-color: black;
  @media screen and (min-width: 768px) {
    margin-left: -8%;
  }
`

export const AllVideosContainer = styled.ul`
  list-style: none;
  margin-top: 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 30px;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#e2e8f0')};
  width: 100%;
  height: 103vh;
  overflow-y: auto;
`

export const OtherCaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`

export const OtherCaseImage = styled.img`
  width: ${props => (props.isDarkMode ? '120%' : '60%')};
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
