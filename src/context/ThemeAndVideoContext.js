import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  bannerDisplay: 'show',
  savedVideos: [],
  activeTab: 'Home',
  toggleTheme: () => {},
  changeTab: () => {},
  addVideo: () => {},
  showBanner: () => {},
})

export default ThemeAndVideoContext
