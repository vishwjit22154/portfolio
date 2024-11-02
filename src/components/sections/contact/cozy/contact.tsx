'use client';
import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import MotionWrap from '@/components/motion-wrap';

import ContactForm from './contact-form';

import { contact } from '@/components/sections/contact/config';

import { cn } from '@/lib/utils';
import TextReveal from '@/components/motion/text-reveal';

import Link from '@/components/motion/link';

function Contact() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="contact">
      <div className="px-4 md:px-6">
        <div className="py-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <TextReveal>Contact Me</TextReveal>
          </h2>
          <p className="max-w-[600px] text-muted-foreground">
            <TextReveal>
              Have a question or want to work together? Send me a message using
              the form.
            </TextReveal>
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="flex w-full flex-col gap-4 py-3 lg:order-2 lg:w-1/4 lg:pl-3">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              {/* Updated to use an <a> tag instead of Link */}
              <a
                href={`mailto:${contact.email}`}
                className={cn(
                  buttonVariants({ variant: 'link' }),
                  'text-md h-min w-min p-0 font-normal'
                )}
              >
                {contact.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Socials</p>
              <div className="flex flex-col gap-1">
                {contact.socials.map(({ Icon, name, href }, index) => (
                    <a
                    target="_blank"
                    href={href}
                    className={cn(
                      buttonVariants({ variant: 'link' }),
                      'text-md h-min w-min gap-1 p-0'
                    )}
                    key={`contact-social_${index}`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {name}
                  </a>
                
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-4 py-3 lg:w-3/4 lg:pr-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Contact;
