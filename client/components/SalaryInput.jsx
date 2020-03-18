import React, { Component } from 'react'

class SalaryInput extends Component {

    state = {
        
    }

    handleChange = (e) => {
        this.props.onSalaryChange(e.target.value)
    }

    render () {
        const salary = this.props.salary

        return(
        <input  value={salary}
                onChange={this.handleChange}></input>
        )
    }
}

export default SalaryInput