// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUsers from './Components/AddUsers';
import Home from './Components/Home';
import UpdateUser from './Components/UpdateUser';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('https://assign-11-server.vercel.app/users')
    },

    {
      path: '/users/add',
      element: <AddUsers></AddUsers>
    },

    {
      path: '/update/:id',
      element: <UpdateUser></UpdateUser>,
      loader: ({ params }) => fetch(`https://assign-11-server.vercel.app/users/${params.id}`)
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;


