import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import Sequelize from 'sequelize';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// Load config
const configPath = path.resolve(__dirname, '../config/config.json');
const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const config = configData[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const modelFiles = fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  });
for (const file of modelFiles) {
  try {
    const modelPath = path.join(__dirname, file);
    const modelUrl = pathToFileURL(modelPath).href; // Convert to file:// URL
    const modelModule = await import(modelUrl);
    const model = modelModule.default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  } catch (error) {
    console.error(`Error importing model ${file}:`, error);
  }
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;