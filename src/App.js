import logo from './logo.svg';
import Login from './components/auth/login/Login';
import './App.css';
import useLoginStore from './store/mystore';
import LoadingComponent from './components/loading/LoadingComponent';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const isAuthenticated = useLoginStore((state)=>state.isAuthenticated);
  const loading = useLoginStore((state)=>state.loading);
  return (
    <div className="App">
      {
        loading && <LoadingComponent/>
      }
      {
        (isAuthenticated==false) ?<Login/>:(<Dashboard/>)
      }
      
    </div>
  );
}

export default App;
