export const STALE_TIME = `${import.meta.env.VITE_STALE_TIME}`
  ? Number(`${import.meta.env.VITE_STALE_TIME}`)
  : 2000 * 60; // default is set to 2 minutes
