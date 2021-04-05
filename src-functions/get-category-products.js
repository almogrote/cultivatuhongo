import faunadb from 'faunadb'
import getId from './utils/getId'

const q = faunadb.query
const client = new faunadb.Client({
  secret: ${env:FAUNADB_SECRET}
})

exports.handler = async (event, context, callback) => {
  const id = parseInt(getId(event.path))
  console.log(`Function 'get product' invoked. Read id: ${id}`)
  try {
    const response = await client.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index('get_products_by_category'),
            id
          )
        ),
        q.Lambda('X', q.Get(q.Var('X')))
      )
    )
    console.log('success', response)
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  } catch (error) {
    console.log('error', error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  }
}
