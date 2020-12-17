import { HttpResponse } from '@/presentation/interfaces';

export interface IController {
  handle: () => Promise<HttpResponse>;
}
