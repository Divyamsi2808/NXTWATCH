import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f1f1f1')};
  padding-left: 30px;
`

export const IconContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  font-size: 24px;
  color: #ff0000;
  padding-left: 18px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-top: 16px;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#e2e8f0')};
  margin-right: 20px;
`

export const BannerHeading = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#0f0f0f')};
  font-weight: 700;
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
`
export const LoaderContainer = styled.div`
  color: #4f46e5;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
