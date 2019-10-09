import React,{Component} from 'react';
import {connect, useSelector} from "react-redux";

const mapStateToProps = state => {
    return {testStrings:state.testStrings};
};

class ConnectedDisplayRdx extends Component{
    render() {
        return <div>
            <ul>
                {this.props.testStrings.map(e=><li>
                    {e}
                </li>)}
            </ul>
        </div>
    }
}

const DisplayRdx=connect(mapStateToProps)(ConnectedDisplayRdx);

export default DisplayRdx;