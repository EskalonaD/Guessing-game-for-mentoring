export interface Message {
    text: string;
    person: 'guesser' | 'puzzler';
    stop?: boolean;
}

export type ScrollDirection = 'top' | 'bottom';