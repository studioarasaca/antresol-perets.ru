"use client";

import { useState } from "react";
import { CalendarDays, Clock, MapPin, Phone, Users, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Reveal } from "./reveal";
import { Ornament } from "./brand";
import { RESTAURANT } from "@/lib/restaurant-data";

const TIME_SLOTS = [
  "13:00", "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00", "22:00",
];

const GUEST_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "10", "12"];

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  comment: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export function Reservation() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<FormState>({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    comment: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const today = new Date().toISOString().split("T")[0];

  const set = <K extends keyof FormState>(key: K, val: FormState[K]) => {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (values.name.trim().length < 2) e.name = "Укажите имя";
    if (!/[\d+()\-\s]{6,}/.test(values.phone)) e.phone = "Укажите телефон";
    if (!values.date) e.date = "Выберите дату";
    if (!values.time) e.time = "Выберите время";
    if (!values.guests) e.guests = "Выберите число гостей";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error("Проверьте поля", {
        description: "Заполните обязательные поля формы.",
      });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Не удалось отправить заявку");
      }
      toast.success("Заявка принята!", {
        description: "Мы свяжемся с вами для подтверждения брони.",
      });
      setValues({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        comment: "",
      });
    } catch (e) {
      toast.error("Ошибка", {
        description:
          e instanceof Error ? e.message : "Попробуйте ещё раз или позвоните нам.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-emerald-mid py-24 sm:py-32"
    >
      <div className="texture-overlay absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="font-cormorant text-sm uppercase tracking-[0.4em] text-gold">
            Контакты
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl">
            Забронировать <span className="text-gold-gradient">стол</span>
          </h2>
          <Ornament className="mx-auto mt-6 h-5 w-48 text-gold/70" />
          <p className="mx-auto mt-6 max-w-2xl font-body text-base text-cream/70 sm:text-lg">
            Оставьте заявку — и мы перезвоним для подтверждения. Или позвоните
            сами: ключ от мансарды — у нас.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Контактная информация */}
          <Reveal className="flex flex-col gap-8">
            <div className="space-y-6">
              <ContactItem
                icon={<MapPin className="h-5 w-5" />}
                label="Адрес"
                value={RESTAURANT.address}
              />
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                label="Телефон"
                value={RESTAURANT.phone}
                href={`tel:${RESTAURANT.phoneRaw}`}
              />
              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-cormorant text-xs uppercase tracking-[0.25em] text-gold-soft">
                    Режим работы
                  </p>
                  <ul className="mt-2 space-y-1">
                    {RESTAURANT.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between gap-6 font-body text-sm text-cream/80"
                      >
                        <span>{h.day}</span>
                        <span className="text-gold">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Декоративная карта-плашка */}
            <div className="relative overflow-hidden border border-gold/20">
              <div className="relative aspect-[16/9] bg-emerald-deep">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,106,0.12),transparent_70%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
                  <MapPin className="h-8 w-8 text-gold" />
                  <p className="font-display text-lg text-cream">
                    ул. Марата, 1/71
                  </p>
                  <p className="font-cormorant text-sm italic text-cream/60">
                    Исторический центр Петербурга
                  </p>
                </div>
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(201,168,106,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,106,0.3)_1px,transparent_1px)] [background-size:32px_32px]" />
              </div>
            </div>
          </Reveal>

          {/* Форма бронирования */}
          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="ornate-corners relative space-y-5 border border-gold/20 bg-emerald-deep/50 p-6 backdrop-blur-sm sm:p-8"
            >
              <h3 className="font-display text-2xl font-semibold text-cream">
                Заявка на бронь
              </h3>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Имя" error={errors.name}>
                  <Input
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Как к вам обращаться"
                    className="border-gold/25 bg-emerald-deep/60 text-cream placeholder:text-cream/40 focus-visible:border-gold focus-visible:ring-gold/30"
                  />
                </Field>
                <Field label="Телефон" error={errors.phone}>
                  <Input
                    value={values.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    type="tel"
                    className="border-gold/25 bg-emerald-deep/60 text-cream placeholder:text-cream/40 focus-visible:border-gold focus-visible:ring-gold/30"
                  />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                <Field
                  label="Дата"
                  error={errors.date}
                  icon={<CalendarDays className="h-4 w-4" />}
                >
                  <Input
                    value={values.date}
                    onChange={(e) => set("date", e.target.value)}
                    type="date"
                    min={today}
                    className="border-gold/25 bg-emerald-deep/60 text-cream placeholder:text-cream/40 focus-visible:border-gold focus-visible:ring-gold/30 [color-scheme:dark]"
                  />
                </Field>
                <Field
                  label="Время"
                  error={errors.time}
                  icon={<Clock className="h-4 w-4" />}
                >
                  <Select
                    value={values.time || undefined}
                    onValueChange={(v) => set("time", v)}
                  >
                    <SelectTrigger className="border-gold/25 bg-emerald-deep/60 text-cream focus:ring-gold/30">
                      <SelectValue placeholder="Выберите" />
                    </SelectTrigger>
                    <SelectContent className="border-gold/25 bg-emerald-deep text-cream">
                      {TIME_SLOTS.map((t) => (
                        <SelectItem
                          key={t}
                          value={t}
                          className="focus:bg-gold/15 focus:text-gold"
                        >
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
                <Field
                  label="Гости"
                  error={errors.guests}
                  icon={<Users className="h-4 w-4" />}
                >
                  <Select
                    value={values.guests}
                    onValueChange={(v) => set("guests", v)}
                  >
                    <SelectTrigger className="border-gold/25 bg-emerald-deep/60 text-cream focus:ring-gold/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-gold/25 bg-emerald-deep text-cream">
                      {GUEST_OPTIONS.map((n) => (
                        <SelectItem
                          key={n}
                          value={n}
                          className="focus:bg-gold/15 focus:text-gold"
                        >
                          {n} {n === "1" ? "гость" : "гостей"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <Field label="Пожелания (необязательно)">
                <Textarea
                  value={values.comment}
                  onChange={(e) => set("comment", e.target.value)}
                  placeholder="Особые пожелания, повод, выбор пространства…"
                  rows={3}
                  className="resize-none border-gold/25 bg-emerald-deep/60 text-cream placeholder:text-cream/40 focus-visible:border-gold focus-visible:ring-gold/30"
                />
              </Field>

              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full bg-gold text-emerald-deep hover:bg-gold-soft disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Отправляем…
                  </>
                ) : (
                  "Отправить заявку"
                )}
              </Button>
              <p className="text-center font-cormorant text-xs italic text-cream/50">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4">
      <span className="mt-1 text-gold">{icon}</span>
      <div>
        <p className="font-cormorant text-xs uppercase tracking-[0.25em] text-gold-soft">
          {label}
        </p>
        <p className="mt-1 font-display text-lg text-cream">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  error,
  icon,
  children,
}: {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="flex items-center gap-1.5 font-cormorant text-xs uppercase tracking-[0.2em] text-cream/70">
        {icon && <span className="text-gold/70">{icon}</span>}
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-red-300">{error}</p>}
    </div>
  );
}
