export interface Message {
    text: string;
    person: 'guesser' | 'puzzler';
    stop?: boolean;
}