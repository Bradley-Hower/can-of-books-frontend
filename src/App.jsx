import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/books')
      .then(res => this.setState({books: res.data}))
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
            >              
            </Route>
            <Route 
              exact path="/about"
              element={<About />}
            >              
            </Route>
            <Route 
              exact path="/books"
              element={<BestBooks books={this.state.books}/>}
            >
            </Route>  
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
