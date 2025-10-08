import type { Access } from 'payload'

export const isAdmin: Access = ({ req: { user } }) => {
  // For now, all authenticated users are considered admins
  // You can add a role field to Users collection later
  return Boolean(user)
}
