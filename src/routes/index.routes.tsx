import { ROUTES, ROUTES_AUTHENTICATED } from "./list.routes";
import { Route, Routes } from "react-router-dom";

import Header from "components/Header";
import { ReactNode } from "react";
import RequireAuth from "components/RequireAuth";

function HeaderLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

function Paths() {
  return (
    <Routes>
      {ROUTES.map((route) => {
        const Component = route.element;

        return (
          <Route key={route.path} path={route.path} element={<Component />} />
        );
      })}

      <Route element={<RequireAuth />}>
        {ROUTES_AUTHENTICATED.map((route) => {
          const Component = route.element;

          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <HeaderLayout>
                  <Component />
                </HeaderLayout>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default Paths;
