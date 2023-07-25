import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import NxtWatchAppContext from './NxtWatchAppContext'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendsRoute from './components/TrendsRoute'
import GamingVideosRoute from './components/GamingVideosRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoRoute from './components/VideoRoute'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkMode: false, activeTab: 'Home', savedVideosList: []}

  onEditSavedVideosList = object => {
    const {savedVideosList} = this.state
    const isSaved = savedVideosList.some(eachObj => eachObj.id === object.id)
    if (isSaved) {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          eachObj => eachObj.id !== object.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: [object, ...prevState.savedVideosList],
      }))
    }
  }

  onChangeDarkMode = () =>
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))

  onClickTab = id => this.setState({activeTab: id}, this.renderTabOptions)

  render() {
    const {isDarkMode, activeTab, savedVideosList} = this.state
    return (
      <NxtWatchAppContext.Provider
        value={{
          isDarkMode,
          onChangeDarkMode: this.onChangeDarkMode,
          onClickTab: this.onClickTab,
          activeTab,
          onEditSavedVideosList: this.onEditSavedVideosList,
          savedVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendsRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingVideosRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute exact path="/videos/:id" component={VideoRoute} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchAppContext.Provider>
    )
  }
}

export default App
