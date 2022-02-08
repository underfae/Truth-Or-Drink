export interface SharedDialogData {
  name?: string;
  level?: number;
  submitButton: string;
  title: string;
  imageUrl?: string;
  cardsCount?: number;
  category?: string;
  game: boolean;
  questions: [];
  dares: [];
}
