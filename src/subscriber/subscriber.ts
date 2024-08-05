export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
}

export interface Photo {
  id: number;
  url: string;
}

export type CRUDEvent = 'created' | 'read' | 'updated' | 'deleted';

interface Database {
  users: User[];
  articles: Article[];
  photos: Photo[];
}

export const db: SubscribableDatabase<Database> = {};

db.subscribe<'users'>('usersCreated', (users) => {});
db.subscribe<'articles'>('articlesRead', (articles) => {});
