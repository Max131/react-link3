import './App.css';
import Data from './data/linktr.json';
import Link3 from './components/Link3';

function App() {
  return (
    <main className="App hero is-fullheight is-warning is-bold">
      <div className="hero-body ">
        <Link3 userData={Data} />
      </div>
    </main>
  );
}

export default App;
