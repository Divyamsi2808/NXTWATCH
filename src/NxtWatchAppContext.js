import React from 'react'

const NxtWatchAppContext = React.createContext({
  isDarkMode: false,
  onChangeDarkMode: () => {},
  activeTab: '',
  onClickTab: () => {},
  savedVideosList: [],
  onEditSavedVideosList: () => {},
})

export default NxtWatchAppContext
