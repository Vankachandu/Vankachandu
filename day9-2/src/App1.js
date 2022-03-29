import React,{Component} from 'react' 
import './App.css' 
class App1 extends Component{ 
    state={ 
        detailInfo:false 
    } 
    handleToggle=()=>{ 
        this.setState({detailInfo:!this.state.detailInfo}) 
    } 
    render(){ 
        return( 
            <div> 
                <p class="font">{this.props.title} 
                <button class="button"onClick={this.handleToggle}>{this.state.detailInfo?'-':'+'}</button></p> 
                { 
                    this.state.detailInfo&& <div>{this.props.info}</div> 
                } 
            </div> 
        ) 
    } 
 
} 
export default App1;