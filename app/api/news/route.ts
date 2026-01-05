import { NextResponse } from 'next/server'
import connectToDatabase from '@/libs/mongodb'
import News from '@/models/News'

export async function GET() {
	await connectToDatabase()
	const news = await News.find().lean()
	return NextResponse.json(news)
}

export async function POST(req: Request) {
	await connectToDatabase()

	const body = await req.json()
	const { slug, title, paragraphs, images } = body

	if (
		!slug ||
		!title?.en ||
		!title?.uz ||
		!paragraphs?.en ||
		!paragraphs?.uz ||
		!images?.main ||
		!images?.gallery
	) {
		return NextResponse.json(
			{ error: 'Missing required fields' },
			{ status: 400 }
		)
	}

	const newNews = await News.create({
		slug,
		title,
		paragraphs,
		images,
	})

	return NextResponse.json(newNews, { status: 201 })
}
