import React, { Component } from 'react'
import Frame from './Frame.js'
import { withRouter } from 'react-router-dom';
class Blog extends Component {
    state={
        blogs: [
            {
                id: 1,
                title: '博客内容1',
                detail: '1-博客内容1'
            },
            {
                id: 2,
                title: '博客内容2',
                detail: '1-博客内容2'
            }
        ]
    }

    handleClick(id){
        this.props.history.push(`/blog/post/${id}`)
    }

    render(){
        return (
            <Frame>
                {
                    this.state.blogs.map((curr) => {
                        return (
                            <p 
                                onClick={this.handleClick.bind(this, curr.id)}
                                key={curr.id}
                            >
                                {curr.detail}
                            </p>
                        )
                    })
                }
            </Frame>
        )
    }
}

export default withRouter(Blog)