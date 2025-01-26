import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { ErrorPage } from './ErrorPage.tsx';
import AppEn from './AppEn.tsx';
import { SkillsEN } from './SkillsEN.tsx';
import { Skills } from './Skills.tsx';
import { Projects } from './Projects.tsx';
import { ProjectsEN } from './ProjectsEN.tsx';
import { DontYet } from './DontYet.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "AppEn",
    element: <AppEn />,
  },
  {
    path: "Skills",
    element: <Skills />
  },
  {
    path: "SkillsEN",
    element: <SkillsEN />
  },
  {
    path: "Projects",
    element: <Projects />
  },
  {
    path: "ProjectsEN",
    element: <ProjectsEN />
  },
  {
    path: "DontYet",
    element: <DontYet />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
