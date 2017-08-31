import React, {
  Component
}
from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle
}
from 'reactstrap';
import {
  Collapse, Button
}
from 'reactstrap';
import GetProducts from './WooCommerce.js';

const Allproducts = []


class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      products: [],
      orderproducts:[]

    };
  }

  Allproducts = []

  toggle() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  handleClick() {
  this.setState({orderproducts:[]})
  }



  renderList() {

    GetProducts().then(
      products => {
        this.setState({
          products: products
        })
      }
    )

    return this.state.products.map(product => {
        return (<card className='card1'>
                            <CardBlock>
                                  <CardTitle key = {product.id}>
 {product.name}
                                  </CardTitle>
                            </CardBlock>
                              <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card" />
                            <CardBlock>
                              <div>
                              <Button color='secondary' onClick={this.handleClick}> Buy </Button>
                              </div>
                            </CardBlock>
                        </card>)  })
    }

    render() {

      return ( <div className = "App">
                   <div className = "App-header">
                    <img src = { logo } className = "App-logo" alt = "logo" />
                      <h2> Welcome to React </h2>
                        <div className = 'shopcart'>
                          <Button className = 'shopcart' color = "primary"
                                onClick = { this.toggle }
                                style = {{ marginBottom: '1rem'}}> Toggle
                           </Button>

                           <Collapse isOpen = {this.state.collapse}>
                              <Card className='card'>
                                  <CardBlock className = 'cardblock'>Hello
                                  </CardBlock>
                              </Card>
                          </Collapse>
                        </div>
                   </div>


                  <div>
      {this.renderList()}
                  </div>

              </div>
              )
            }
          }

export default App;
