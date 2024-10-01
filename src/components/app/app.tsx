import { ConstructorPage } from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, Modal, OrderInfo, IngredientDetails } from '@components';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';

import {
  NotFound404,
  Feed,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Profile,
  ProfileOrders
} from '../../pages';

const App = () => {
  const location = useLocation();
  console.log(location);

  //const { number } = useParams();
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='*' element={<NotFound404 />} />
        <Route path='/' element={<ConstructorPage />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/orders' element={<ProfileOrders />} />
        <Route
          path='/ingredients/:id'
          element={
            <Modal>
              <IngredientDetails />
            </Modal>
          }
        />
      </Routes>

      {/* <Routes>
      <Route path="/feed/:number" element={<Modal><OrderInfo/></Modal>}/>
      <Route path="/ingredients/:id" element={<Modal><IngredientDetails/></Modal>}/>
      <Route path="/profile/orders/:number" element={<Modal><OrderInfo/></Modal>}/>
    </Routes> */}
    </div>
  );
};

export default App;
