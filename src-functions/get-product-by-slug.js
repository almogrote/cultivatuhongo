import faunadb from 'faunadb'
import getId from './utils/getId'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = async function (event, context) {
  const slug = getId(event.path)
  console.log(`Function 'get product' invoked. Read slug: ${slug}`)
  try {
    const response = await client.query(q.Get(q.Match(q.Index('get_product_by_slug'), slug)))
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
