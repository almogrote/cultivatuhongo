import faunadb from 'faunadb'
import getId from './utils/getId'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = async function (event, context) {
  const id = parseInt(getId(event.path))
  console.log(`Function 'category' invoked. Read id: ${id}`)
  try {
    const response = await client.query(q.Get(q.Match(q.Index('get_category_by_id'), id)))
    return {
      statusCode: 200,
      body: JSON.stringify(response)
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify(error)
    }
  }
}
