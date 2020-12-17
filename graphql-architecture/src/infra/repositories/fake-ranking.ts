import { ILoadLastRankingRepository } from '@/datalayer/interfaces';
import { RankingScoreModel } from '@/datalayer/models';
import { ranking } from '@/infra/data';

export class FakeRankingRepository implements ILoadLastRankingRepository {
  async loadLastRanking(): Promise<RankingScoreModel[]> {
    return ranking.map((item) => ({
      player: item.user,
      score: item.score,
      heroes: item.heroes,
      matchDate: new Date(item.date),
    }));
  }
}
