import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("place.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        ` 
        
        
                    CREATE TABLE IF NOT EXISTS places (
                        id INTEGER PRIMARY KEY NOT NULL,
                        title TEXT NOT NULL,
                        lat REAL NOT NULL,
                        lng REAL NOT NULL,
                        imageUri TEXT NOT NULL,
                        address TEXT NOT NULL
    
            ) `,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};
