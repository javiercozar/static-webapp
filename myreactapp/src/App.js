
import { Button } from '@mui/material';
import './App.css';


const LogginButton = ({Text, onClickHandler}) => {
  return (<Button variant="contained" onClick={onClickHandler}>{Text}</Button>);
};

const LoggoutButton = ({Text, onClickHandler}) => {
  return (<Button variant="contained" onClick={onClickHandler}>{Text}</Button>);
};

function App() {

	const onLogginEventHandler = () => {
		alert("Loggin");
	};

	const onLoggoutEventHandler = () => {
		alert("Loggout");
	};

  return (
    <div className="App">
      <h1>Hello agents prime</h1>
      <LogginButton Text="Loggin" onClickHandler={onLogginEventHandler}></LogginButton>
			<LoggoutButton Text="Logout" onClickHandler={onLoggoutEventHandler}></LoggoutButton>
    </div>
  );
}

export default App;
