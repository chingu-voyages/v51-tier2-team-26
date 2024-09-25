import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react';
import ExpenseDetail from './components/ExpenseDetail.jsx';

const testData = [
  {'id': 1, 'groupName': "Test1", 'moneyOwed':100, 'description': "This is a test description.", 'groupMembers': ["Member 1", "Member 2"]},
  {'id': 2, 'groupName': "Test2", 'moneyOwed':400, 'description': "This is another test description.", 'groupMembers': ["Member 3", "Member 4"]},
  {'id': 3, 'groupName': "Test3", 'moneyOwed':400, 'description': "This is another test description.", 'groupMembers': ["Member 3", "Member 4"]}
];

function App() {
  const [groups, setGroups] = useState([...testData]);

  return (
    <>
      <Header />
      <Main groups={groups} />
      <Footer />
    </>
  )
}

export default App
