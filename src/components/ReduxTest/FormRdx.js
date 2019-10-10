import React,{Component} from 'react';
import { connect } from "react-redux";
import {addToList} from '../../actions'

const mapDispatchToProps=(dispatch)=>{
    return {
        addToList: newElement => dispatch(addToList(newElement))
    };
};

class ConnectedFormRdx extends Component{
    state={
        inputValue:''
    };
    handleSubmit=e=>{
        e.preventDefault();
        console.log('dzz');
        let {inputValue}=this.state;
        console.log('dzz2');
        this.props.addToList(inputValue);
        console.log('dzz3');
        this.setState({inputValue:""});
        console.log(this.state.inputValue)

    };
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type="text" name='inputValue' placeholder='Wpisz coś' onChange={this.handleChange} value={this.state.inputValue}/>
            <input type='submit' value='Ok'/>
        </form>
    }
}

const FormRdx=connect(null,mapDispatchToProps)(ConnectedFormRdx);
export default FormRdx;