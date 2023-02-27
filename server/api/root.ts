import { Request, Response } from 'express'

export const root = async (_: Request, res: Response): Promise<void> => {
  res.render('index.html')
}