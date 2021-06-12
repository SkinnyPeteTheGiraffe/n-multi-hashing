/* eslint-disable */
const fs = require('fs');
const path = require('path');
/* eslint-enable */

const deleteFolderRecursive = (filePath) => {
    if (fs.existsSync(filePath)) {
        fs.readdirSync(filePath).forEach((file) => {
            const curPath = path.join(filePath, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(filePath);
    }
};

const folder = process.argv.slice(2)[0];

if (folder) {
    deleteFolderRecursive(path.join(__dirname, '../dist', folder));
} else {
    deleteFolderRecursive(path.join(__dirname, '../dist/cjs'));
    deleteFolderRecursive(path.join(__dirname, '../dist/esm'));
    deleteFolderRecursive(path.join(__dirname, '../dist/umd'));
    deleteFolderRecursive(path.join(__dirname, '../dist/types'));
}
