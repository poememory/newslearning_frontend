import { GlobalProvider } from "@/context/GlobalContext";
import './app.less';


function App({ children }) {

  return (
      <GlobalProvider>
        {children}
      </GlobalProvider>
  );
}

export default App;
