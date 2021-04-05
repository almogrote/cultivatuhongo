import { writeFileSync } from 'fs'

writeFileSync('./.env', `FAUNADB_SECRET=${process.env.FAUNADB_SECRET}\n`)
