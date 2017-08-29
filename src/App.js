import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import { Collapse, Button} from 'reactstrap';
import GetProducts from './WooCommerce.js';

 // var prod = GetProducts()
class App extends Component {
  constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
    }

    toggle() {
      this.setState({ collapse: !this.state.collapse });
    }
 

    renderList(){
      // return '<li>'+GetProducts.name+'<li>'
      // if(prod
       // !=null){
       //  return  
      
   return GetProducts.getProductsByCategory().then(products => {
               if(products!=null){ 
                 return ( <li> hello </li> )
             }
          })
     
      
  }

  render() {
  return (

    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>

        <div className='shopcart'>
          <Button className='shopcart' color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card>
                  <CardBlock className='cardblock'>
                  Anim pariatur cliche reprehenderit,
                   enim eiusmod high life accusamus terry richardson ad squid. Nihil
                   anim keffiyeh helvetica, craft beer labore wes anderson cred
                   nesciunt sapiente ea proident.
                  </CardBlock>
              </Card>
            </Collapse>
        </div>
      </div>
      <div>  
        <ul>
        {this.renderList()}
        </ul>
      </div>
    </div> 
    )}
}

export default App;
