import { Switch } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';

export function ColorModeSwitch({ value, onChange }: {value: 'light'|'dark'; onChange: (v:'light'|'dark')=>void}) {
  const checked = value === 'dark';
  return (
    <Switch
      checked={checked}
      onChange={(v) => onChange(v ? 'dark' : 'light')}
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
    />
  );
}
