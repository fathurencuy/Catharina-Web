import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validasi tipe file
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Only JPG, PNG, and WebP images are allowed' },
        { status: 400 }
      );
    }

    // Validasi ukuran file (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(7);
    const extension = file.name.split('.').pop();
    const filename = `feed-${timestamp}-${randomString}.${extension}`;

    // Path untuk menyimpan file
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'feeds');
    
    // Buat folder jika belum ada
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      console.error('Error creating directory:', error);
    }

    // Save file
    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);

    // Return URL yang bisa diakses dari browser
    const imageUrl = `/uploads/feeds/${filename}`;

    return NextResponse.json({
      success: true,
      url: imageUrl,
      filename: filename,
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}