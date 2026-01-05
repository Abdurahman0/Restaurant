import { NextResponse } from 'next/server'
import connectToDatabase from '@/libs/mongodb'
import Food from '@/models/Foods'

export async function GET() {
	await connectToDatabase()
	const foods = await Food.find().lean()
	return NextResponse.json(foods)
}

export async function POST(req: Request) {
	await connectToDatabase()

	const body = await req.json()

	const { name, description, price, image, category, recommended, seasonal } =
		body

	if (
		!name?.en ||
		!name?.uz ||
		!description?.en ||
		!description?.uz ||
		!price ||
		!image ||
		!category
	) {
		console.log('VALIDATION FAILED:', {
			name,
			description,
			price,
			image,
			category,
		})

		return NextResponse.json(
			{ error: 'Missing required fields' },
			{ status: 400 }
		)
	}

	const newFood = await Food.create({
		name,
		description,
		price,
		image,
		category,
		recommended: Boolean(recommended),
		seasonal: Boolean(seasonal),
	})

	return NextResponse.json(newFood, { status: 201 })
}
