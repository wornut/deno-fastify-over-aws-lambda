import type { FastifyInstance } from 'npm:fastify'

export const errorHandler: FastifyInstance['errorHandler'] = (
	error,
	req,
	reply,
) => {
	const errorStatusCode = error.statusCode ? error.statusCode : 500

	const errorMessage = {
		test: error,
		development: error,
		runtest: error,
	}[Deno.env.get('ENV') ?? ''] ?? 'Something broken!'

	req.log.error(error)

	reply.code(errorStatusCode).send({ error: errorMessage })
}
