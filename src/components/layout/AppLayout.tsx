import { Layout, Grid, Menu } from 'antd';
import { PropsWithChildren, useState } from 'react';
import { ColorModeSwitch } from '../ui/ColorModeSwitch';

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

export function AppLayout({ children, onThemeChange, theme }: PropsWithChildren<{theme:'light'|'dark'; onThemeChange:(v:'light'|'dark')=>void;}>) {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [collapsed, setCollapsed] = useState(isMobile);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="md"
        collapsedWidth={isMobile ? 0 : 80}
      >
        <div className="logo" style={{ height: 48, margin: 16, background: 'rgba(255,255,255,.2)' }} />
        <Menu
          theme="dark"
          mode="inline"
          items={[
            { key: 'dashboard', label: 'Dashboard' },
            { key: 'users', label: 'Users' },
            { key: 'kyc', label: 'KYC' },
            { key: 'shipments', label: 'Shipments' },
            { key: 'wallet', label: 'Wallet' },
            { key: 'escrow', label: 'Escrow' },
            { key: 'disputes', label: 'Disputes' },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ display:'flex', gap:12, alignItems:'center', justifyContent:'space-between' }}>
          <div>CSP Admin</div>
          <ColorModeSwitch value={theme} onChange={onThemeChange} />
        </Header>
        <Content style={{ margin: 16 }}>{children}</Content>
      </Layout>
    </Layout>
  );
}
