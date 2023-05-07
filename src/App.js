import MeetsPanel from './components/MeetsPanel';
import MeetsForm from './components/MeetsForm';
import Navbar from './components/Navbar';
import MeetsList from './components/MeetsList';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MeetsList />
      <MeetsPanel />
      <MeetsForm />
      <Footer />
    </div>
  );
}

export default App;
