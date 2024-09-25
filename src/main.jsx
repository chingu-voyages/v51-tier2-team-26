import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from './components/ErrorPage.jsx';
import ExpenseDetail from './components/ExpenseDetail.jsx';
import ExpenseForm from './components/ExpenseForm/ExpenseForm.jsx';

function rootLoader() {
   const testData = [
    {'id': 1, 'groupName': "Test1", 'moneyOwed':100, 'description': "This is a test description.", 'groupMembers': ["Member 1", "Member 2"]},
    {'id': 2, 'groupName': "Test2", 'moneyOwed':400, 'description': "This is another test description.", 'groupMembers': ["Member 3", "Member 4"]},
    {'id': 3, 'groupName': "Test3", 'moneyOwed':400, 'description': "This is another test description.", 'groupMembers': ["Member 3", "Member 4"]}
  ];

  return { testData }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "expense-detail/:id",
    loader: rootLoader,
    element: <ExpenseDetail />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
