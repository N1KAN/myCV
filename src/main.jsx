import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Kontakt from './komponenten/Kontakt.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/contact",
      element: <Kontakt></Kontakt>,  // Hier könnte deine Kontakt-Komponente sein
    },
  ],
  {
    basename: "/myCV",  // Setzt den Basis-URL-Pfad für alle Routen
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
