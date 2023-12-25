// App.jsx
import React from "react";
//import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/Register";
import  axios  from 'axios';
import { UserContextProvider } from "./UserContext";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes} from 'react-router-dom';
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from "./pages/PlacePage";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";


//axios.default.baseURL= 'http://localhost:4000';
axios.default.baseURL= 'http://localhost:5173';
axios.defaults.withCredentials = true;



 function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layout />}> 
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/account" element={<ProfilePage />} />
      <Route path="/account/places" element={<PlacesPage />} />
      <Route path="/account/places/new" element={<PlacesFormPage />} />
      <Route path="/account/places/:id" element={<PlacesFormPage />} />
      <Route path="/place/:id" element={<PlacePage />} />
      <Route path="/account/bookings" element={<BookingsPage />} />
      <Route path="/account/bookings/:id" element={<BookingPage />} />
      </Route>
      </Routes>
    </UserContextProvider>
    
  );
}

export default App;


{ /*const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <IndexPage /> },
      { path: "login", element: <LoginPage /> },
      {path:"/account", element: <AccountPage />}
    ],
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  /*{
    path:"/account",
    element: <AccountPage />
  }*/
 }

   {/* <RouterProvider router={router}> */}
    {/*  <Route index element={<Layout />} /> */ } 
  {/*  </RouterProvider> */}