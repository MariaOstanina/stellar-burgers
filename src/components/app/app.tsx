import { ConstructorPage } from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, Modal, OrderInfo, IngredientDetails } from '@components';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import {
  NotFound404,
  Feed,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Profile,
  ProfileOrders
} from '@pages';
import { ProtectedRoute } from '../ProtectedRoute';
import { useDispatch, useSelector } from '@store';
import { useEffect } from 'react';
import { fetchIngredients, getUser, userIsAuthSelector } from '@slices';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const backgroundLocation = location.state?.background;

  const isAuth = useSelector(userIsAuthSelector);

  useEffect(() => {
    dispatch(fetchIngredients());

    if (!isAuth) {
      dispatch(getUser());
    }
  }, [isAuth]);

  return (
    <div className={styles.app}>
      <AppHeader />

      <Routes location={backgroundLocation || location}>
        <Route path='*' element={<NotFound404 />} />
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed' element={<Feed />} />
        <Route
          path='/login'
          element={
            <ProtectedRoute onlyUnAuth>
              <Login />
            </ProtectedRoute>
          }
        />

        <Route
          path='/register'
          element={
            <ProtectedRoute onlyUnAuth>
              <Register />
            </ProtectedRoute>
          }
        />

        <Route path='/ingredients/:id' element={<IngredientDetails />} />

        <Route
          path='/profile/orders/:number'
          element={
            <ProtectedRoute>
              <OrderInfo />
            </ProtectedRoute>
          }
        />

        <Route path='/feed/:number' element={<OrderInfo />} />

        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile/orders'
          element={
            <ProtectedRoute>
              <ProfileOrders />
            </ProtectedRoute>
          }
        />
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path='/ingredients/:id'
            element={
              <ProtectedRoute>
                <Modal title='Детали ингредиента' onClose={() => navigate(-1)}>
                  <IngredientDetails />
                </Modal>
              </ProtectedRoute>
            }
          />
        </Routes>
      )}

      {backgroundLocation && (
        <Routes>
          <Route
            path='/profile/orders/:number'
            element={
              <Modal title='Детали заказа' onClose={() => navigate(-1)}>
                <OrderInfo />
              </Modal>
            }
          />
        </Routes>
      )}

      {backgroundLocation && (
        <Routes>
          <Route
            path='/feed/:number'
            element={
              <Modal title='Детали заказа' onClose={() => navigate(-1)}>
                <OrderInfo />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
