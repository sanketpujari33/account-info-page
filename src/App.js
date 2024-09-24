import { AppProvider } from './server/AppContext';
import AccountInfoSecond from './pages/acountIfoSecond/AccountInfoSecond';
function App() {
  return (
    <>
      <AppProvider>
        <AccountInfoSecond />
      </AppProvider>
    </>
  );
}

export default App;
