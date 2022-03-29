import React, { Component } from 'react'
import './App.css'

 class reviews extends Component {
     state={
       
submit:false,

      
         reviews:[
            {
              id: 1,
              name: 'chandu',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
            },
            {
              id: 2,
              name: 'Hester Hogan',
              age: 32,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
            },
            {
              id: 3,
              name: 'Larry Little',
              age: 36,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            },
            {
              id: 4,
              name: 'Sean Walsh',
              age: 34,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            },
            {
              id: 5,
              name: '',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            },
          ]
          
     }
     
       handleReset =(e) =>{
         this.setState({submit: true})
         this.setState({ id:'',name:'',age:'',image:''})
       } 
        
  render() {
    return (
      
      <div class="p-3 mb-2 bg-primary text-white">
      <div class="card">
    {!this.state.submit &&(

  
      
      <div>{this.state.reviews.length} Birthday Today
      {this.state.reviews.map(review=><div key={review.id}><img src={review.
        image} class="rounded-circle"  width="100" height="100"/>

          <div >
            <div>{review.name} {review.age} years</div>
             </div>
       </div>)}
      
                <button  onClick={this.handleReset}>CLEAR</button>
                
        </div>)}  
        {this.state.submit &&(
          <div>
            <label>THERE IS NO BIRTHDAY TODAY CHANDU</label>
            </div>
        )}   
      </div>
     </div>
     
  
    )
  }
}

export default reviews;