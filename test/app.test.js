var request = require('supertest');
var server = "http://localhost:3000";

describe('GET /api/traffic/images', function() {
  it('should return 200', function(done) {
    request(server)
      .get('/api/traffic/images')
      .expect(200, done);
  });
});
