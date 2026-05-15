"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Check, CheckCircle, Clock, Heart, Map, MapPin, Shield, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Services",          id: "features"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="ItaquaConnect"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars"}}
      title="Your trusted local partner in Itaquaquecetuba"
      description="Find us at Rua Campina Grande, 200. Serving the community with quality and reliability."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081913.jpg",          alt: "Client"},
        {
          src: "http://img.b2bpic.net/free-photo/young-stylish-female-photographer-exploring-subway-city_23-2149186695.jpg",          alt: "Client"},
        {
          src: "http://img.b2bpic.net/free-photo/young-handsome-cheerful-gardener-smiling-looking-camera-posing_176420-3837.jpg",          alt: "Client"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-senior-engineer-solar-panels-plant-reading-documentation_482257-120499.jpg",          alt: "Client"},
        {
          src: "http://img.b2bpic.net/free-photo/volunteer-handing-donation-box_23-2149230537.jpg",          alt: "Community Member"},
      ]}
      buttons={[
        {
          text: "Get in Touch",          href: "#contact"},
      ]}
      marqueeItems={[
        {
          type: "text-icon",          text: "Quality Guaranteed",          icon: Check,
        },
        {
          type: "text-icon",          text: "Locally Owned",          icon: MapPin,
        },
        {
          type: "text-icon",          text: "Fast Support",          icon: Zap,
        },
        {
          type: "text-icon",          text: "Trusted Expert",          icon: Shield,
        },
        {
          type: "text-icon",          text: "Community Focused",          icon: Heart,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Dedicated to Our Community"
      metrics={[
        {
          icon: MapPin,
          label: "Location",          value: "Rua Campina Grande, 200"},
        {
          icon: Clock,
          label: "Serving Since",          value: "2015"},
        {
          icon: CheckCircle,
          label: "Projects Completed",          value: "500+"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Service Excellence",          description: "High-quality maintenance and support for all your residential and commercial needs.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/composition-lollipops-form-heart-wands_23-2148010164.jpg",            imageAlt: "Service"},
          items: [
            {
              icon: Zap,
              text: "Rapid response"},
            {
              icon: Shield,
              text: "Certified quality"},
          ],
          reverse: false,
        },
        {
          title: "Reliable Support",          description: "We stand by our work, ensuring every customer feels supported throughout the process.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/happy-young-delivery-woman-red-uniform-cap-rush-running-delivering-pizza-boxes-customer-green-wall_141793-64732.jpg",            imageAlt: "Support"},
          items: [
            {
              icon: Users,
              text: "Customer focused"},
            {
              icon: Award,
              text: "Local experts"},
          ],
          reverse: true,
        },
        {
          title: "Community Focus",          description: "Proudly serving our neighborhood with integrity, professionalism, and quick turnaround.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/handsome-business-man-suit-headphones-with-microphone-holding-clipboard-looking-aside-puzzled-sitting-table-offise-orange-background_141793-54010.jpg",            imageAlt: "Community"},
          items: [
            {
              icon: Map,
              text: "Central location"},
            {
              icon: Heart,
              text: "Community driven"},
          ],
          reverse: false,
        },
      ]}
      title="Our Local Services"
      description="Comprehensive solutions tailored to the needs of the Itaquaquecetuba community."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "10k+",          title: "Happy Clients",          description: "Serving residents and businesses daily.",          imageSrc: "http://img.b2bpic.net/free-photo/blurred-picture-lady-with-bronze-skin-painting-her-lips_1304-3223.jpg",          imageAlt: "Impact"},
        {
          id: "2",          value: "98%",          title: "Satisfaction",          description: "Consistently high ratings from customers.",          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-hands-showing-thumbs-up-gesture_23-2150995920.jpg",          imageAlt: "Impact"},
        {
          id: "3",          value: "12",          title: "Team Members",          description: "Experienced local professionals ready to help.",          imageSrc: "http://img.b2bpic.net/free-photo/clients-asking-about-organic-farming_482257-80722.jpg",          imageAlt: "Impact"},
      ]}
      title="Our Impact"
      description="Growing together with our clients and the city."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "What are your business hours?",          content: "We are open Monday to Saturday, 8 AM to 6 PM."},
        {
          id: "q2",          title: "Do you offer free consultations?",          content: "Yes, we provide free initial consultations to discuss your requirements."},
        {
          id: "q3",          title: "Is parking available at the location?",          content: "Yes, we have parking spaces directly in front of our Rua Campina Grande facility."},
      ]}
      sideTitle="Frequently Asked Questions"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Local Partners",        "Trusted Brands",        "Regional Leaders",        "Business Network",        "Quality Alliance"]}
      title="Trusted by Local Leaders"
      description="We are proud to partner with esteemed organizations throughout the São Paulo area."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          title: "Great service",          quote: "I am so impressed with the quality and friendliness of the team.",          name: "Alice M.",          role: "Resident",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-view-black-woman-smile-camera_197531-33139.jpg"},
        {
          id: "t2",          title: "Very reliable",          quote: "They are always on time and professional. Truly recommended.",          name: "Carlos S.",          role: "Business Owner",          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-having-great-time-with-friends_23-2149286535.jpg"},
        {
          id: "t3",          title: "Highly professional",          quote: "Working with them was seamless and easy. Best local choice.",          name: "Beatriz L.",          role: "Client",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-african-woman-with-bunch-flowers-looking-camera_23-2147882087.jpg"},
        {
          id: "t4",          title: "Excellent experience",          quote: "Friendly and helpful staff. They went above and beyond.",          name: "Ricardo D.",          role: "Local Professional",          imageSrc: "http://img.b2bpic.net/free-photo/curly-haired-young-businessman-blue-shirt-talking-phone_259150-58627.jpg"},
        {
          id: "t5",          title: "Trusted partner",          quote: "A staple in Itaquaquecetuba. Always professional.",          name: "Elena V.",          role: "Business Leader",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-queer-eldery-women_23-2149732507.jpg"},
      ]}
      title="Voices of the Community"
      description="Hear what our neighbors have to say about their experience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Let's Connect"
      title="Ready to get started?"
      description="Visit us at Rua Campina Grande, 200 or reach out to our team today to learn how we can assist you."
      buttons={[
        {
          text: "Contact Us Now",          href: "mailto:info@itaquaconnect.com.br"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Careers",              href: "#"},
            {
              label: "Blog",              href: "#"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      logoText="ItaquaConnect"
      copyrightText="© 2025 ItaquaConnect. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
