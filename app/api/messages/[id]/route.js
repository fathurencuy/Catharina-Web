import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// DELETE - Hapus message
export async function DELETE(request, { params }) {
  try {

    const { id } = await params;
    const messageId = parseInt(id);

    await prisma.message.delete({
      where: { id: messageId },
    });

    return NextResponse.json({ 
      success: true,
      message: 'Message deleted' 
    });
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    );
  }
}