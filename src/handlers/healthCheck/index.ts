import type { RouteHandler } from 'npm:fastify'

export const checkHealth: RouteHandler = (_req, res) => {
	res.status(200).send({
		message: `ok @ ${new Date().toString()}`,
		env: Deno.env.get('ENV') ?? 'unknown',
		version: Deno.env.get('PACKAGE_VERSION') ?? 'unknown',
	})
}
