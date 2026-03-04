import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET - Ambil semua messages
export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

// POST - Tambah message baru
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json(newMessage);
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 }
    );
  }
}