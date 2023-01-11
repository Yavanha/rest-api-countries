import './App.css';
import Layout from './components/layout/Layout';
import SearchInput from './components/layout/search-input/SearchInput';

function App() {

  return (
    <Layout onHeader>
      <SearchInput />
    </Layout>
  );
}

export default App;
