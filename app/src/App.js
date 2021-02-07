import { BrowserRouter as Router, Route } from 'react-router-dom';
import Quiz from './screens/Quiz';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <img src={Logo} style={{width: '15%', margin: '3%', marginBottom: '-2%'}} /> */}
        <Route path="/Quiz" exact render={() => <Quiz />} />
      </Router>
    </div>
  );
}

export default App;
