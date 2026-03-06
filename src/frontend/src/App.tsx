import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  Factory,
  Loader2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Truck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

// ─── Smooth-scroll helper ────────────────────────────────────────────────────
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── NAV LINKS ───────────────────────────────────────────────────────────────
const navLinks = [
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Why Us", id: "why-us" },
  { label: "Partners", id: "partners" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for nav background
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-luxury"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
        >
          <span className="font-display text-xl md:text-2xl font-bold text-white">
            DM <span className="text-gold">Furnishings</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-body text-sm font-medium text-white/80 hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              data-ocid={`nav.${link.id}_link`}
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollTo("contact")}
            className="gold-gradient text-charcoal font-semibold hover:opacity-90 border-0 shadow-gold-sm"
          >
            Wholesale Inquiry
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          aria-label="Toggle menu"
          data-ocid="nav.menu_button"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-charcoal/98 border-t border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => {
                    scrollTo(link.id);
                    setMenuOpen(false);
                  }}
                  className="text-left font-body text-base text-white/80 hover:text-gold transition-colors py-2 border-b border-white/10"
                  data-ocid={`nav.${link.id}_mobile_link`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  scrollTo("contact");
                  setMenuOpen(false);
                }}
                className="gold-gradient text-charcoal font-semibold mt-2"
              >
                Wholesale Inquiry
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-curtains.dim_1600x900.jpg')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal/85" />

      {/* Gold decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient opacity-70" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 text-gold text-xs font-body font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8"
        >
          <Star size={12} fill="currentColor" />
          Premium Textile Manufacturer — Surat, India
          <Star size={12} fill="currentColor" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          DM Furnishings
          <span className="block text-gold mt-2 text-3xl md:text-5xl lg:text-6xl italic">
            Premium Curtain Manufacturer
          </span>
          <span className="block text-white/90 text-2xl md:text-3xl lg:text-4xl font-normal mt-2 not-italic">
            &amp; Wholesale Supplier
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-body text-base md:text-lg text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Supplying premium curtain fabrics to retailers, distributors, and
          interior designers across India. Based in Surat – India's textile
          capital.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollTo("products")}
            className="gold-gradient text-charcoal font-body font-semibold text-base px-8 py-6 h-auto hover:opacity-90 shadow-gold border-0"
            data-ocid="nav.view_collection_button"
          >
            View Collection
            <ChevronRight size={18} className="ml-1" />
          </Button>
          <Button
            onClick={() => scrollTo("contact")}
            variant="outline"
            className="font-body font-semibold text-base px-8 py-6 h-auto border-gold text-gold hover:bg-gold/10 bg-transparent"
            data-ocid="nav.wholesale_inquiry_button"
          >
            Wholesale Inquiry
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { value: "10+", label: "Years Experience" },
            { value: "500+", label: "Product Variants" },
            { value: "Pan-India", label: "Supply Network" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold text-gold">
                {stat.value}
              </div>
              <div className="font-body text-xs text-white/60 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-beige to-transparent" />
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function AboutSection() {
  const stats = [
    { value: "10+ Years", label: "Experience" },
    { value: "500+ Products", label: "In Our Range" },
    { value: "Pan-India", label: "Supply Network" },
  ];

  return (
    <section id="about" className="bg-beige section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-gold font-body text-xs uppercase tracking-widest font-semibold mb-3">
            Our Story
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal">
            About DM Furnishings
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-6">
              DM Furnishings specializes in manufacturing high-quality curtain
              fabrics with modern designs, durable materials, and competitive
              wholesale pricing.
            </p>
            <p className="font-body text-base text-charcoal/70 leading-relaxed mb-8">
              Based in Surat, India's textile capital, we serve retailers,
              distributors, and interior designers across the country with
              consistent quality and timely delivery. Our state-of-the-art
              manufacturing facility ensures every roll of fabric meets the
              highest standards, making us the preferred partner for businesses
              that demand excellence in their product offerings.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "B2B Wholesale",
                "Bulk Orders",
                "Custom Fabrics",
                "Pan-India Delivery",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-body text-xs font-semibold text-charcoal border border-gold/40 bg-gold/10 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button
              onClick={() => scrollTo("contact")}
              className="gold-gradient text-charcoal font-semibold hover:opacity-90 border-0"
            >
              Get Wholesale Pricing
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img
                src="/assets/generated/about-manufacturing.dim_900x600.jpg"
                alt="DM Furnishings manufacturing facility in Surat"
                className="w-full h-80 lg:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-luxury p-4 border border-beige-dark">
              <div className="font-display text-2xl font-bold text-gold">
                Surat
              </div>
              <div className="font-body text-xs text-charcoal/60 uppercase tracking-widest">
                India's Textile Capital
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white rounded-lg shadow-xs border border-beige-dark p-6"
            >
              <div className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs text-charcoal/50 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
const products = [
  {
    title: "Sheer Curtains",
    description:
      "Light-filtering fabric that adds elegance and airiness to any space. Perfect for living rooms and dining areas.",
    image: "/assets/generated/gallery-sheer.dim_600x400.jpg",
    tag: "Bestseller",
  },
  {
    title: "Blackout Curtains",
    description:
      "Complete light blocking for bedrooms and home theaters. Heavy-duty fabric with thermal insulation properties.",
    image: "/assets/generated/gallery-blackout.dim_600x400.jpg",
    tag: "High Demand",
  },
  {
    title: "Designer Pattern Curtains",
    description:
      "Bold geometric and floral prints for modern interiors. Our in-house design team creates exclusive seasonal collections.",
    image: "/assets/generated/gallery-designer.dim_600x400.jpg",
    tag: "New Collection",
  },
  {
    title: "Velvet Curtains",
    description:
      "Rich, opulent texture for luxury residential and hospitality projects. Available in 40+ premium shades.",
    image: "/assets/generated/gallery-velvet.dim_600x400.jpg",
    tag: "Premium",
  },
  {
    title: "Luxury Drapery Fabrics",
    description:
      "Premium floor-length draperies for high-end spaces. Crafted for architects, hoteliers, and luxury developers.",
    image: "/assets/generated/gallery-drapery.dim_600x400.jpg",
    tag: "Exclusive",
  },
];

function ProductsSection() {
  return (
    <section id="products" className="bg-charcoal section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-gold font-body text-xs uppercase tracking-widest font-semibold mb-3">
            What We Make
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
            Our Product Range
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
          <p className="mt-6 font-body text-white/60 max-w-xl mx-auto text-base">
            From sheer to opulent velvet — our complete range covers every
            style, budget, and application for the Indian market.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group bg-charcoal-light rounded-lg overflow-hidden border border-white/5 hover:border-gold/40 transition-all duration-400 ${
                idx === 4 ? "md:col-start-auto lg:col-start-2" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden relative h-48">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Tag */}
                <div className="absolute top-3 right-3 bg-gold/90 text-charcoal text-xs font-semibold font-body px-2.5 py-1 rounded-full">
                  {product.tag}
                </div>
                {/* Gold top border */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {product.title}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {product.description}
                </p>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="mt-4 flex items-center gap-1 text-gold text-sm font-body font-medium hover:gap-2 transition-all duration-200"
                >
                  Inquire for Wholesale
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY US ───────────────────────────────────────────────────────────────────
const features = [
  {
    icon: Shield,
    title: "Premium Textile Quality",
    description:
      "Carefully sourced materials that meet the highest industry standards. Every batch is quality-checked before dispatch.",
  },
  {
    icon: Factory,
    title: "Large-Scale Manufacturing",
    description:
      "Production capacity to fulfill bulk and repeat orders on time. Our facility runs 6 days a week to meet demand.",
  },
  {
    icon: DollarSign,
    title: "Competitive Wholesale Pricing",
    description:
      "Factory-direct pricing for maximum margins. No middlemen — you buy directly from the manufacturer.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description:
      "Consistent inventory with efficient nationwide logistics. Partnered with leading freight networks for timely delivery.",
  },
  {
    icon: TrendingUp,
    title: "Trend-Focused Designs",
    description:
      "Our design team tracks global interior trends to keep collections fresh and commercially relevant season after season.",
  },
];

function WhyUsSection() {
  return (
    <section id="why-us" className="bg-beige section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-gold font-body text-xs uppercase tracking-widest font-semibold mb-3">
            Our Advantages
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal">
            Why Choose DM Furnishings
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-white rounded-lg p-7 shadow-xs border border-beige-dark hover:shadow-gold-sm hover:border-gold/30 transition-all duration-400 ${
                idx === 4 ? "md:col-start-auto lg:col-start-2" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <feature.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-charcoal/65 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PARTNERS ─────────────────────────────────────────────────────────────────
function PartnersSection() {
  const points = [
    "Minimum order quantities available for all categories",
    "Nationwide shipping directly from Surat",
    "Exclusive dealer margins and volume discounts",
    "Customization and private-label available",
  ];

  return (
    <section
      id="partners"
      className="bg-charcoal section-padding relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block text-gold font-body text-xs uppercase tracking-widest font-semibold mb-3">
            Dealer Network
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Partner With Us
          </h2>
          <div className="mx-auto w-16 h-0.5 bg-gold mb-8" />
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            We welcome distributors, retailers, and interior designers to join
            our dealer network. Benefit from bulk order pricing, priority stock
            allocation, and dedicated account support.
          </p>

          {/* Key points */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-gold" />
                </div>
                <span className="font-body text-sm text-white/75">{point}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={() => scrollTo("contact")}
            className="gold-gradient text-charcoal font-semibold text-base px-10 py-6 h-auto hover:opacity-90 border-0 shadow-gold"
            data-ocid="partners.become_dealer_button"
          >
            Become a Dealer
            <ChevronRight size={18} className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── GALLERY ──────────────────────────────────────────────────────────────────
const galleryImages = [
  {
    src: "/assets/generated/gallery-sheer.dim_600x400.jpg",
    alt: "Sheer curtains",
    label: "Sheer Curtains",
  },
  {
    src: "/assets/generated/gallery-blackout.dim_600x400.jpg",
    alt: "Blackout curtains",
    label: "Blackout Curtains",
  },
  {
    src: "/assets/generated/gallery-designer.dim_600x400.jpg",
    alt: "Designer pattern curtains",
    label: "Designer Patterns",
  },
  {
    src: "/assets/generated/gallery-velvet.dim_600x400.jpg",
    alt: "Velvet curtains",
    label: "Velvet Collection",
  },
  {
    src: "/assets/generated/gallery-drapery.dim_600x400.jpg",
    alt: "Luxury drapery",
    label: "Luxury Drapery",
  },
];

function GallerySection() {
  return (
    <section id="gallery" className="bg-beige section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-gold font-body text-xs uppercase tracking-widest font-semibold mb-3">
            Visual Showcase
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal">
            Product Showcase
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`gallery-item relative overflow-hidden rounded-lg group cursor-pointer shadow-xs ${
                idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-400 flex items-end">
                <div className="p-5 w-full translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <span className="font-display text-lg font-semibold text-white">
                    {img.label}
                  </span>
                  <div className="mt-1 h-0.5 w-8 bg-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT FORMS ────────────────────────────────────────────────────────────
function ContactForms() {
  const { actor } = useActor();

  // General inquiry state
  const [genName, setGenName] = useState("");
  const [genEmail, setGenEmail] = useState("");
  const [genPhone, setGenPhone] = useState("");
  const [genMessage, setGenMessage] = useState("");
  const [genSubmitting, setGenSubmitting] = useState(false);
  const [genSuccess, setGenSuccess] = useState(false);
  const [genError, setGenError] = useState("");

  // Wholesale inquiry state
  const [wsName, setWsName] = useState("");
  const [wsCompany, setWsCompany] = useState("");
  const [wsCity, setWsCity] = useState("");
  const [wsPhone, setWsPhone] = useState("");
  const [wsEmail, setWsEmail] = useState("");
  const [wsProduct, setWsProduct] = useState("");
  const [wsQuantity, setWsQuantity] = useState("");
  const [wsMessage, setWsMessage] = useState("");
  const [wsSubmitting, setWsSubmitting] = useState(false);
  const [wsSuccess, setWsSuccess] = useState(false);
  const [wsError, setWsError] = useState("");

  async function handleGeneralSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!actor) return;
    setGenSubmitting(true);
    setGenError("");
    try {
      await actor.submitContactInquiry(genName, genEmail, genPhone, genMessage);
      setGenSuccess(true);
      setGenName("");
      setGenEmail("");
      setGenPhone("");
      setGenMessage("");
      toast.success("Thank you! We'll be in touch soon.");
    } catch {
      setGenError(
        "Something went wrong. Please try again or call us directly.",
      );
      toast.error("Failed to submit. Please try again.");
    } finally {
      setGenSubmitting(false);
    }
  }

  async function handleWholesaleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!actor) return;
    setWsSubmitting(true);
    setWsError("");
    try {
      await actor.submitWholesaleInquiry(
        wsName,
        wsCompany,
        wsCity,
        wsPhone,
        wsEmail,
        wsProduct,
        wsQuantity,
        wsMessage,
      );
      setWsSuccess(true);
      setWsName("");
      setWsCompany("");
      setWsCity("");
      setWsPhone("");
      setWsEmail("");
      setWsProduct("");
      setWsQuantity("");
      setWsMessage("");
      toast.success(
        "Wholesale inquiry received! Our team will contact you within 24 hours.",
      );
    } catch {
      setWsError(
        "Something went wrong. Please try again or contact us directly.",
      );
      toast.error("Failed to submit. Please try again.");
    } finally {
      setWsSubmitting(false);
    }
  }

  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="w-full grid grid-cols-2 bg-beige-dark mb-6">
        <TabsTrigger
          value="general"
          className="font-body font-medium data-[state=active]:bg-charcoal data-[state=active]:text-gold"
          data-ocid="contact.general_tab"
        >
          General Inquiry
        </TabsTrigger>
        <TabsTrigger
          value="wholesale"
          className="font-body font-medium data-[state=active]:bg-charcoal data-[state=active]:text-gold"
          data-ocid="contact.wholesale_tab"
        >
          Wholesale Inquiry
        </TabsTrigger>
      </TabsList>

      {/* General Inquiry Tab */}
      <TabsContent value="general">
        {genSuccess ? (
          <div
            className="flex flex-col items-center justify-center py-12 text-center"
            data-ocid="contact.general_success_state"
          >
            <CheckCircle2 size={48} className="text-green-500 mb-4" />
            <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
              Message Sent!
            </h3>
            <p className="font-body text-sm text-charcoal/60 mb-6">
              Thank you for reaching out. We'll respond within 1–2 business
              days.
            </p>
            <Button
              variant="outline"
              onClick={() => setGenSuccess(false)}
              className="border-gold text-gold hover:bg-gold/10"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleGeneralSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="gen-name"
                className="font-body text-sm text-charcoal font-medium"
              >
                Name *
              </Label>
              <Input
                id="gen-name"
                required
                value={genName}
                onChange={(e) => setGenName(e.target.value)}
                placeholder="Your full name"
                className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30"
                data-ocid="contact.general_name_input"
              />
            </div>
            <div>
              <Label
                htmlFor="gen-email"
                className="font-body text-sm text-charcoal font-medium"
              >
                Email *
              </Label>
              <Input
                id="gen-email"
                type="email"
                required
                value={genEmail}
                onChange={(e) => setGenEmail(e.target.value)}
                placeholder="your@email.com"
                className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30"
                data-ocid="contact.general_email_input"
              />
            </div>
            <div>
              <Label
                htmlFor="gen-phone"
                className="font-body text-sm text-charcoal font-medium"
              >
                Phone
              </Label>
              <Input
                id="gen-phone"
                type="tel"
                value={genPhone}
                onChange={(e) => setGenPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30"
                data-ocid="contact.general_phone_input"
              />
            </div>
            <div>
              <Label
                htmlFor="gen-message"
                className="font-body text-sm text-charcoal font-medium"
              >
                Message *
              </Label>
              <Textarea
                id="gen-message"
                required
                value={genMessage}
                onChange={(e) => setGenMessage(e.target.value)}
                placeholder="Tell us what you're looking for..."
                rows={4}
                className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30 resize-none"
                data-ocid="contact.general_message_textarea"
              />
            </div>
            {genError && (
              <p
                className="font-body text-sm text-red-600"
                data-ocid="contact.general_error_state"
              >
                {genError}
              </p>
            )}
            <Button
              type="submit"
              disabled={genSubmitting}
              className="w-full gold-gradient text-charcoal font-semibold hover:opacity-90 border-0"
              data-ocid="contact.general_submit_button"
            >
              {genSubmitting ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        )}
      </TabsContent>

      {/* Wholesale Inquiry Tab */}
      <TabsContent value="wholesale">
        {wsSuccess ? (
          <div
            className="flex flex-col items-center justify-center py-12 text-center"
            data-ocid="contact.wholesale_success_state"
          >
            <CheckCircle2 size={48} className="text-green-500 mb-4" />
            <h3 className="font-display text-xl font-semibold text-charcoal mb-2">
              Inquiry Received!
            </h3>
            <p className="font-body text-sm text-charcoal/60 mb-6">
              Our wholesale team will contact you within 24 business hours with
              pricing details.
            </p>
            <Button
              variant="outline"
              onClick={() => setWsSuccess(false)}
              className="border-gold text-gold hover:bg-gold/10"
            >
              Submit Another Inquiry
            </Button>
          </div>
        ) : (
          <form onSubmit={handleWholesaleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="ws-name"
                  className="font-body text-sm text-charcoal font-medium"
                >
                  Contact Name *
                </Label>
                <Input
                  id="ws-name"
                  required
                  value={wsName}
                  onChange={(e) => setWsName(e.target.value)}
                  placeholder="Your name"
                  className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30"
                  data-ocid="contact.wholesale_name_input"
                />
              </div>
              <div>
                <Label
                  htmlFor="ws-company"
                  className="font-body text-sm text-charcoal font-medium"
                >
                  Company Name *
                </Label>
                <Input
                  id="ws-company"
                  required
                  value={wsCompany}
                  onChange={(e) => setWsCompany(e.target.value)}
                  placeholder="Your business name"
                  className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30"
                  data-ocid="contact.wholesale_company_input"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="ws-city"
                  className="font-body text-sm text-charcoal font-medium"
                >
                  City *
                </Label>
                <Input
                  id="ws-city"
                  required
                  value={wsCity}
                  onChange={(e) => setWsCity(e.target.value)}
                  placeholder="Your city"
                  className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30"
                  data-ocid="contact.wholesale_city_input"
                />
              </div>
              <div>
                <Label
                  htmlFor="ws-phone"
                  className="font-body text-sm text-charcoal font-medium"
                >
                  Phone *
                </Label>
                <Input
                  id="ws-phone"
                  type="tel"
                  required
                  value={wsPhone}
                  onChange={(e) => setWsPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30"
                  data-ocid="contact.wholesale_phone_input"
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="ws-email"
                className="font-body text-sm text-charcoal font-medium"
              >
                Email *
              </Label>
              <Input
                id="ws-email"
                type="email"
                required
                value={wsEmail}
                onChange={(e) => setWsEmail(e.target.value)}
                placeholder="business@email.com"
                className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30"
                data-ocid="contact.wholesale_email_input"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label className="font-body text-sm text-charcoal font-medium">
                  Product Interest *
                </Label>
                <Select value={wsProduct} onValueChange={setWsProduct} required>
                  <SelectTrigger
                    className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30"
                    data-ocid="contact.wholesale_product_select"
                  >
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sheer">Sheer Curtains</SelectItem>
                    <SelectItem value="blackout">Blackout Curtains</SelectItem>
                    <SelectItem value="designer">
                      Designer Pattern Curtains
                    </SelectItem>
                    <SelectItem value="velvet">Velvet Curtains</SelectItem>
                    <SelectItem value="drapery">
                      Luxury Drapery Fabrics
                    </SelectItem>
                    <SelectItem value="all">All Categories</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="font-body text-sm text-charcoal font-medium">
                  Monthly Order Quantity *
                </Label>
                <Select
                  value={wsQuantity}
                  onValueChange={setWsQuantity}
                  required
                >
                  <SelectTrigger
                    className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30"
                    data-ocid="contact.wholesale_quantity_select"
                  >
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100-500m">
                      100–500 meters/month
                    </SelectItem>
                    <SelectItem value="500-2000m">
                      500–2,000 meters/month
                    </SelectItem>
                    <SelectItem value="2000-10000m">
                      2,000–10,000 meters/month
                    </SelectItem>
                    <SelectItem value="10000m+">
                      10,000+ meters/month
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label
                htmlFor="ws-message"
                className="font-body text-sm text-charcoal font-medium"
              >
                Additional Requirements
              </Label>
              <Textarea
                id="ws-message"
                value={wsMessage}
                onChange={(e) => setWsMessage(e.target.value)}
                placeholder="Specific designs, colors, delivery timeline, or any other details..."
                rows={3}
                className="mt-1.5 font-body border-beige-dark focus:border-gold focus:ring-gold/30 resize-none"
                data-ocid="contact.wholesale_message_textarea"
              />
            </div>
            {wsError && (
              <p
                className="font-body text-sm text-red-600"
                data-ocid="contact.wholesale_error_state"
              >
                {wsError}
              </p>
            )}
            <Button
              type="submit"
              disabled={wsSubmitting || !wsProduct || !wsQuantity}
              className="w-full gold-gradient text-charcoal font-semibold hover:opacity-90 border-0 disabled:opacity-50"
              data-ocid="contact.wholesale_submit_button"
            >
              {wsSubmitting ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Wholesale Inquiry"
              )}
            </Button>
          </form>
        )}
      </TabsContent>
    </Tabs>
  );
}

// ─── CONTACT SECTION ──────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section id="contact" className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block text-gold font-body text-xs uppercase tracking-widest font-semibold mb-3">
            Reach Out
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-charcoal">
            Get In Touch
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Business Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-2xl font-semibold text-charcoal mb-6">
              Business Information
            </h3>
            <Separator className="mb-6 bg-gold/30" />

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-body font-semibold text-charcoal text-sm">
                    Address
                  </div>
                  <div className="font-body text-sm text-charcoal/65 mt-0.5">
                    DM Furnishings
                    <br />
                    Surat, Gujarat, India – 395003
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-body font-semibold text-charcoal text-sm">
                    Phone / WhatsApp
                  </div>
                  <a
                    href="tel:+919339802950"
                    className="font-body text-sm text-gold hover:underline mt-0.5 block"
                  >
                    +91 93398 02950
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-body font-semibold text-charcoal text-sm">
                    Email
                  </div>
                  <a
                    href="mailto:info@dmfurnishings.com"
                    className="font-body text-sm text-gold hover:underline mt-0.5 block"
                  >
                    info@dmfurnishings.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-gold" />
                </div>
                <div>
                  <div className="font-body font-semibold text-charcoal text-sm">
                    Working Hours
                  </div>
                  <div className="font-body text-sm text-charcoal/65 mt-0.5">
                    Mon–Sat, 9:00 AM – 6:30 PM IST
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/919876543210?text=Hello%20DM%20Furnishings%2C%20I%20am%20interested%20in%20your%20curtain%20fabrics."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-body font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-xs"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 p-5 bg-beige rounded-lg border border-beige-dark">
              <div className="font-body text-xs font-semibold uppercase tracking-widest text-charcoal/50 mb-3">
                Why businesses trust us
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Factory-direct pricing",
                  "Sample orders available",
                  "Bulk order support",
                  "Dedicated account manager",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="font-body text-xs text-charcoal/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Forms */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-beige rounded-xl p-6 md:p-8 border border-beige-dark"
          >
            <ContactForms />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-bold text-white mb-3">
              DM <span className="text-gold">Furnishings</span>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-5">
              Premium Curtain Manufacturer &amp; Wholesale Supplier.
              <br />
              Made with pride in Surat, India.
            </p>
            <div className="h-px w-12 bg-gold mb-5" />
            <p className="font-body text-xs text-white/40">
              India's Textile Capital | Est. in Surat, Gujarat
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left font-body text-sm text-white/60 hover:text-gold transition-colors w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-3 font-body text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span>Surat, Gujarat, India – 395003</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+919339802950"
                  className="hover:text-gold transition-colors"
                >
                  +91 93398 02950
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@dmfurnishings.com"
                  className="hover:text-gold transition-colors"
                >
                  info@dmfurnishings.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-body text-xs text-white/40">
            © {year} DM Furnishings. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/40">
            Made with pride in Surat, India &nbsp;|&nbsp;{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Built with ♥ using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <PartnersSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
