import statesJSON from '../db/states.json'

import { Request, Response } from "express";
import { AppError } from '../utils/error.util';

export const stateController = {
  findAll: (request: Request, response: Response) => {
    const states = statesJSON.map(state => {
      return {
        name: state.nome,
        ufCode: state.codigo_uf,
        latitude: state.latitude,
        longitude: state.longitude,
        uf: state.uf
      }
    })

    response.json(states)
  },
  findOne: ({ params }: Request, response: Response) => {
    const { ufCode } = params

    if(!ufCode) throw new AppError(400, 'ufCode is required')

    const state = statesJSON.find(state => state.codigo_uf === Number(ufCode))

    if(!state) throw new AppError(404, 'state is not found')

    response.json({
      name: state.nome,
      ufCode: state.codigo_uf,
      latitude: state.latitude,
      longitude: state.longitude,
      uf: state.uf
    })
  }
}