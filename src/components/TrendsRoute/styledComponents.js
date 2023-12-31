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
  background-color: black;
  width: 70%;
  flex-grow: 1;
`
export const AllVideosContainer = styled.ul`
  list-style: none;
  margin-top: 0px;
  margin-bottom: 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 30px;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#e2e8f0')};
  width: 100%;
  overflow-y: auto;
  height: 100vh;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`
