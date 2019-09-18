import React, { Component } from 'react'
import NavBar from './Components/Layouts/NavBar'
import CoursesList from './Components/Layouts/CoursesList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CoursesList />
      </div>
    )
  }
}

export default App