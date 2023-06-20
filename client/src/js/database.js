import { openDB } from 'idb';

const DB_NAME = 'jate';
const DB_VERSION = 1;
const DB_STORE_NAME = 'jate';

const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(DB_STORE_NAME)) {
        db.createObjectStore(DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });
        console.log('jate database created');
      }
    },
  });
};

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const db = await initDB();
  const tx = db.transaction(DB_STORE_NAME, 'readwrite');
  const store = tx.objectStore(DB_STORE_NAME);
  await store.put({ content });
  await tx.complete;
  console.log('Content stored in the database');
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const db = await initDB();
  const tx = db.transaction(DB_STORE_NAME, 'readonly');
  const store = tx.objectStore(DB_STORE_NAME);
  const result = await store.getAll();
  await tx.complete;
  return result;
};

initDB();
