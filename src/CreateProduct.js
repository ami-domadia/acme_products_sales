import React, {Component} from 'react'

export default class CreateProduct extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      price: 0,
      discount: 0,
      availability: ''
    }
    
    this.handleSubmit=this.handleSubmit.bind(this)
    this.onHandleChange=this.onHandleChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state)
    this.props.func(this.state)
    // axios.post('/api/products', {taskName: this.state.taskName, 
    //                             assignee: this.state.assignee})
    // .then((res)=>{this.props.func(this.state)})
    // .then(()=>console.log('successfull post'))
    // .catch((err)=>console.log(err))
  }

  onHandleChange(event){
    event.preventDefault()
    console.log(event)
    this.setState({[event.target.name]: event.target.value})
    console.log('on submit',this.state)
  }

  render (func) {
    return (
      <div>
      <form  onSubmit={this.handleSubmit}>
        <div>
        <label htmlFor='name'>Name</label>
        <input className="form-control"
          name='name' type='text'
          value={this.state.name}
          onChange={this.onHandleChange}
        />
        </div>
        <div>
        <label htmlFor='price'>Price</label>
        <input className="form-control"
          name='price' type='text' 
          value={this.state.price}
          onChange={this.onHandleChange}
        />
        </div>
        <div>
        <label htmlFor='discount'>Discount Percentage</label>
        <input className="form-control"
          name='discount' type='text' 
          value={this.state.discount}
          onChange={this.onHandleChange}
        />
        </div>
        <div>
        <label htmlFor='availability'>Availability</label>
        <select className="form-control"
            value={this.state.availability} onChange={this.onHandleChange}>
            <option value="instock">instock</option>
            <option value="backordered">backordered</option>
            <option value="discontinued">discontinued</option>
        </select>
        </div>
        <br/>
        <button className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}
