import type { FastifyInstance, FastifyPluginCallback } from 'npm:fastify'

import { checkHealth } from './handlers/healthCheck/index.ts'
import { handleMo } from './handlers/mo/get/index.ts'

export const publicRouter: FastifyPluginCallback = (
	f: FastifyInstance,
	_,
	done,
) => {
	f.get('/api/health', checkHealth)
	f.get('/api/mo', handleMo)

	done()
}
