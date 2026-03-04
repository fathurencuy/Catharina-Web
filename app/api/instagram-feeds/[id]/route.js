import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// PUT - Update feed
export async function PUT(request, { params }) {
  try {
   
    const { id } = await params;
    const feedId = parseInt(id);
    
    const body = await request.json();

    const feed = await prisma.instagramFeed.update({
      where: { id: feedId },
      data: body,
    });

    return NextResponse.json(feed);
  } catch (error) {
    console.error('Error updating feed:', error);
    return NextResponse.json(
      { error: 'Failed to update feed' },
      { status: 500 }
    );
  }
}

// DELETE - Hapus feed
export async function DELETE(request, { params }) {
  try {

    const { id } = await params;
    const feedId = parseInt(id);

    await prisma.instagramFeed.delete({
      where: { id: feedId },
    });

    return NextResponse.json({ 
      success: true,
      message: 'Feed deleted' 
    });
  } catch (error) {
    console.error('Error deleting feed:', error);
    return NextResponse.json(
      { error: 'Failed to delete feed' },
      { status: 500 }
    );
  }
}