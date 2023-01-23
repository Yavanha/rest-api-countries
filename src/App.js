
import { useSelector } from 'react-redux';
import './App.css';
import Countries from './components/countries/Countries';
import CountryHeader from './components/countries/country-header/CountryHeader';
import Layout from './components/layout/Layout';

function App() {

  const selected = useSelector(state => state.countries.selected)

  return (
    <Layout >
      {selected.length === 0 && <CountryHeader />}

      <Countries />

    </Layout>
  );
}

export default App;
