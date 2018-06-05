import React, { Component } from 'react'
import {Row, Input , Button} from "react-materialize";

export default class Form extends Component {

    handleFirst(e){
        this.props.handleChange.handleFirst(e.target.value)
    }

    handleLast(e){
        this.props.handleChange.handleLast(e.target.value)
    }

    handleAge(e){
        this.props.handleChange.handleAge(e.target.value)
    }

    handleEmail(e){
        this.props.handleChange.handleEmail(e.target.value)
    }

    handleDate(e){
        this.props.handleChange.handleDate(e.target.value)
    }

    handleGender(e){
        this.props.handleChange.handleGender(e.target.value)
    }

    handleSubmit(e){
        e.preventDefault();
        const forms = e.target;
        // console.log(forms.gender.value)
        this.props.handleChange.Submit(forms.first.value, forms.last.value, forms.age.value, forms.email.value, forms.date.value, forms.gender.value)
    }
  render() {
      const {formState} = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <Row>
              <Input s={12} name="first" label="First Name" value={formState.firstName} onChange={this.handleFirst.bind(this)}  validate required></Input>
            </Row>
            <Row>
              <Input s={12} name="last" label="Last Name" value={formState.lastName} onChange={this.handleLast.bind(this)}  validate required></Input>
            </Row>
            <Row>
              <Input s={12} name="age" label="Age" value={formState.age} onChange={this.handleAge.bind(this)}  validate required></Input>
            </Row>
            <Row>
              <Input s={12} name="email" label="Email" value={formState.email} onChange={this.handleEmail.bind(this)} validate type="email" required></Input>
            </Row>
            <Row>
              <Input name='date' type='date' value={formState.date} label="Birthday" onChange={this.handleDate.bind(this)} />
            </Row>
            <Row>
                <Input s={12} name="gender" type='select' label="Gender" value={formState.gender} onChange={this.handleGender.bind(this)}>
                    <option value=''>Select Gender</option>
                    <option value='Pria'>Pria</option>
                    <option value='Wanita'>Wanita</option>
                </Input>
            </Row>
            <Button waves="light" className={formState.firstName !== "" &&
                                            formState.lastName !== "" &&
                                            formState.age !== "" &&
                                            formState.email !== "" &&
                                            formState.date !== "" &&
                                            formState.gender !== ""
                                            ? "" : "disabled"
                                            }>Submit</Button>
          </form>
      </div>
    )
  }
}
