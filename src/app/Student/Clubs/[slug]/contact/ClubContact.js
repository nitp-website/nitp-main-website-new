"use client";

import React from "react";
import { Mail, Globe, Instagram, Linkedin, Sparkles, ArrowUpRight, Twitter, Zap, Users2, Flame, ShieldCheck, Youtube, Facebook, Github } from "lucide-react";

const ContactCard = ({ item }) => {
  return (
    <a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm ${item.brandHoverBorder}`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className={`absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl ${item.glowColor}`}
        />
      </div>
      <div className="relative z-10 flex flex-col justify-between h-full w-full min-w-0">
        <div>
          <div className="flex items-center justify-between">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-700 transition-all duration-300 group-hover:scale-105 ${item.brandBg} ${item.brandText}`}
            >
              <item.icon className="h-4 w-4" />
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors duration-300 group-hover:bg-slate-100 group-hover:text-slate-700">
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
          <h3 className="mt-4 text-sm font-bold text-slate-800 tracking-tight">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="mt-1 break-all text-xs text-slate-500 font-normal leading-relaxed">
              {item.subtitle}
            </p>
          )}
        </div>
        <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-slate-800 transition-colors duration-200">
            {item.button}
          </span>
        </div>
      </div>
    </a>
  );
};

const ClubContact = ({ club }) => {
  const email = club?.email;
  const socialLinks = club?.social_links || {};
  const website = socialLinks.website || "";
  
  const instagram = socialLinks.instagram || "";
  const linkedin = socialLinks.linkedin || "";
  const twitter = socialLinks.twitter || "";
  const youtube = socialLinks.youtube || "";
  const facebook = socialLinks.facebook || "";
  const github = socialLinks.github || "";

  const name = club?.name || "Our Community";

  const primaryCards = [
    email ? {
      title: "Email Us",
      href: `mailto:${email}`,
      icon: Mail,
      button: "Send Email",
      brandBg: "group-hover:bg-red-50",
      brandText: "group-hover:text-red-800",
      brandHoverBorder: "hover:border-red-200",
      glowColor: "bg-red-500/10",
    } : null,
    website ? {
      title: "Official Website",
      href: website,
      icon: Globe,
      button: "Explore Site",
      brandBg: "group-hover:bg-red-800",
      brandText: "group-hover:text-white",
      brandHoverBorder: "hover:border-red-200",
      glowColor: "bg-red-500/5",
    } : null,
  ].filter(Boolean);

  const socialPlatforms = [
    { name: "Instagram", href: instagram, icon: Instagram, color: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200" },
    { name: "LinkedIn", href: linkedin, icon: Linkedin, color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" },
    { name: "Twitter", href: twitter, icon: Twitter, color: "hover:bg-slate-900 hover:text-white hover:border-slate-800" },
    { name: "YouTube", href: youtube, icon: Youtube, color: "hover:bg-red-50 hover:text-red-600 hover:border-red-200" },
    { name: "Facebook", href: facebook, icon: Facebook, color: "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300" },
    { name: "GitHub", href: github, icon: Github, color: "hover:bg-slate-800 hover:text-white hover:border-slate-700" },
  ].filter((platform) => Boolean(platform.href && platform.href.trim()));

  const universalHighlights = [
    { label: "Showcase Talent", desc: "Compete and represent at the highest level", icon: Flame, bg: "bg-amber-50 text-amber-600" },
    { label: "Collaborate & Build", desc: "Work together on massive projects and events", icon: Users2, bg: "bg-blue-50 text-blue-600" },
    { label: "Drive Innovation", desc: "Bring fresh ideas and methodologies to life", icon: Zap, bg: "bg-emerald-50 text-emerald-600" },
    { label: "Lead Communities", desc: "Develop management, leadership, and core skills", icon: ShieldCheck, bg: "bg-purple-50 text-purple-600" },
  ];

  return (
    <div className="w-full space-y-8 antialiased">
      <section className="relative overflow-hidden rounded-2xl border border-red-100 bg-white p-5 sm:p-8 shadow-sm">
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-500/5 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-orange-400/5 blur-3xl" />
        </div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 flex flex-col justify-center h-full space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-red-100 w-full text-center sm:text-left">
              <span className="inline-block w-1.5 h-5 bg-red-700 rounded-full"></span>
              <h2 className="text-xl font-extrabold text-red-950 uppercase tracking-wider">
                Connect With {name}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 font-normal max-w-md">
              Whether you want to build cutting-edge systems, share creative projects, 
              or express yourself through cultural networks — find your community here.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {primaryCards.length > 0 && (
              <div className={`grid gap-4 grid-cols-1 ${primaryCards.length > 1 ? "sm:grid-cols-2" : ""} items-stretch w-full`}>
                {primaryCards.map((item) => (
                  <ContactCard key={item.title} item={item} />
                ))}
              </div>
            )}
            {socialPlatforms.length > 0 && (
              <div className="relative overflow-hidden rounded-2xl border border-red-100/80 bg-white p-5 sm:p-6 shadow-sm w-full">
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-red-950 tracking-tight">
                    Follow Us
                  </h3>
                  <p className="text-xs text-gray-500 font-normal mt-0.5">
                    Stay updated with real-time events, and ongoing showcases.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-red-100/60 w-full">
                  {socialPlatforms.map((platform) => {
                    const PlatformIcon = platform.icon;
                    return (
                      <a
                        key={platform.name}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-between rounded-xl border border-red-100/50 bg-red-50/20 p-3 text-xs font-semibold text-red-900 transition-all duration-200 ${platform.color} group/btn flex-1 min-w-[120px]`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <PlatformIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/btn:scale-110" />
                          <span className="truncate">{platform.name}</span>
                        </div>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 shrink-0" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section id="why-join" className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-red-100">
          <span className="inline-block w-1.5 h-5 bg-red-700 rounded-full"></span>
          <h3 className="text-base font-extrabold text-red-950 uppercase tracking-wider">
            Why Should You Join?
          </h3>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {universalHighlights.map((h, idx) => {
            const IconComponent = h.icon;
            return (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl border border-red-100/40 bg-[#f7f5ec]/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-sm shadow-xs"
              >
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${h.bg} transition-transform duration-200 group-hover:scale-105`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                
                <h3 className="mt-4 text-sm font-bold text-red-950 tracking-tight">
                  {h.label}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-500/90 font-normal">
                  {h.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default ClubContact;