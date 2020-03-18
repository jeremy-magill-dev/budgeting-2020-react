import React from 'react'

import SalaryInput from './SalaryInput'

class BudgettingForm extends React.Component {
    state = {
        salary: ""
    }

    handleSalaryChange = (salary) => {
        this.setState({
            salary
        })
    }

    render () {
        const salary = this.state.salary    

        return (
            <SalaryInput 
            salary={salary}
            onSalaryChange={this.handleSalaryChange} />
        )
    }
}

export default BudgettingForm