"use client";

import { useState } from "react";

type CredentialId = "coach" | "pilates" | "reiki" | "eft" | "multilingual" | null;

export default function CredentialAccordion() {
  const [openCredential, setOpenCredential] = useState<CredentialId>(null);

  const handleToggle = (id: CredentialId) => {
    setOpenCredential(openCredential === id ? null : id);
  };

  const credentials = [
    {
      id: "coach" as CredentialId,
      label: "Certified Life Coach",
      content: (
        <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-sm">
          <p>
            Dalila is a certified life coach with extensive experience supporting individuals through periods of transition, uncertainty, and personal growth.
          </p>
          <p>
            Her coaching is grounded, practical, and reflective. She helps clients clarify what truly matters, identify patterns that keep them stuck, and move forward with greater confidence and intention.
          </p>
          <p>
            This work is not about fixing you. It&apos;s about creating space for clarity, choice, and meaningful change.
          </p>
        </div>
      ),
    },
    {
      id: "pilates" as CredentialId,
      label: "Pilates & Yoga Instructor",
      content: (
        <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-sm">
          <p>
            With many years of experience teaching Pilates and yoga, Dalila brings a deep understanding of how stress, emotion, and identity are held in the body.
          </p>
          <p>
            Movement is used gently and intentionally, not for performance or fitness goals, but to support regulation, awareness, and reconnection.
          </p>
          <p>
            This body-based perspective is woven naturally into her coaching work, helping clients feel more grounded, present, and at ease.
          </p>
        </div>
      ),
    },
    {
      id: "reiki" as CredentialId,
      label: "Reiki Master Practitioner",
      content: (
        <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-sm">
          <p>
            As a Reiki Master Practitioner, Dalila offers a calm, restorative approach to energy work that supports balance and deep relaxation.
          </p>
          <p>
            Reiki sessions are quiet and unhurried. They help release accumulated tension, mental fatigue, and emotional overload, creating space for clarity and renewal.
          </p>
          <p>
            This work complements coaching by supporting the nervous system and emotional wellbeing.
          </p>
        </div>
      ),
    },
    {
      id: "eft" as CredentialId,
      label: "EFT Practitioner",
      content: (
        <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-sm">
          <p className="font-medium text-[#1a1a1a] mb-2">EFT Practitioner (Emotional Freedom Techniques)</p>
          <p>
            Dalila is trained in Emotional Freedom Techniques (EFT), a gentle method that combines focused conversation with light tapping to support emotional release.
          </p>
          <p>
            EFT can be particularly helpful for stress, anxiety, limiting beliefs, and emotional blocks that feel difficult to shift through talking alone.
          </p>
          <p>
            It is always used thoughtfully and with care, as part of a wider, personalised approach.
          </p>
        </div>
      ),
    },
    {
      id: "multilingual" as CredentialId,
      label: "Multilingual Support",
      content: (
        <div className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-sm">
          <p>
            While sessions are typically delivered in English, Dalila is equally comfortable working in French and Arabic.
          </p>
          <p>
            For many clients, being able to express thoughts, emotions, and life experiences in their native language creates a deeper sense of ease and understanding. Dalila welcomes this and adapts her approach accordingly.
          </p>
          <p>
            Whether you choose to work in English, French, or Arabic, the focus remains the same: clarity, trust, and meaningful progress at a pace that feels right for you.
          </p>
        </div>
      ),
    },
  ];

  const openContent = credentials.find((cred) => cred.id === openCredential)?.content;

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
        {credentials.map((credential) => {
          const isOpen = openCredential === credential.id;
          return (
            <button
              key={credential.id}
              onClick={() => handleToggle(credential.id)}
              className={`px-6 py-3 bg-white/60 rounded-full border text-xs uppercase tracking-widest cursor-pointer transition-colors ${
                isOpen
                  ? "border-[#c8a84a] text-[#8b6914]"
                  : "border-[#e8e6e3] text-[#4a4a4a] hover:border-[#c8a84a]"
              }`}
            >
              <span className="flex items-center justify-between">
                <span>{credential.label}</span>
                {isOpen && <span className="ml-2 text-[#8b6914]">−</span>}
              </span>
            </button>
          );
        })}
      </div>
      {openContent && (
        <div className="mt-6 flex justify-center">
          <div className="px-6 py-4 bg-white/80 rounded-2xl border border-[#e8e6e3] max-w-2xl w-full">
            {openContent}
          </div>
        </div>
      )}
    </>
  );
}

