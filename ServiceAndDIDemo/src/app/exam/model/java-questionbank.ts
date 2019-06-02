import { IQuestion } from './iQuestion';

export class JavaQuestionBank extends IQuestion {
    askQuestion(): string {
        return "What is Java?";
    }
}