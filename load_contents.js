const fs = require('fs');
const { promisify } = require('util');
const path = process.argv[2];

async function getFileContents (path) {

  try {

    const exists = await promisify(fs.exists)(path);

    if (!exists) {

      throw new Error('File does not exist');

    }

    console.log('exists');

    const stats = await promisify(fs.stat)(path);

    console.log(stats);

    if (stats.size <= 0) {

      new Error('File exists but there is no content')

    }

    const buffer = await promisify(fs.readFile)(path);

    return buffer;

  } catch (err) {

    throw err;

  }

}

(async () => {

  try {

    await getFileContents(path);

  } catch (err) {

    console.log('getFileContents:: Error while getting file contents. ', err)

  }

})();