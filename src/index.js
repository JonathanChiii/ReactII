import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './component/Message';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*
import React from 'react';
import ReactDOM from 'react-dom';
//const elem = React.createElement('div', '', 'Hello All');
const elem = React.createElement('div', '', React.createElement('h1', '', 'Hello All'));
const elem1 = React.createElement('u1', '', 
   React.createElement('li', '', 'List item 1'),
   React.createElement('li', '', 'List item 2'),
   React.createElement('li', '', 'List item 3'),
   React.createElement('li', '', 'List item 4'),
   React.createElement('li', '', 'List item 5'),
)

const users = [
  {username: 'User 1', location: 'NY'},
  {username: 'User 2', location: 'NY'},
  {username: 'User 3', location: 'NY'},
  {username: 'User 4', location: 'NY'},
  {username: 'User 5', location: 'NY'},
];

const elem2 = React.createElement('u1','',
users.map((user, index)=>{ return React.createElement('l1','',user.username+', ' + user.location + '\n')})
)
//JSX: JavaScript XML
const elem3 = <ul>
  {
    users.map((user,index) => {
      return <li key={index}>
        {user.username + " ," + user.location}
      </li>
    })
  }
</ul>

ReactDOM.render(elem3, document.getElementById('root'));
*/