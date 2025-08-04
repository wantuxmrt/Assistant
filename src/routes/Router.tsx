import { Suspense, ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routesConfig from './routesConfig';
import GuestRoute from './GuestRoute';
import PrivateRoute from './PrivateRoute';
import Loader from '@/components/data-display/Loader/Loader';

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {routesConfig.map((route) => {
            let element: ReactElement = route.element as ReactElement;
            
            if (route.guestOnly) {
              element = <GuestRoute>{route.element as ReactElement}</GuestRoute>;
            } else if (route.isPrivate) {
              element = (
                <PrivateRoute roles={route.roles}>
                  {route.element as ReactElement}
                </PrivateRoute>
              );
            }

            return (
              <Route 
                key={route.path}
                path={route.path}
                element={element}
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;