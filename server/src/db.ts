import { MongoClient, Db } from 'mongodb';

let client: MongoClient | null = null;
let db: Db | null = null;

export async function connectDB(): Promise<Db> {
  if (db) {
    return db;
  }

  const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/u2-brochure';

  try {
    client = new MongoClient(mongoUri);
    await client.connect();
    console.log('✓ Connected to MongoDB');

    db = client.db();
    
    // Create index for efficient queries
    const collection = db.collection('userPreferences');
    await collection.createIndex({ userId: 1 });
    
    return db;
  } catch (error) {
    console.error('✗ MongoDB connection failed:', error);
    throw error;
  }
}

export async function getDB(): Promise<Db> {
  if (!db) {
    throw new Error('Database not initialized. Call connectDB first.');
  }
  return db;
}

export async function closeDB(): Promise<void> {
  if (client) {
    await client.close();
    console.log('✓ MongoDB connection closed');
    client = null;
    db = null;
  }
}
