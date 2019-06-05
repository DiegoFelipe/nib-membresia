'use strict'

const Ministerio = use('App/Models/Ministerio')

/**
 * Resourceful controller for interacting with ministerios
 */
class MinisterioController {
  /**
   * Show a list of all ministerios.
   * GET ministerios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const ministerios = await MinisterioController.all()

    return ministerios
  }

  /**
   * Create/save a new ministerio.
   * POST ministerios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only(['min_nome', 'min_descricao'])
    const ministerio = await Ministerio.create(data)

    return ministerio
  }

  /**
   * Display a single ministerio.
   * GET ministerios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async show ({ params }) {
    const ministerio = await Ministerio.find(params.min_id)

    return ministerio
  }


  /**
   * Update ministerio details.
   * PUT or PATCH ministerios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, requests }) {
    const data = request.only(['min_descricao'])
    const ministerio = await Ministerio.find(params.min_id)

    ministerio.merge(data)
    await ministerio.save()

    return ministerio
  }

  /**
   * Delete a ministerio with id.
   * DELETE ministerios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const ministerio = await Ministerio.find(params.min_id)

    await ministerio.delete()
  }
}

module.exports = MinisterioController
