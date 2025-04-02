import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'

interface FetchRecentQuestionsSlugUseCaseRequest {
  page: number
}

interface FetchRecentQuestionsSlugUseCaseResponse {
  questions: Question[]
}

export class FetchRecentQuestionsSlugUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: FetchRecentQuestionsSlugUseCaseRequest): Promise<FetchRecentQuestionsSlugUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return {
      questions,
    }
  }
}
