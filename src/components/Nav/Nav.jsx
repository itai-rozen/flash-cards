import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default class Nav extends React.Component {
    render(){
        return <nav>
            <Link to="/">
                Flash Cards
            </Link>
            <Link to="/manage">
                Manage Flash Cards
            </Link>
        </nav>
    }
}