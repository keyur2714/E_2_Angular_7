import { IQuestion } from './iQuestion';

export class AngularQuestionBank extends IQuestion{
    askQuestion(): string {
        return "What is Angular?";
    }    
}