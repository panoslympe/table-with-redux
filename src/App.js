import Head from "./components/Table/Head";
import DataTable from "./components/Table/Table";
import { Provider } from 'react-redux';
import store  from "./store/store";
import "./App.css";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Head/>
      <DataTable />
    </div>
    </Provider>
  );
}

export default App;
