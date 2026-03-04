import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// PUT - Update doctor
export async function PUT(request, { params }) {
  try {

    const { id } = await params;
    const doctorId = parseInt(id);
    
    const body = await request.json();

    const doctor = await prisma.doctor.update({
      where: { id: doctorId },
      data: body,
    });

    return NextResponse.json(doctor);
  } catch (error) {
    console.error('Error updating doctor:', error);
    return NextResponse.json(
      { error: 'Failed to update doctor' },
      { status: 500 }
    );
  }
}

// DELETE - Hapus doctor
export async function DELETE(request, { params }) {
  try {

    const { id } = await params;
    const doctorId = parseInt(id);

    await prisma.doctor.delete({
      where: { id: doctorId },
    });

    return NextResponse.json({ 
      success: true,
      message: 'Doctor deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    return NextResponse.json(
      { error: 'Failed to delete doctor' },
      { status: 500 }
    );
  }
}