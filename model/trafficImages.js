const mongoose = require('mongoose');

const TrafficSchema = mongoose.Schema({
		CameraID: { type: Number, required: true },
		Latitude: { type: Number, required: true },
		Longitude: { type: Number, required: true },
		ImageLink: { type: String, required: true }
	},
	{
		timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('traffic_images', TrafficSchema);
