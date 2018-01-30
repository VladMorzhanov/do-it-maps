const {SC} = require('../constants')
const Marker = require('../models/Marker')
const CustomError = require('../error/custom-error')

module.exports = {

  getMarkers: async ({user}, res, next) => {
    try {
      let markers = await Marker.find({
        userId: user.id
      })

      for (let i = 0; i < markers.length; ++i) {
        markers[i] = markers[i].toObject()
        delete markers[i].userId
      }

      return res.status(SC.SUCCESS).json(markers)
    } catch (e) {
      console.log(e)
      return next(e)
    }
  },
  /**
   * generic post endpoint
   * @param headers
   * @param res
   * @param next
   * @returns {Promise.<void>}
   */
  updateMarkers: async ({user, body}, res, next) => {
    if (!body) {
      return next(new CustomError('no data provided'))
    }

    for (let i = 0; i < body.length; ++i) {
      if (!body[i].id) {
        const mark = new Marker()
        mark.lat = body[i].lat
        mark.lng = body[i].lng
        mark.userId = user.id
        await mark.save()
      }
    }

    res.status(SC.SUCCESS).json()
  },
  /**
   * generic post endpoint
   * @param headers
   * @param res
   * @param next
   * @returns {Promise.<void>}
   */
  deleteMarkers: async ({user}, res, next) => {
    await Marker.remove({
      userId: user.id
    })

    res.status(SC.SUCCESS).json()
  }
}
