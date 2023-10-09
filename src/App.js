import { Route, Routes } from 'react-router-dom'
import React from 'react'
import AdminAuth from './components/AdminAuth'


class App extends React.Component {
  state = {}
  async componentDidMount() {

  }
  render() {
    return (
      <div className="overflow-hidden">
        <Routes>
 
      
          <Route path='/*' element={<AdminAuth/>}/>

        </Routes>
      </div>
    )
  }
}

export default App
