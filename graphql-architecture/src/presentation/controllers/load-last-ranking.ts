import { ILastRankingLoader } from '@/domain/usecases';
import {
  HttpResponse,
  IController,
  serverError,
  success,
} from '@/presentation/interfaces';
import { RankingScoreViewModel } from '@/presentation/view';

export class LoadLastRankingController implements IController {
  constructor(private readonly lastRankinLoader: ILastRankingLoader) {}

  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankinLoader.load();

      return success(RankingScoreViewModel.mapCollection(ranking));
    } catch (error) {
      return serverError(error);
    }
  }
}
