import { BrowserRouter as Router, Route } from 'react-router-dom';
import Quiz from './screens/Quiz';
import ChatRecs from './screens/ChatRecs';
import Home from './screens/Home';
import Logo from './assets/softshelllogo.png';
import background from './assets/background.png';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`, height: '100%', margin: 0}}>
      <Router>
        <div style={{width: '100%', backgroundColor: '#25283C', padding: '0.5%'}}>
          <img src={Logo} style={{width: '5%', marginLeft: '2%'}} />
          <p style={{color: "white", height: '', fontSize: '30px', marginTop: '-4%', fontFamily: 'Arial-Black', marginLeft: '8.5%'}}>SoftShell</p>
        </div>
        <Route path="/Quiz" exact render={() => <Quiz />} />
        <Route path="/ChatRecs" exact render={() => <ChatRecs />} />
        <Route path="/" exact render={() => <Home />} />
      </Router>
    </div>
  );
}

export default App;

