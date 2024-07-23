

import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request, { params }) {
  const id = params.id;
  const post = await prisma.post.findUnique({
    where: { id },
  });
  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  const id = params.id;
  const { title, content } = await request.json();
  
  try {
    const updatedPost = await prisma.post.update({
      where: { id },
      data: { title, content },
    });
    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating post' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const id = params.id;
  
  const post = await prisma.post.delete({
    where: { id }
  });
  
  return NextResponse.json(post);
}