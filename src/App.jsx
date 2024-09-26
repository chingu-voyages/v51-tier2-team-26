import './App.css'
import Header from './components/homepage/Header.jsx'
import Main from './components/homepage/Main.jsx'
import GroupCard from './components/groupCard/GroupCard.jsx'
import Footer from './components/homepage/Footer.jsx'
import { useState } from 'react';


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
      <GroupCard />
      <Footer />
    </>
  )
}

export default App
