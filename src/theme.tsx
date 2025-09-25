import { ConfigProvider, theme as antdTheme } from 'antd';
import { PropsWithChildren, useMemo } from 'react';

export type ColorScheme = 'light' | 'dark';

export function ThemeProvider({ scheme, children }: PropsWithChildren<{scheme: ColorScheme}>) {
  const algorithm = useMemo(
    () => (scheme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm),
    [scheme],
  );

  return (
    <ConfigProvider
      theme={{
        algorithm,
        token: { borderRadius: 10 },
        components: { Layout: { headerBg: scheme === 'dark' ? '#141414' : '#fff' } },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
