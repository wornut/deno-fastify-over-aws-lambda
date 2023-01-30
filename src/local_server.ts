import 'https://deno.land/std@0.175.0/dotenv/load.ts'
import app from './index.ts'

app.listen({ host: '0.0.0.0', port: 3000 }, (err) => {
	if (err) {
		app.log.error(err)
		Deno.exit(1)
	}
})
