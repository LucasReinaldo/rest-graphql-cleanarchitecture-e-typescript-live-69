import { adaptResolver } from '@/main/adapters/apollo-resolver';
import { makeLoadLastRankingController } from '@/main/factories';
import { RankingScoreViewModel } from '@/presentation/view';

export default {
  Query: {
    lastRanking: async (): Promise<RankingScoreViewModel> =>
      adaptResolver(makeLoadLastRankingController()),
  },
};
