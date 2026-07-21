import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {
  QuestionsData,
  QuestionEntry,
} from '../../in-memory-data/questions-data';
import { Question } from '../../interfaces/question';
import { Tip } from '../../interfaces/tip';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions_investors = this.formatQuestionsData(
      QuestionsData.INVESTOR_QUESTIONS
    );
    const questions_customers = this.formatQuestionsData(
      QuestionsData.CUSTOMER_QUESTIONS
    );

    const tips_investors = this.formatTipsData(QuestionsData.INVESTOR_TIPS);
    const tips_customers = this.formatTipsData(QuestionsData.CUSTOMER_TIPS);
    const tips_investors_factual = this.formatTipsData(
      QuestionsData.INVESTOR_FACTUAL_TIPS
    );
    const tips_customers_factual = this.formatTipsData(
      QuestionsData.CUSTOMER_FACTUAL_TIPS
    );

    return {
      questions_investors,
      questions_customers,
      tips_investors,
      tips_customers,
      tips_investors_factual,
      tips_customers_factual,
    };
  }

  genId(questions: Question[]): number {
    return questions.length > 0
      ? Math.max(...questions.map((question) => question.id)) + 1
      : 11;
  }

  private formatQuestionsData(
    questionsArray: Array<QuestionEntry>
  ): Array<Question> {
    let questions: Array<Question> = [];
    let id = 1;

    questionsArray = this.shuffle([...questionsArray]);
    questionsArray.forEach((entry) => {
      questions.push({
        id: id++,
        question: entry.text,
        ...(entry.factual ? { factual: true } : {}),
      });
    });

    return questions;
  }

  private formatTipsData(tipsArray: Array<string>): Array<Tip> {
    let tips: Array<Tip> = [];
    let id = 1;

    tipsArray = this.shuffle([...tipsArray]);
    tipsArray.forEach((tipText) => {
      tips.push({
        id: id++,
        tip: tipText,
      });
    });

    return tips;
  }

  private shuffle<T>(array: Array<T>): Array<T> {
    var currentIndex = array.length,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
