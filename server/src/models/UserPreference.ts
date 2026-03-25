import { ObjectId } from 'mongodb';

export interface UserPreference {
  _id?: ObjectId;
  userId: string;
  darkMode: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferenceRequest {
  userId: string;
  darkMode: boolean;
}
