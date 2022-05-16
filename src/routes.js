import * as React from "react";
import { useRoutes } from "react-router-dom";
import Darshboard from "./dashboard/Dashboard";
import Usuarios from "./usuarios/Usuarios";
import Productos from "./productos/Productos";
import Identificacion from "./identificacion/Identificacion";
import Registro from "./identificacion/Registro";
import GuardedRoute from "./GuardedRoute";

export default function Router() {
  const [logged, setLogged] = React.useState(null);

  return useRoutes([
    {
      path: "/",
      element: (
        <GuardedRoute
          component={Darshboard}
          failNavigate="/identificacion"
          auth={logged ? true : false}
          user={logged}
          setLogged={setLogged}
        />
      ),
      children: [
        {
          path: "/usuarios",
          element: <Usuarios />,
        },
        {
          path: "/productos",
          element: <Productos />,
        },
      ],
    },
    {
      path: "/identificacion",
      element: (
        <GuardedRoute
          component={Identificacion}
          failNavigate="/"
          auth={logged ? false : true}
          setLogged={setLogged}
        />
      ),
    },
    {
      path: "/registro",
      element: (
        <GuardedRoute
          component={Registro}
          failNavigate="/"
          auth={logged ? false : true}
        />
      ),
    },
    { path: "*", element: <div>Nao nao nao manito</div> },
  ]);
}
