import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = async function (event, context) {
  console.log('Function "featured product" invoked.')
  try {
    const response = await client.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index('get_products_by_category'),
            1
          )
        ),
        q.Lambda('X', q.Get(q.Var('X')))
      )
    )
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
