/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import { open } from 'sqlite';

async function writeInfo(dbSettings) {
  const db = await open(dbSettings);
  const result = await db.all('SELECT * FROM food_inspection');
  return result;
}


export default writeInfo;