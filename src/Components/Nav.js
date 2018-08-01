import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import { 
    Link
} from 'react-router-dom'



class AppNav extends Component{
    render(){        
        return (
            <ul className="navbar is-primary mynav">
                {
                    this.props.navs.map((curr) => {
                        return (
                            <li key={curr.id}>
                                <Link to={curr.url}>{curr.title}</Link>
                            </li>
                        )
                    }) 
                }           
            </ul>    
        )
    }
} 

export default AppNav



