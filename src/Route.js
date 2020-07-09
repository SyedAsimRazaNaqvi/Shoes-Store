import React from 'react'
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from 'react-router-dom';

import Home from './components/Home'
import Product from './components/Product'
import ProductItem from './components/ProductItem'
import {About} from './components/About'

function RouteConfig() {
    return (
        <div>
            <Router>
                <nav className="header">
                    <Link className="text" to="/"><h3>Home</h3></Link>
                    <Link className="text" to="/Product"><h3>Product</h3></Link>
                    <Link className="text" to="/About"><h3>About</h3></Link>
                </nav>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product" component={Product} />
                    <Route  path="/product/:id" component={ProductItem} />
                    <Route  path="/About" component={About} />
                    <Route path="*" component={()=><h2 className="title">404 Not Found</h2>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default RouteConfig