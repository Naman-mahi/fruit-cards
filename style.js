// Basic react exercise 

class Card extends React.Component{
  state = {cantidad:0}
  constructor(){
    super();
    this.state = {
      cantidad: 0
    }
  }
  
  add= ()=>this.setState({cantidad: ++this.state.cantidad});
  
  del= ()=>this.setState({cantidad: --this.state.cantidad});
  
  reset = () => this.setState({cantidad: 0}); 
  
  render(){
    const {emote, name, price} = this.props, /*destructuring*/
    cantidad = this.state.cantidad,
    total = price * cantidad;
    return(
      <div className="Card" style={this.style}>
        <span className="icon">{emote}</span> 
        <h2 style={{"color":rColor()}}>{name}</h2>

        <h2>{cantidad}<span>{cantidad>0 && ` ${total}$`}</span></h2>

        <button onClick={this.add}>+</button>
        <button onClick={this.state.cantidad>0? this.del:null}>-</button>
        <button onClick={this.reset}>x</button>
        
      </div>
    );
  }
}

// componente funcional
function Products (props){
  return(
    <div>
      {props.products.map(
        (product) =>
          <Card {...product /*spread*/}/>
      )}      
    </div>
  );
}

//componete de clase
class App extends React.Component {
  //la "api" 
  products =[
    {"emote": "ð","name": "Manzana","price": "6"},
    {"emote": "ð","name": "Pera","price": "4"},
    {"emote": "ð","name": "Durazno","price": "3"},
    {"emote": "ð","name": "Naranja","price": "2"},
    {"emote": "ð","name": "PiÃ±a","price": "10"},
    {"emote": "ð","name": "Fresa","price": "8"}
  ]
  render = () => <Products products = {this.products}/>;
}



ReactDOM.render(<App/>,document.querySelector("#root"));




//* otros *//
function rColor(){
  let r = (Math.random()*150+60).toFixed();
  let g = (Math.random()*150+30).toFixed();
  let b = (Math.random()*150).toFixed();
  return `rgb(${r},${g},${b})`;
}