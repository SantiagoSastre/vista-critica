/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_30964190")

  // update collection data
  unmarshal({
    "name": "guides"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_30964190")

  // update collection data
  unmarshal({
    "name": "guide"
  }, collection)

  return app.save(collection)
})
