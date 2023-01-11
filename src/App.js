import './App.css';
import Countries from './components/countries/Countries';
import Layout from './components/layout/Layout';
import SearchInput from './components/layout/search-input/SearchInput';

function App() {

  return (
    <Layout onHeader>
      <SearchInput />
      <Countries />
    </Layout>
  );
}

export default App;
