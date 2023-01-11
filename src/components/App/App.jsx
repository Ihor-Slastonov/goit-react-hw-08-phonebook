import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Toaster } from 'react-hot-toast';

const Home = lazy(()=> import('../../pages/Home/Home'));
const Contacts = lazy(()=> import("../../pages/Contacts/Contacts"));
const Login = lazy(()=> import('../../pages/Login/Login'));
const Register = lazy(()=> import("../../pages/Register/Register"))

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
};
