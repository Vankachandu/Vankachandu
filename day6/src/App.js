import React, { Component } from 'react'
import App1 from './App1'
import Change from './Change'
import Employee from './Employee'
import Props from './Props'


class App extends Component {
  state={
    title: 'chandu',
    age: 66,
  }


  render() {
    return (
      <div>
        <div>
          <App1 title  ="C " />
          <App1 title  ="C++  "/>
          <App1 title  ="  JAVA   "/>
          <App1 title  ="  PYTHON  "/>
        </div> 
        <div>
         <Change/>
          </div> 
          <div>
            
          <Employee name='chandu ' salary={50000}/>
        <Employee name='raj kamal ' salary={70000}/>
       

            </div> 

            <Props title={this.state.title}/>
           
 
      </div>

    )
  }
}

export default App