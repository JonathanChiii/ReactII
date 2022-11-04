import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Message from './component/Message';
import EventBinding from './component/EventBinding';
import ConditionalRendering from './component/ConditionalRendering';
import Parent from './component/Parent';
import NameList from './component/NameList';
import Counter from './component/Counter';
import LifeCycle1 from './component/LifeCycle1';
import ParentComponent from './component/ParentComponent';
import Form1 from './component/Form';
import PostList from './component/PostList';
import EmployeeList from './EmpComponent/EmployeeList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClickCounter from './hooks/ClickCounter';
import HooksCounter from './hooks/HooksCounter';
import HooksCounter2 from './hooks/HooksCounter2';
import HooksCounter3 from './hooks/HooksCounter3';
import UnMount from './component/UnMount';
import ErrorHandling from './component/ErrorHandling';
import Employee from './component/Employee';
import HooksCounter4 from './hooks/HooksCounter4';



function App() {
  return (
    <div className="container">
      {/* <Hello/>
      <Welcome name="User1" location="CA"/>
      <Message message="Hello from the outside"/>
      <EventBinding/>
      <ConditionalRendering/>
      <Parent/>
      <NameList/>
      <Counter/>
      <NameList/>
      <LifeCycle1/>
      <ParentComponent />
      <Form1/>
      <PostList/> 
      <ClickCounter/>
      <LifeCycle1/>*/}
      
      <div className='col-md-12'>
        <h1 className='text-center' style={myStyle}>React Application</h1>
        <Router>
            <Routes>
              <Route exact path="/" element={<HooksCounter4/>} />
              <Route exact path="/list" element={<EmployeeList />} />
              <Route exact path="/form" element={<Form1 />} />
            </Routes>
        </Router>

        {/* <ErrorHandling>
          <Employee empName={'Arbys'}/>
        </ErrorHandling> */}


      </div>
      
      
    </div>
  );
}

const myStyle = {
  color: 'red',
  margin:'10px'
}
export default App;
