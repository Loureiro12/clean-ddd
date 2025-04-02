import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'

interface FetchQuestionAnswersSlugUseCaseRequest {
  page: number
  questionId: string
}

interface FetchQuestionAnswersSlugUseCaseResponse {
  answers: Answer[]
}

export class FetchQuestionAnswersSlugUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    page,
    questionId,
  }: FetchQuestionAnswersSlugUseCaseRequest): Promise<FetchQuestionAnswersSlugUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return {
      answers,
    }
  }
}
