"use client";
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { DashboardSnapshot } from '@/components/DashboardSnapshot';
import { Solutions } from '@/components/Solutions';
import { CustomSolutions } from '@/components/CustomSolutions';
import { Migration } from '@/components/Migration';
import { Reviews } from '@/components/Reviews';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <DashboardSnapshot />
      <Solutions />
      <CustomSolutions />
      <Migration />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
