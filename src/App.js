import './App.css'
import TopBar from './Components/TopBar';
import StoreListing from './Components/StoreListing';
import TopSection from './Components/TopSection';

function App() {
  return (
    <div className="App">
     <TopBar />
     <TopSection />
     <StoreListing />
    </div>
  );
}

export default App;
