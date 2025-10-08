import type { Access } from 'payload'

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  // For now, all authenticated users can access all records
  // You can add role-based access control later
  return Boolean(user)
}
