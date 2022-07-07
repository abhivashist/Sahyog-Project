import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state ={
            firstname:'',
            middlename:'',
            lastname:'',
            suggestions:''
        }
        this.changefirstname = this.changefirstname.bind(this)
        this.changemiddlename = this.changemiddlename.bind(this)
        this.changelastname = this.changelastname.bind(this)
        this.changesuggestions = this.changesuggestions.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changefirstname(event){
        this.setState({
            firstname:event.target.value
        })
    }
    changemiddlename(event){
        this.setState({
            middlename:event.target.value
        })
    }
    changelastname(event){
        this.setState({
            lastname:event.target.value
        })
    }
    changesuggestions(event){
        this.setState({
            suggestions:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()

        const registered = {
            firstname: this.state.firstname,
            middlename: this.state.middlename,
            lastname: this.state.lastname,
            suggestions: this.state.suggestions
        }
        axios.post('http://localhost:4000/app/signup', registered)
          .then(response => console.log(response.data))

             this.setState({
                 firstname:'',
                 middlename:'',
                 lastname:'',
                 suggestions:''
             })
       
// window.location='./home'

    }
    render() {
        return ( 
            <div>
                  <div className='container'>
                      <div className='form-div'>
                          <form onSubmit={this.onSubmit}>
                          <input
                              type="text"  
                              placeholder='first Name'
                              onChange={this.changefirstname}
                              value={this.state.firstname}
                              className='form-control form-group'
                              />

                              <input type='text'
                              placeholder='middlename'
                              onChange={this.changemiddlename}
                              value={this.state.middlename}
                              className='form-control form-group'
                              />

                              <input type='text'
                              placeholder='lastname'
                              onChange={this.changelastname}
                              value={this.state.lastname}
                              className='form-control form-group'
                              />


                              <input type='text'
                              placeholder='suggestions'
                              onChange={this.changesuggestions}
                              value={this.state.suggestions}
                              className='form-control form-group'
                              />

                              <input type='submit' className='btn btn-danger btn-block' value='submit' />
                          </form>
                      </div>
                  </div>
            </div>
        );
    }
}

export default App;
