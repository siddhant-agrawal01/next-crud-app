import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function PUT(request) {
  const { id, title, content } = await request.json();
  
  try {
    const updatedPost = await prisma.post.update({
      where: { id: parseInt(id) },
      data: { title, content },
    });
    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating post' }, { status: 500 });
  }
}