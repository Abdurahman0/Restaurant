import mongoose from 'mongoose'

const NewsSchema = new mongoose.Schema(
	{
		slug: {
			type: String,
			required: true,
			unique: true,
		},

		title: {
			en: { type: String, required: true },
			uz: { type: String, required: true },
		},

		paragraphs: {
			en: [{ type: String, required: true }],
			uz: [{ type: String, required: true }],
		},

		images: {
			main: { type: String, required: true },
			gallery: [{ type: String, required: true }],
		},
	},
	{ timestamps: true }
)

export default mongoose.models.News || mongoose.model('News', NewsSchema)
