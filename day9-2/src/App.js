import React, { Component } from 'react'; 
import './App.css' 
import App1 from './App1.js' 
 
class App extends Component { 
    state = { 
        datas: [ 
            { 
                id: 1, 
                title: 'Do I have to allow the use of cookies?', 
                info: 
                    'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.', 
 
            }, 
            { 
                id: 2, 
                title: 'How do I change my My Page password?', 
                info: 
                    'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.', 
 
            }, 
            { 
                id: 3, 
                title: 'What is BankID?', 
                info: 
                    'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.', 
 
            }, 
            { 
                id: 4, 
                title: 'Whose birth number can I use?', 
                info: 
                    'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.', 
 
            }, 
            { 
                id: 5, 
                title: 'When do I recieve a password ordered by letter?', 
                info: 
                    'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ', 
 
            }, 
        ] 
 
    } 
    onButton = () => { 
        this.setState({ show: true }); 
    }; 
    render() { 
        return ( 
            <div className='move'>
 
            <div class="box"> 
 
                <div class="row"> 
                    <div class="col"><h2>Question and Answers <br /> about Login</h2></div> 
 
                    <div class="col1">{this.state.datas.map(data => <div class="felx">&nbsp;&nbsp;&nbsp;<App1 title={data.title} info={data.info} /></div> 
                    )} 
 
                    </div> 
 
 
                </div> 
 
            </div> 
            </div>
 
        ) 
 
    } 
 
} 
export default App;