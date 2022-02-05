import React from 'react'
import Loading from 'react-fullscreen-loading'

const ActivityIndicator = ({
  loading,
  background = '#ffffff',
  loaderColor = '#3498db',
}) => {
  return (
    <Loading
      loading={loading}
      background={background}
      loaderColor={loaderColor}
    />
  )
}

export default ActivityIndicator
