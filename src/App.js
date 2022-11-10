import Password from "./components/Password";
import {lowercase, uppercase, number,symbols} from "./components/PassGenerator"

function App() {
  return (
   <>
   <Password lowercase={lowercase} uppercase={uppercase} number={number} symbols={symbols}/>
   </>
  );
}

export default App;