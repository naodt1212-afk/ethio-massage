import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu, Phone, ArrowRight, Flower2, Activity, Footprints, Home, Building2,
  TreePine, UserRound, Car, Clock, ShieldCheck, CreditCard, MapPin,
  Star, MessageCircle, CalendarDays, HandHeart, Sparkles, Send, X,
} from "lucide-react";

import logo from "@/assets/logo-ethiomassage.png";
import heroImg from "@/assets/hero-therapist.jpg";
import indoorImg from "@/assets/indoor-room.jpg";
import outdoorImg from "@/assets/outdoor-gazebo.jpg";
import saraImg from "@/assets/therapist-sara.jpg";
import helenImg from "@/assets/therapist-helen.jpg";
import liyaImg from "@/assets/therapist-liya.jpg";

const PHONE = "+251936639092";
const TEL_HREF = "tel:+251936639092";
const WHATSAPP_URL = "https://wa.me/251936639092";
const TELEGRAM_URL = "https://t.me/+251936639092";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ethiomassage — Professional Massage Therapy Where You Are" },
      { name: "description", content: "Indoor & outdoor massage services in Addis Ababa. Swedish, Deep Tissue, Sports, Relaxation. Certified therapists, 24/7 booking via WhatsApp & Telegram." },
      { property: "og:title", content: "Ethiomassage — Relax. Renew. Rejuvenate." },
      { property: "og:description", content: "Professional massage therapy at home, hotel, or outdoors. Book in seconds via WhatsApp or Telegram." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: HandHeart, name: "Swedish Massage" },
  { icon: Activity, name: "Deep Tissue Massage" },
  { icon: Flower2, name: "Relaxation Massage" },
  { icon: Footprints, name: "Sports Massage" },
  { icon: Home, name: "Home Service" },
  { icon: Building2, name: "Hotel Service" },
];

const features = [
  { icon: UserRound, label: "Professional Therapists" },
  { icon: Car, label: "We Come To You" },
  { icon: Clock, label: "24/7 Booking" },
  { icon: ShieldCheck, label: "Safe & Private" },
  { icon: CreditCard, label: "Easy Payment" },
  { icon: MapPin, label: "Addis Ababa Coverage" },
];

const therapists = [
  { name: "Sara M.", img: saraImg },
  { name: "Helen T.", img: helenImg },
  { name: "Liya A.", img: liyaImg },
];

function Leaves({ className = "" }: { className?: string }) {
  return <Sparkles className={`h-4 w-4 text-accent ${className}`} aria-hidden />;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <Leaves />
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
        {children}
      </h2>
      <Leaves className="scale-x-[-1]" />
    </div>
  );
}

