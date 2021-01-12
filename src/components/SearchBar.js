import React, { Component } from 'react'

export default class SearchBar extends Component {
   state = { term: ''}

 onFormSubmit = (e) => {
    e.preventDefault()
    
    this.props.onSubmit(this.state.term)
 }
    render() {
        return (
            <div className="ui segment" >
                <form onSubmit={this.onFormSubmit} className="ui form"  action="">
                    <div className="field" >
                        <label htmlFor="">Image search</label>
                    <input value={this.state.term} onChange={(e) => this.setState( {term: e.target.value })}  type="text" name="" id=""/>
                  
                    </div>

                </form>
            </div>
        )
    }
}
