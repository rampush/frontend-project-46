import fs from 'fs';
import path from 'path';

const gendiff = (filepath1, filepath2) => {
  const data1 = JSON.parse(
    fs.readFileSync(
      path.resolve(process.cwd(), `_fixtures_/${filepath1}`),
      'utf-8'
    )
  );

  const data2 = JSON.parse(
    fs.readFileSync(
      path.resolve(process.cwd(), `_fixtures_/${filepath2}`),
      'utf-8'
    )
  );

  return [data1, data2];
};

export default gendiff;
