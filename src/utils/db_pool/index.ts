import { createPool } from 'npm:mariadb'
import type { Pool, PoolConfig } from 'npm:mariadb'

function getPoolConfigFromProcessEnv(): PoolConfig {
	const port = Deno.env.get('DB_POOL_PORT')
	const connectionLimit = Deno.env.get('DB_POOL_CLIM')

	const poolConfig: PoolConfig = {
		host: Deno.env.get('DB_POOL_HOST'),
		port: port ? parseInt(port, 10) : undefined,
		database: Deno.env.get('DB_NAME'),
		user: Deno.env.get('DB_POOL_USER'),
		password: Deno.env.get('DB_POOL_PWD'),
		connectionLimit: connectionLimit
			? parseInt(connectionLimit, 10)
			: undefined,
		timezone: Deno.env.get('DB_POOL_TIMEZONE'),
		bigIntAsNumber: true,
	}

	return poolConfig
}

const mysqlDbPool: Pool = createPool(getPoolConfigFromProcessEnv())

export default mysqlDbPool
