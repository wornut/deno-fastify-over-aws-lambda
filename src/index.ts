import Fastify from 'npm:fastify'
import { errorHandler } from './plugins/error_handler/index.ts'
import { publicRouter } from './routes.ts'

const app = Fastify({
	logger: Deno.env.get('ENV') !== 'test',
})

app.setErrorHandler(errorHandler)

app.register(import('npm:@fastify/helmet'))

app.register(import('npm:@fastify/sensible'))

app.register(import('npm:@fastify/cors'), {
	origin: '*',
})

app.register((f, _, done) => {
	f.decorateRequest('systemConfig', null)
	f.register(publicRouter)
	done()
})

export default app
