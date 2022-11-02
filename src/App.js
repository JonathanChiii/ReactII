import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Message from './component/Message';
import EventBinding from './component/EventBinding';
import ConditionalRendering from './ConditionalRendering';
import Parent from './component/Parent';
import NameList from './component/NameList';
import Counter from './component/Counter';
import LifeCycle1 from './component/LifeCycle1';
import ParentComponent from './component/ParentComponent';

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
      <LifeCycle1/> */}
      <ParentComponent />
      

    </div>
  );
}
export default App;
