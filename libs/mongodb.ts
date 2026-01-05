// lib/mongodb.ts
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
	throw new Error('Please define the MONGODB_URI environment variable')
}

// Extend globalThis to cache connection across hot reloads (Next.js dev)
interface MongooseGlobal {
	mongoose?: {
		conn: typeof mongoose.connection | null
		promise: Promise<typeof mongoose.connection> | null
	}
}

// Cast globalThis
const globalWithMongoose = globalThis as unknown as MongooseGlobal

// Initialize cached if it doesn't exist
if (!globalWithMongoose.mongoose) {
	globalWithMongoose.mongoose = { conn: null, promise: null }
}

const cached = globalWithMongoose.mongoose

async function connectToDatabase(): Promise<typeof mongoose.connection> {
	// Return cached connection if it exists
	if (cached.conn) return cached.conn

	// Create a new promise if it doesn't exist
	if (!cached.promise) {
		cached.promise = mongoose.connect(MONGODB_URI!).then(m => m.connection)
	}

	// Wait for connection and cache it
	cached.conn = await cached.promise
	return cached.conn
}

export default connectToDatabase
