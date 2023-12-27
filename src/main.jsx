import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddUser from './features/users/AddUser.jsx'
import EditUser from './features/users/EditUser.jsx'
import { Provider } from 'react-redux'
import { store } from './App/store.js'
const router = createBrowserRouter([
  {path:"/", element: <App />},
  {path:"add-user",element:<AddUser/>},
  {path:"edit-user/:id", element:<EditUser/>}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
