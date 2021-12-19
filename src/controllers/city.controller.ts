import citiesJSON from '../db/cities.json'
import statesJSON from '../db/states.json'
import axios from 'axios'

import { Request, Response } from 'express'
import { AppError } from '../utils/error.util'
import { geocoderService } from '../services/geocoder.service'

interface ICordinates {
  latitude: number
  longitude: number
}

export const cityController = {
  findAllByUF: async ({ params }: Request, response: Response) => {
    const { ufCode } = params

    if(!ufCode) throw new AppError(400, 'ufCode is required')
    
    const hasState = statesJSON.some(state => state.codigo_uf === Number(ufCode))

    if(!hasState) throw new AppError(400, 'ufCode is invalid')

    const cities = citiesJSON.filter(city => city.codigo_uf === Number(ufCode))
    const citiesFormatted = cities.map((city) => {
      return {
        name: city.nome,
        ufCode: city.codigo_uf,
        ibgeCode: city.codigo_ibge,
        ddd: city.ddd,
        timezone: city.fuso_horario,
        latitude: city.latitude,
        longitude: city.longitude,
      }
    })

    response.json(citiesFormatted)
  },
  findOneByCordinates: async ({ query }: Request, response: Response) => {
    const { latitude, longitude } = query

    if(!latitude && !longitude ) throw new AppError(400, 'Latitude and Longitude is required')

    const cityResponse = await geocoderService.reverse(Number(latitude), Number(longitude))  

    const city = citiesJSON.find(city => city.nome === cityResponse.city)

    response.json({
      name: city.nome,
      ufCode: city.codigo_uf,
      ibgeCode: city.codigo_ibge,
      ddd: city.ddd,
      timezone: city.fuso_horario,
      latitude: city.latitude,
      longitude: city.longitude,
      stateCode: cityResponse.stateCode
    })
  }
}

