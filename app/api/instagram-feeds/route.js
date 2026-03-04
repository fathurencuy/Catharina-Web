import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET - Ambil semua feeds
export async function GET() {
  try {
    const feeds = await prisma.instagramFeed.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(feeds);
  } catch (error) {
    console.error('Error fetching feeds:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feeds' },
      { status: 500 }
    );
  }
}

// POST - Tambah feed baru
export async function POST(request) {
  try {
    const body = await request.json();
    const { title, href, thumbnail } = body;

    const feed = await prisma.instagramFeed.create({
      data: {
        title,
        href,
        thumbnail: thumbnail || null,
      },
    });

    return NextResponse.json(feed);
  } catch (error) {
    console.error('Error creating feed:', error);
    return NextResponse.json(
      { error: 'Failed to create feed' },
      { status: 500 }
    );
  }
}