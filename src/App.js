import React, { Component } from 'react';
import './App.css';
import {Card, CardBlock, CardTitle, Row, Col } from 'reactstrap';
import {Collapse, Button} from 'reactstrap';
import GetProducts from './WooCommerce.js';
const Allproducts = []


class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      products: [],
      orderproducts:[],
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

  let nextVal = this.state.orderproducts + 1;

      this.setState({orderproducts: [{productid, quantity}, {}] });


  }

getSelectedProduct(){
  const orders = this.getState({orderproducts})

  if(orders != null ){
    this.state.products.map(product => {product =>{
      if(product.id === order){}
    })
  }
}

  //let k=0
  for(let i=0, i<orders.length , i++){
    for (let j=0,j<products,j++){
      //for(k, k<){
      if orders[i].id === products[j].id
      return products[j]
    //}
    }
  }
}

  getState(callback) {
    this.setState((prevState) => {
      callback(prevState);
    });
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
                        <div className='productBlock'>
                            <Row>
                              <Col md={4} mdOffset={4}>
                             <div class='img'>
                              <img src={product.images[0].src} width='300px' alt='productImg' />
                            </div>
                          </Col>
                          </Row>
                            <CardBlock>
                            <div>
                              <span className='price'>  Price: ${product.price} </span> &nbsp;&nbsp;&nbsp;&nbsp;
                              <span>
                                <Button color='secondary' onClick={this.handleClick.bind(this)}> Buy </Button>
                              </span>
                            </div>
                            </CardBlock>
                        </div>
                </card>)  })
    }

    render() {

      return ( <div className = "App">
                   <div className = "App-header">

                        <div className = 'shopcart'>
                          <Button className = 'shopcart' color = "primary"
                                onClick = { this.toggle }
                                style = {{ marginBottom: '1rem'}}> Shop Cart
                           </Button>

                           <Collapse isOpen = {this.state.collapse}>
                              <Card className='card'>
                                  <CardBlock className = 'cardblock'>


                                    {this.getSelectedProduct()}

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
