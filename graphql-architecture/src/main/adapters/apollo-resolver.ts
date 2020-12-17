import { IController } from '@/presentation/interfaces';
import { RankingScoreViewModel } from '@/presentation/view';

export const adaptResolver = async (
  controller: IController,
): Promise<RankingScoreViewModel> => {
  const httpResponse = await controller.handle();
  return httpResponse.data;
};
