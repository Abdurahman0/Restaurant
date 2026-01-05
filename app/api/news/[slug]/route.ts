// app/api/news/[slug]/route.ts
import { NextResponse } from 'next/server'
import connectToDatabase from '@/libs/mongodb'
import News from '@/models/News'

export async function GET(req: Request) {
	const url = new URL(req.url)
	const slug = url.pathname.split('/').pop() // get the last part of the URL
	console.log('Slug from URL:', slug)

	await connectToDatabase()
	const news = await News.findOne({ slug }).lean()
	if (!news) {
		return NextResponse.json({ error: 'News not found' }, { status: 404 })
	}
	return NextResponse.json(news)
}
