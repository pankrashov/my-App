import  Main  from "./components/Main/Main";
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route path="/" render={() => <Main />} />
    </div>
  );
}

export default App;
