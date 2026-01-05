import mongoose from 'mongoose'

const FoodSchema = new mongoose.Schema(
	{
		name: {
			en: { type: String, required: true },
			uz: { type: String, required: true },
		},
		description: {
			en: { type: String, required: true },
			uz: { type: String, required: true },
		},
		price: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
			enum: [
				'national',
				'salads',
				'main',
				'soups',
				'grill',
				'desserts',
				'drinks',
				'combo',
			],
		},
		recommended: {
			type: Boolean,
			default: false,
		},
		seasonal: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
)

export default mongoose.models.Food || mongoose.model('Food', FoodSchema)
