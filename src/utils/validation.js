// Shared email validation used in the app
export const emailRegex = /^(?:[a-zA-Z0-9_'^&+%`{}~|-]+(?:\.[a-zA-Z0-9_'^&+%`{}~|-]+)*)@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}|\[(?:\d{1,3}\.){3}\d{1,3}\])$/

export function isValidEmail(email) {
  if (typeof email !== 'string') return false
  return emailRegex.test(email.trim())
}
