import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = async (event, context, callback) => {
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
