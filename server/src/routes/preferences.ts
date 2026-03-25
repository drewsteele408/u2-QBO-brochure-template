import { Router, Request, Response } from 'express';
import { getDB } from '../db.js';
import { UserPreference, UserPreferenceRequest } from '../models/UserPreference.js';

const router = Router();

/**
 * GET /api/preferences/dark-mode/:userId
 * Retrieve user's dark mode preference
 */
router.get('/dark-mode/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      res.status(400).json({ error: 'userId is required' });
      return;
    }

    const db = await getDB();
    const preference = await db
      .collection<UserPreference>('userPreferences')
      .findOne({ userId });

    if (!preference) {
      // Return default preference if not found
      res.json({ userId, darkMode: false, isNew: true });
      return;
    }

    res.json({ ...preference, isNew: false });
  } catch (error) {
    console.error('Error fetching preference:', error);
    res.status(500).json({ error: 'Failed to fetch preference' });
  }
});

/**
 * POST /api/preferences/dark-mode
 * Save or create user's dark mode preference
 */
router.post('/dark-mode', async (req: Request, res: Response) => {
  try {
    const { userId, darkMode } = req.body as UserPreferenceRequest;

    if (!userId || typeof darkMode !== 'boolean') {
      res.status(400).json({ error: 'userId and darkMode are required' });
      return;
    }

    const db = await getDB();
    const now = new Date();

    const result = await db
      .collection<UserPreference>('userPreferences')
      .updateOne(
        { userId },
        {
          $set: {
            darkMode,
            updatedAt: now,
          },
          $setOnInsert: {
            createdAt: now,
          },
        },
        { upsert: true }
      );

    res.status(201).json({
      success: true,
      userId,
      darkMode,
      created: result.upsertedId !== null,
    });
  } catch (error) {
    console.error('Error saving preference:', error);
    res.status(500).json({ error: 'Failed to save preference' });
  }
});

/**
 * PATCH /api/preferences/dark-mode/:userId
 * Update user's dark mode preference
 */
router.patch('/dark-mode/:userId', async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { darkMode } = req.body;

    if (!userId || typeof darkMode !== 'boolean') {
      res.status(400).json({ error: 'userId and darkMode are required' });
      return;
    }

    const db = await getDB();

    const result = await db
      .collection<UserPreference>('userPreferences')
      .updateOne(
        { userId },
        {
          $set: {
            darkMode,
            updatedAt: new Date(),
          },
        }
      );

    if (result.matchedCount === 0) {
      // If not found, create new preference
      await db.collection<UserPreference>('userPreferences').insertOne({
        userId,
        darkMode,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    res.json({
      success: true,
      userId,
      darkMode,
    });
  } catch (error) {
    console.error('Error updating preference:', error);
    res.status(500).json({ error: 'Failed to update preference' });
  }
});

export default router;
