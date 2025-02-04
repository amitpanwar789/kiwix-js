/**
 * paths.js : Singleton object that contains the paths to the files used in the tests.
*/

import path from 'path';

const rayCharlesBaseFile = path.resolve('./tests/wikipedia_en_ray_charles_2015-06.zimaa');
const gutenbergRoBaseFile = path.resolve('./tests/gutenberg_ro_all_2023-08.zim');
const downloadDir = path.resolve('./tests/');

export default {
    rayCharlesBaseFile: rayCharlesBaseFile,
    gutenbergRoBaseFile: gutenbergRoBaseFile,
    downloadDir: downloadDir
};
