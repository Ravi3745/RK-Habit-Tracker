// Import necessary components and functions from the react-router-dom library
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Homepage from "./Pages/Homepage";
import DetailsPage from "./Pages/DetailsPage";
import { Error } from "./Pages/Error";

// Create a router instance with route configurations
const router = createBrowserRouter([
  {
    // Root path configuration
    path: "/",
    element: <Navbar />, // Render Navbar component for the root path
    errorElement: <Error />, // Render Error component in case of an error on this route
    children: [
      { index: true, element: <Homepage /> }, // Render Homepage component for the root path
      { path: "/detailspage", element: <DetailsPage /> }, // Render DetailsPage component for /detailspage path
    ],
  },
]);

// Component function representing the entire application
function App() {
  // Return the application wrapped with the RouterProvider, providing the router
  return <RouterProvider router={router} />;
}

// Export the App component as the default export
export default App;
