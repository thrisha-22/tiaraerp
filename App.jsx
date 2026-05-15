import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './components/Login';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Contacts from './components/contacts/Contacts';
import ContactAddPage from './components/contacts/ContactAddPage';
import ContactEditPage from './components/contacts/ContactEditPage';
import Deals from './components/Deals';
import Activities from './components/Activities';
import PrivateRoute from './utils/PrivateRoute';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="leads" element={<Leads />} />
            {/* Contacts — nested routes */}
            <Route path="contacts">
              <Route index element={<Contacts />} />
              <Route path="add" element={<ContactAddPage />} />
              <Route path="edit" element={<ContactEditPage />} />
            </Route>
            <Route path="deals" element={<Deals />} />
            <Route path="activities" element={<Activities />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;