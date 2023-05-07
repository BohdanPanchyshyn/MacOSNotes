import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Workspace from './components/Workspace/Workspace';



function App() {

  return (
    <div className='main-wrapper'>
     <Header/>
     <div className='content-wrapper'>
      <Sidebar />
      <Workspace/>
     </div>
    </div>
  );
}

export default App;
