"use client";
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Solutions } from '@/components/Solutions';
import { WhoWeServe } from '@/components/WhoWeServe';
import { Process } from '@/components/Process';
import { CustomSolutions } from '@/components/CustomSolutions';
import { Migration } from '@/components/Migration';
import { Blog } from '@/components/Blog';
import { Footer } from '@/components/Footer';

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Solutions />
      <WhoWeServe />
      <Process />
      <CustomSolutions />
      <Migration />
      <Blog />
      <Footer />
    </main>
  );
}
