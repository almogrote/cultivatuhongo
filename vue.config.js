module.exports = {
  devServer: {
    proxy: {
      '/.netlify': {
        target: 'http://localhost:9000',
        pathRewrite: { '^/.netlify/functions': '' }
      }
    }
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/category',
        '/product'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
