import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Meta from "./meta"
class Doc extends React.Component{
  componentDidMount(){
    document.title = "Anirudh Sathiya"
  }

  render(){
    return(
      <div class="empty"></div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    {/* <Meta /> */}
    <Doc />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
