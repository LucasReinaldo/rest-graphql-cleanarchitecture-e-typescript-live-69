import { LastRankingLoaderService } from '@/datalayer/services';
import { FakeRankingRepository } from '@/infra/repositories';
import { LoadLastRankingController } from '@/presentation/controllers';
import { IController } from '@/presentation/interfaces';

export const makeLoadLastRankingController = (): IController => {
  const repo = new FakeRankingRepository();
  const loader = new LastRankingLoaderService(repo);
  return new LoadLastRankingController(loader);
};
