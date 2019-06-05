'use strict'

const Route = use('Route')

Route.resource('/ministerios', 'MinisterioController').apiOnly()
