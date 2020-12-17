import { Request, Response } from 'express';
import { IController } from '@/presentation/interfaces';

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle();

    res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};
