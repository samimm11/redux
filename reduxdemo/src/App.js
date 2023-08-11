import Product from "./components/Product";
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import RootLayout from "./components/RootLayout";
import Cart from "./components/Cart";


function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element={<Dashboard></Dashboard>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
