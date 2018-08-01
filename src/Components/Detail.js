import React, { Component } from 'react'
import Frame from './Frame.js'
import { withRouter } from 'react-router-dom';
class Detail extends Component {
    render(){
        console.log(this.props)
        return (
            <Frame>
                 <div className="detail">
                    {this.props.match.params.id}
                </div>
            </Frame>
        )
    }
}

export default withRouter(Detail)