import { AccessControlProvider } from '@refinedev/core';

// مثال: superadmin همه‌چیز؛ kyc فقط KYC؛ finance فقط wallet/escrow؛ support فقط disputes
export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource, action, params, type }) => {
    // اینجا roles را از localStorage یا authProvider.getPermissions بگیر
    const roles = JSON.parse(localStorage.getItem('CSP_ROLES') || '[]');
    const allowAll = roles.includes('ADMIN') || roles.includes('SUPERADMIN');
    if (allowAll) return { can: true };

    const map: Record<string, string[]> = {
      kyc: ['kyc'],
      wallet: ['finance'],
      escrow: ['finance'],
      disputes: ['support', 'finance', 'kyc'],
    };
    const required = map[resource];
    if (!required) return { can: true }; // منابع عمومی ادمین

    const ok = required.some((r) => roles.includes(r.toUpperCase()));
    return { can: ok };
  },
};
