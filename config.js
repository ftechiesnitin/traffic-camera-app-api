var config = module.exports = {};

// App configuration
config.env = 'dev';
config.port = '3000';

// mongo config
config.db = {
  host: 'localhost',
  dbName: 'traffic'
}

// LTA API INFO
config.lta = {
  accountKey: 'YOUR_LTA_API_KEY',
  apis: {
    trafficImages: 'http://datamall2.mytransport.sg/ltaodataservice/Traffic-Images'
  }
}
