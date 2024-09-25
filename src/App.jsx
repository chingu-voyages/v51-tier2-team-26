import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import Footer from './components/Footer.jsx'
import { useState } from 'react';
import ExpenseDetail from './components/ExpenseDetail.jsx';
import { useLoaderData } from 'react-router-dom';

function App() {
  const { testData } = useLoaderData()
  const [groups, setGroups] = useState([...testData]);

  return (
    <>
      <Header />
      <Main groups={testData} />
      <Footer />
    </>
  );
}

export default App;
