import './App.css'; 
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default class App extends Component {
  pageSize = 12;
  render() { 
    return <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<News key={'general'} pageSize={this.pageSize} category={'general'}/>}/> 
            <Route exact path="/sports" element={<News key={'sports'} pageSize={this.pageSize} category={'sports'}/>}/> 
            <Route exact path="/science" element={<News key={'science'} pageSize={this.pageSize} category={'science'}/>}/> 
            <Route exact path="/entertainment" element={<News key={'entertainment'} pageSize={this.pageSize} category={'entertainment'}/>}/> 
            <Route exact path="/buisness" element={<News key={'buisness'} pageSize={this.pageSize} category={'buisness'}/>}/> 
            <Route exact path="/health" element={<News key={'health'} pageSize={this.pageSize} category={'health'}/>}/> 
            <Route exact path="/technology" element={<News key={'technology'} pageSize={this.pageSize} category={'technology'}/>}/> 
          </Routes>
      </Router>
    </div>;
  }
}
