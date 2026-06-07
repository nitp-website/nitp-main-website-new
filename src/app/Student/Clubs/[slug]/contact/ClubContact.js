"use client";

import {  Mail, Globe, MapPin, Phone, Instagram, Linkedin, Youtube, Github, Twitter, MessageCircle } from "lucide-react";

const ClubContact = ({ club }) => {
  const contacts = [
    {
      label: "Email",
      value: club?.email,
      icon: Mail,
      type: "email",
    },
    {
      label: "Website",
      value: club?.website,
      icon: Globe,
      type: "link",
    },
    {
      label: "Instagram",
      value: club?.instagram,
      icon: Instagram,
      type: "social",
      color: "text-pink-600",
    },
    {
      label: "LinkedIn",
      value: club?.linkedin,
      icon: Linkedin,
      type: "social",
      color: "text-blue-700",
    },
    {
      label: "Facebook",
      value: club?.facebook,
      icon: Globe,
      type: "social",
      color: "text-blue-600",
    },
    {
      label: "X (Twitter)",
      value: club?.twitter,
      icon: Twitter,
      type: "social",
      color: "text-black",
    },
    {
      label: "YouTube",
      value: club?.youtube,
      icon: Youtube,
      type: "social",
      color: "text-red-600",
    },
    {
      label: "GitHub",
      value: club?.github,
      icon: Github,
      type: "social",
      color: "text-gray-800",
    },
    {
      label: "Discord",
      value: club?.discord,
      icon: MessageCircle,
      type: "social",
      color: "text-indigo-600",
    },
    {
      label: "Phone",
      value: club?.phone,
      icon: Phone,
      type: "phone",
    },
    {
      label: "Address",
      value: club?.address,
      icon: MapPin,
      type: "text",
    },
  ].filter((item) => item.value);

  const isEmpty = contacts.length === 0;

  // Get primary contact (first one)
  const primaryContact = contacts[0];
  const socialLinks = contacts.filter((c) => c.type === "social");
  const otherContacts = contacts.filter((c) => c.type !== "social");

  return (
    <section className="overflow-hidden min-h-screen rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-t-4 border-red-600 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
            <Phone className="h-5 w-5 text-red-700" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Connect With Us
            </h1>
            <p className="text-sm text-gray-500">
              Stay connected through email, phone and social platforms.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8">
          {isEmpty ? (
            <div className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
              <div className="rounded-full bg-red-50 p-3">
                <Phone className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                Contact Details Unavailable
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Information will be updated soon.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Primary Contact Card */}
              {primaryContact && (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                      <primaryContact.icon className="h-5 w-5 text-red-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-500">
                        {primaryContact.label}
                      </p>
                      {primaryContact.type === "email" && (
                        <a
                          href={`mailto:${primaryContact.value}`}
                          className="text-sm font-semibold text-gray-900 hover:text-red-600"
                        >
                          {primaryContact.value}
                        </a>
                      )}
                      {(primaryContact.type === "link" || primaryContact.type === "phone") && (
                        <a
                          href={
                            primaryContact.type === "phone"
                              ? `tel:${primaryContact.value}`
                              : primaryContact.value?.startsWith("http")
                              ? primaryContact.value
                              : `https://${primaryContact.value}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-gray-900 hover:text-red-600"
                        >
                          {primaryContact.value}
                        </a>
                      )}
                      {primaryContact.type === "text" && (
                        <p className="text-sm font-semibold text-gray-900">
                          {primaryContact.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div>
                  <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Social Platforms
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      const linkUrl = social.value?.startsWith("http")
                        ? social.value
                        : `https://${social.value}`;

                      return (
                        <a
                          key={social.label}
                          href={linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
                        >
                          <Icon className={`h-4 w-4 ${social.color || "text-gray-500"}`} />
                          <span>{social.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Other Contacts List */}
              {otherContacts.length > 1 && (
                <div>
                  <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Other Channels
                  </h2>
                  <div className="space-y-2">
                    {otherContacts.slice(1).map((contact) => {
                      const Icon = contact.icon;

                      return (
                        <div
                          key={contact.label}
                          className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50/50 p-3"
                        >
                          <Icon className="h-4 w-4 text-gray-400" />
                          <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
                              {contact.label}
                            </p>
                            {contact.type === "email" && (
                              <a
                                href={`mailto:${contact.value}`}
                                className="block truncate text-sm font-medium text-gray-700 hover:text-red-600"
                              >
                                {contact.value}
                              </a>
                            )}
                            {contact.type === "link" && (
                              <a
                                href={
                                  contact.value?.startsWith("http")
                                    ? contact.value
                                    : `https://${contact.value}`
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block truncate text-sm font-medium text-gray-700 hover:text-red-600"
                              >
                                {contact.value}
                              </a>
                            )}
                            {contact.type === "phone" && (
                              <a
                                href={`tel:${contact.value}`}
                                className="block truncate text-sm font-medium text-gray-700 hover:text-red-600"
                              >
                                {contact.value}
                              </a>
                            )}
                            {contact.type === "text" && (
                              <p className="text-sm font-medium text-gray-700">
                                {contact.value}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClubContact;