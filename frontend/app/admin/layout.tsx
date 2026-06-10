import type { ReactNode } from 'react'

import { AdminLayout as AdminShell } from './_components/admin-shell'

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>
}
