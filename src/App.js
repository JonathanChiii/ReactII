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

function App() {
  return (
    <div className="App">
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
      <ParentComponent /> */}
      <Form1/>
      

    </div>
  );
}
export default App;