function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4 bg-black/60 backdrop-blur-sm animate-fade-up" onClick={onClose}>
      <div className="w-full max-w-sm bg-background rounded-3xl shadow-soft p-6 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 h-9 w-9 rounded-full grid place-items-center hover:bg-muted transition">
          <X className="h-5 w-5" />
        </button>
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-cream grid place-items-center mb-3">
            <CalendarDays className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-display text-xl font-semibold">Book Your Massage</h3>
          <p className="text-sm text-muted-foreground mt-1">Choose how you'd like to contact us</p>
        </div>
        <div className="mt-5 space-y-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full rounded-2xl bg-whatsapp text-white px-4 py-3 font-medium shadow-soft hover:brightness-105 transition">
            <span className="h-10 w-10 rounded-full bg-white/15 grid place-items-center">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span className="flex-1 text-left">
              <span className="block">WhatsApp</span>
              <span className="block text-xs opacity-90">{PHONE}</span>
            </span>
            <ArrowRight className="h-5 w-5" />
          </a>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 w-full rounded-2xl bg-[#229ED9] text-white px-4 py-3 font-medium shadow-soft hover:brightness-105 transition">
            <span className="h-10 w-10 rounded-full bg-white/15 grid place-items-center">
              <Send className="h-5 w-5" />
            </span>
            <span className="flex-1 text-left">
              <span className="block">Telegram</span>
              <span className="block text-xs opacity-90">{PHONE}</span>
            </span>
            <ArrowRight className="h-5 w-5" />
          </a>
          <a href={TEL_HREF} className="flex items-center gap-3 w-full rounded-2xl bg-primary text-primary-foreground px-4 py-3 font-medium shadow-soft hover:brightness-110 transition">
            <span className="h-10 w-10 rounded-full bg-white/15 grid place-items-center">
              <Phone className="h-5 w-5" />
            </span>
            <span className="flex-1 text-left">
              <span className="block">Call Directly</span>
              <span className="block text-xs opacity-90">{PHONE}</span>
            </span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [bookOpen, setBookOpen] = useState(false);
  const openBook = () => setBookOpen(true);

  return (
    <div className="min-h-screen bg-[oklch(0.985_0.005_90)] pb-28">
      {/* Header */}
      <header className="sticky top-0 z-40 pt-3 px-3">
        <div className="mx-auto max-w-5xl bg-background rounded-3xl shadow-card px-4 py-3 flex items-center justify-between">
          <button aria-label="Open menu" className="p-2 rounded-full hover:bg-muted transition">
            <Menu className="h-6 w-6 text-foreground" />
          </button>
          <img
            src={logo}
            alt="Ethiomassage — Relax. Renew. Rejuvenate."
            width={1536}
            height={512}
            className="h-12 md:h-14 w-auto object-contain"
          />
          <a href={TEL_HREF} aria-label="Call us" className="h-11 w-11 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-soft hover:scale-105 transition">
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-3 mt-4">
        <div className="mx-auto max-w-5xl bg-background rounded-3xl overflow-hidden shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-6 md:p-10 flex flex-col justify-center animate-fade-up">
              <h1 className="font-display leading-[1.05]">
                <span className="block text-4xl md:text-5xl font-bold text-foreground">Professional</span>
                <span className="block text-4xl md:text-5xl font-bold text-accent mt-1">Massage Therapy</span>
                <span className="block font-script text-3xl md:text-4xl text-primary mt-2 relative w-fit">
                  Where You Are
                  <span className="absolute -bottom-1 left-0 h-[3px] w-24 bg-accent rounded-full" />
                </span>
              </h1>
              <p className="mt-6 text-foreground/80 text-base md:text-lg leading-snug">
                Indoor & Outdoor<br/>Massage Services
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={openBook} className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 font-medium shadow-soft hover:bg-primary/90 transition">
                  Book Now
                  <span className="h-7 w-7 rounded-full bg-background text-primary grid place-items-center group-hover:translate-x-0.5 transition">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>
                <a href={TEL_HREF} className="inline-flex items-center gap-2 rounded-full bg-background border-2 border-accent text-accent px-5 py-2 font-medium hover:bg-accent/5 transition">
                  Call Us <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative h-72 md:h-auto">
              <img src={heroImg} alt="Professional massage therapist at work" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover" />
              <div className="md:hidden absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
            </div>
          </div>
          <svg viewBox="0 0 600 60" className="block w-full" preserveAspectRatio="none" aria-hidden>
            <path d="M0,30 C150,70 300,0 600,40 L600,60 L0,60 Z" fill="oklch(0.42 0.07 175)" />
            <path d="M0,45 C200,15 400,55 600,30 L600,60 L0,60 Z" fill="oklch(0.72 0.12 80)" opacity="0.85" />
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="px-3 mt-6">
        <div className="mx-auto max-w-5xl bg-background rounded-3xl shadow-card p-5 md:p-8">
          <SectionTitle>Our Services</SectionTitle>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {services.map(({ icon: Icon, name }) => (
              <button key={name} onClick={openBook} className="bg-background border border-border/60 rounded-2xl shadow-card p-3 flex flex-col items-center text-center hover:-translate-y-0.5 hover:shadow-soft transition">
                <Icon className="h-7 w-7 text-primary" strokeWidth={1.8} />
                <p className="mt-2 text-[11px] md:text-sm font-medium text-foreground leading-tight">{name}</p>
              </button>
            ))}
          </div>
          <div className="mt-5 text-center">
            <button onClick={openBook} className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all">
              See All Services <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Indoor / Outdoor */}
      <section className="px-3 mt-5">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Indoor Massage", sub: "We come to your Home or Hotel", img: indoorImg, Icon: Home },
            { title: "Outdoor Massage", sub: "Garden, Event or Open Space", img: outdoorImg, Icon: TreePine },
          ].map(({ title, sub, img, Icon }) => (
            <article key={title} className="relative rounded-3xl overflow-hidden shadow-card h-72 group">
              <img src={img} alt={title} width={1024} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
              <div className="absolute top-4 left-4 h-12 w-12 rounded-full bg-background grid place-items-center shadow-card">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-display text-2xl font-semibold">{title}</h3>
                <p className="text-sm mt-1 opacity-90">{sub}</p>
                <button onClick={openBook} className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground pl-4 pr-1.5 py-1.5 font-medium text-sm hover:brightness-105 transition">
                  Book Now
                  <span className="h-6 w-6 rounded-full bg-background/95 text-accent grid place-items-center">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="px-3 mt-7">
        <div className="mx-auto max-w-5xl">
          <SectionTitle>Why Choose Ethiomassage?</SectionTitle>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-cream grid place-items-center shadow-card">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                </div>
                <p className="mt-2 text-[11px] md:text-sm font-medium text-foreground leading-tight max-w-[6rem]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapists */}
      <section className="px-3 mt-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground">Our Therapists</h2>
            <button onClick={openBook} className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
              View All <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {therapists.map(({ name, img }) => (
              <article key={name} className="bg-background rounded-2xl overflow-hidden shadow-card hover:-translate-y-0.5 transition">
                <div className="aspect-square overflow-hidden">
                  <img src={img} alt={`${name} — professional spa therapist`} width={768} height={768} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-2.5 text-center">
                  <p className="font-semibold text-sm text-foreground">{name}</p>
                  <div className="mt-1 flex items-center justify-center gap-0.5">
                    {[0,1,2,3,4].map(i => (
                      <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                    ))}
                    <span className="ml-1 text-[11px] text-muted-foreground">5.0</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Floating contact buttons */}
      <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-2 items-end">
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Book via Telegram"
          className="inline-flex items-center gap-2 rounded-full bg-[#229ED9] text-white pl-2 pr-4 py-2 shadow-soft hover:scale-105 transition"
        >
          <span className="h-9 w-9 rounded-full bg-white/15 grid place-items-center">
            <Send className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold leading-tight">Telegram</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Book via WhatsApp"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white pl-2 pr-4 py-2 shadow-soft hover:scale-105 transition"
        >
          <span className="h-9 w-9 rounded-full bg-white/15 grid place-items-center">
            <MessageCircle className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold leading-tight">WhatsApp</span>
        </a>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-3 left-3 right-3 z-40">
        <div className="mx-auto max-w-md bg-background rounded-full shadow-soft border border-border/60 px-3 py-2 grid grid-cols-4">
          {[
            { Icon: Home, label: "Home", active: true, onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
            { Icon: HandHeart, label: "Services", onClick: openBook },
            { Icon: CalendarDays, label: "Booking", onClick: openBook },
            { Icon: Phone, label: "Contact", onClick: openBook },
          ].map(({ Icon, label, active, onClick }) => (
            <button key={label} onClick={onClick} className={`flex flex-col items-center gap-0.5 py-1 ${active ? "text-primary" : "text-muted-foreground"}`}>
              <Icon className={`h-5 w-5 ${active ? "fill-primary/10" : ""}`} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      <BookingModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </div>
  );
}
