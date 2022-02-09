import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import routes from './routes';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSelector } from 'react-redux';
import AuthMiddleware from './common/middlewares/AuthMiddleware';
import { useLayoutEffect } from 'react';
import axios from 'axios';

function App() {
  const location = useLocation()

  const user = useSelector((state: any) => state.UserReducer.user)

  useLayoutEffect(() => {
    if (user.token) {
      axios.defaults.headers.common['x-access-token'] = user.token
    }
  }, [user])

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={200}
          mountOnEnter={false}
          in={true}
          unmountOnExit
          classNames={"pageSlider"}>
          <div>
            <Routes location={location}>
              {routes.map((route, index) => (
                <Route
                  path={route.path}
                  element={
                    <AuthMiddleware isPrivate={route.isPrivate} key={index}>
                      {route.component}
                    </AuthMiddleware>
                  }
                  key={index} />
              ))}
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
