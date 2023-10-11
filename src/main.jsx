import React from 'react'
import ReactDOM from 'react-dom/client'
import PhotosApp from './components/PhotosApp'
import { Provider } from 'react-redux'
import { store } from './store/store'
import "./assets/css/styles.css"

ReactDOM.createRoot(document.getElementById('oot')).render(
  <>
    <Provider store={store}>
      <PhotosApp />
    </Provider>

  </>)
