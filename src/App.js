
import './App.css';
import Countries from './components/countries/Countries';
import CountryHeader from './components/countries/country-header/CountryHeader';
import Layout from './components/layout/Layout';

function App() {



  return (
    <Layout >
      <CountryHeader />

      <Countries />

    </Layout>
  );
}

export default App;
