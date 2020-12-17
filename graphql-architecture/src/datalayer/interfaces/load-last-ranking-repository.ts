import { RankingScoreModel } from '../models/ranking-score';

export interface ILoadLastRankingRepository {
  loadLastRanking: () => Promise<RankingScoreModel[]>;
}
