import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
import Hero2 from "./pages/Hero2";
import Contact from "./pages/Contact";
import Page1 from "./pages/page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Loginpage from "./pages/Loginpage";
import AppLayout from "./AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: (
          <>
            <Hero />
            <Hero2/>
          </>
        ),
      },{
        path:"/contact",
        element:<><Contact/></>
      },{
        path:"book",
        element:<><Page1/></>
      },
      {
        path:"/thermal",
        element:<><Page2/></>
      },
      {
        path:"/carbon-free",
        element:<><Page3/></>
      }
    ],
  },{
        path:"login",
        element:<><Loginpage/>
        <div className="w-dvw h-dvh"></div></>
      }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
};

export default App;
