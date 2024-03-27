import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { AuthProvider, useAuth } from '../auth/AuthContext';
import Dashbord from './Dasbord';
import AdminLogin from './AdminLogin';
import Unauthorized from '../unauthorized';
import AddPost from './AddPost';

const Admin = () => {

  // If authenticated and an admin, render the admin page
  return (
    <>
      <AddPost/>
    </>
  );
};

export default Admin;
