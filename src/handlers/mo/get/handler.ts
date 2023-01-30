import mysqlDbPool from '../../../utils/db_pool/index.ts'

export const handler: CustomRouteShorthandOptionsWithHandler<any>['handler'] =
	async (_req, res) => {
		const result = await mysqlDbPool.query(
			'SELECT * FROM mo',
		)

		res.status(200).send({ result })
	}
