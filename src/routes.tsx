import { Refine } from '@refinedev/core';
import { ThemedLayoutV2, notificationProvider } from '@refinedev/antd';
import { dataProvider } from './api/dataProvider';
import { authProvider } from './auth/authProvider';
import { accessControlProvider } from './auth/accessControl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import * as Users from './pages/users';
import * as Kyc from './pages/kyc';
import * as Shipments from './pages/shipments';
// ...

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider}
        authProvider={authProvider}
        accessControlProvider={accessControlProvider}
        notificationProvider={notificationProvider}
        resources={[
          { name: 'dashboard', list: DashboardPage, options: { label: 'Dashboard' } },
          { name: 'users', list: Users.list, show: Users.show, edit: Users.edit, create: Users.create },
          { name: 'kyc', list: Kyc.list, show: Kyc.show },
          { name: 'shipments', list: Shipments.list, show: Shipments.show, edit: Shipments.edit },
          { name: 'trips', list: () => null }, // بعداً
          { name: 'wallet', list: () => null, show: () => null },
          { name: 'escrow', list: () => null },
          { name: 'disputes', list: () => null, show: () => null },
        ]}
      >
        {/* routes سفارشی هم می‌توان اضافه کرد */}
      </Refine>
    </BrowserRouter>
  );
}
