import faunadb from 'faunadb'
import getId from './utils/getId'

const q = faunadb.query
const client = new faunadb.Client({
  secret: 'fnAEFarML2ACB72fdoDViyrnoAKVJiq_cO-za94-' // process.env.FAUNADB_SECRET
})

exports.handler = async (event, context, callback) => {
  const id = parseInt(getId(event.path))
  console.log(`Function 'get product' invoked. Read id: ${id}`)
  try {
    const response = await client.query(q.Get(q.Match(q.Index('get_products_by_category'), id)))
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
