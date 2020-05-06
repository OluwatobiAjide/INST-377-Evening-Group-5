/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
// eslint-disable-next-line linebreak-style
import { open } from 'sqlite';

const fetch = require('node-fetch');

async function writeInfo(dbSettings, baseURL) {
  const db = await open(dbSettings);

  await fetch(baseURL)
    .then((r) => r.json())
    .then((data) => {
      db.run(
        'CREATE TABLE IF NOT EXISTS food_inspection(establishment_id integer  , name text , category text , inspection_date text, inspection_result text, city text, state text, zip integer, address_line_1 text, address_line_2 text, inspection_type text, owner text, establishment_type text )',
      );

      for (const key in data) {
        const info = data[key];
        if (
          info.category === 'Restaurant'
          || info.category === 'Carry-out'
          || info.category === 'Fast Food'
        ) {
          const param = [
            info.establishment_id,
            info.name,
            info.category,
            info.inspection_date,
            info.inspection_results,
            info.city,
            info.state,
            info.zip,
            info.address_line_1,
            info.address_line_2,
            info.inspection_type,
            info.owner,
            info.type,
          ];

          const sql = 'INSERT INTO food_inspection VALUES(:establishment_id, :name , :category , date(:inspection_date) ,:inspection_results, :city , :state , :zip , :address_line_1 , :address_line_2 , :inspection_type , :owner , :type)';

          db.run(sql, param, (err) => {
            if (err) {
              return console.error(err.message);
            }
          });
        }
      }

      console.log('Insert Complete');
    });
}

export default writeInfo;
