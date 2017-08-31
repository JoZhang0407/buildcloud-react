import React, {
  Component
}
from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle, Row, Col
}
from 'reactstrap';
import {
  Collapse, Button
}
from 'reactstrap';
import GetProducts from './WooCommerce.js';
import { Badge } from 'reactstrap';
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

    GetProducts().then(products => {this.setState({products: products})
      }
    )

    return this.state.products.map(product => {
        return (<card key = {product.id} className='card1'>
                            <CardBlock className='title'>
                                  <CardTitle>
                                      {product.name}
                                  </CardTitle>
                            </CardBlock>
                            <Row>
                              <Col md={4} mdOffset={4}>
                             <div class='img'>
                              <img src={product.images[0].src} width='300px'/>
                            </div>
                          </Col>
                          </Row>
                            <CardBlock>
                              <div>
                              Price: ${product.price}
                              <Button color='secondary' onClick={this.handleClick}> Buy </Button>
                              </div>
                            </CardBlock>
                </card>)  })
    }

    render() {

      return ( <div className = "App">
                   <div className = "App-header">

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
