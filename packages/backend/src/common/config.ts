export type Config = ReturnType<typeof config>

export const config = () => ({
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3010,
})
