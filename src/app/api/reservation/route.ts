import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(6).max(40),
  date: z.string().min(1).max(20),
  time: z.string().min(1).max(20),
  guests: z.string().min(1).max(10),
  comment: z.string().max(1000).optional().nullable(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Неверные данные формы", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const reservation = await db.reservation.create({
      data: {
        name: parsed.data.name,
        phone: parsed.data.phone,
        date: parsed.data.date,
        time: parsed.data.time,
        guests: parsed.data.guests,
        comment: parsed.data.comment ?? null,
      },
    });

    return NextResponse.json({ ok: true, id: reservation.id });
  } catch (e) {
    console.error("Reservation error:", e);
    return NextResponse.json(
      { error: "Не удалось сохранить заявку" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const reservations = await db.reservation.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });
    return NextResponse.json({ reservations });
  } catch (e) {
    console.error("Fetch reservations error:", e);
    return NextResponse.json(
      { error: "Не удалось получить заявки" },
      { status: 500 },
    );
  }
}
