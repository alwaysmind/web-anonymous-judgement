import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import routes from './routes';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const location = useLocation()

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
              {routes.map(route => (
                <Route path={route.path} element={route.component} key={route.path} />
              ))}
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
