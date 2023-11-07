import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePageView } from "./pages/HomePageView";
import { NavbarView } from "./pages/NavbarView";
import { AboutPageView } from "./pages/AboutView";
import { EducationPageView } from "./pages/EducationView";
import { WorkPageView } from "./pages/WorkView";
import { SkillsPageView } from "./pages/SkillsView";
import { ProjectsPageView } from "./pages/ProjectsView";


const router = createBrowserRouter([
  { path: "/", 
    element: <NavbarView/>,
    children: [
      { path: "/", element: <HomePageView /> },
      { path: "/about", element: <AboutPageView /> },
      { path: "/education", element: <EducationPageView /> },
      { path: "/work", element: <WorkPageView /> },
      { path: "/skills", element: <SkillsPageView /> },
      { path: "/projects", element: <ProjectsPageView /> },
    ]
  },
  // { path: "/register", element: <RegisterPage/> }
])

function App() {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
