// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   ArrowRight,
//   Phone,
//   Mail,
//   MapPin,
//   ShieldCheck,
//   LockKeyhole,
//   Send,
//   Globe2,
//   CheckCircle2,
//   Sparkles,
// } from "lucide-react";

// // Contact information
// const contactInfo = [
//   {
//     icon: Phone,
//     label: "CALL OUR TEAM",
//     title: "+91 9891915550",
//     description: "Speak directly with our team.",
//     href: "tel:+919891915550",
//   },
//   {
//     icon: Mail,
//     label: "EMAIL ENQUIRIES",
//     title: "detectiveservice7@gmail.com",
//     description: "Send your enquiry privately.",
//     href: "mailto:detectiveservice7@gmail.com",
//   },
// ];

// // Office locations
// const offices = [
//   {
//     country: "INDIA",
//     city: "New Delhi",
//     address:
//       "43/17, A-Block, Mange Ram Park, Pooth Kalan, Rohini Sector 20, New Delhi, Delhi 110085",
//   },
//   {
//     country: "UNITED ARAB EMIRATES",
//     city: "Dubai",
//     address:
//       "Office 29, Wakson Building, Second Floor, Sheikh Zayed Road, Dubai, UAE",
//   },
// ];

// // Animation variants
// const fadeUp = {
//   hidden: {
//     opacity: 0,
//     y: 35,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.65,
//       ease: "easeOut",
//     },
//   },
// };

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.12,
//     },
//   },
// };

// const Contact = () => {
//   const [emailMessage, setEmailMessage] = useState("");

//   // Form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     const name = formData.get("name");
//     const email = formData.get("email");
//     const phone = formData.get("phone");
//     const service = formData.get("service");
//     const message = formData.get("message");

//     const subject = encodeURIComponent(`Private enquiry from ${name}`);

//     const body = encodeURIComponent(
//       `Name: ${name}\n` +
//         `Email: ${email}\n` +
//         `Phone: ${phone || "Not provided"}\n` +
//         `Service: ${service || "General enquiry"}\n\n` +
//         `Enquiry:\n${message}`,
//     );

//     window.location.href = `mailto:detectiveservice7@gmail.com?subject=${subject}&body=${body}`;

//     setEmailMessage(
//       "Your email application should open with your enquiry ready to send. Please click Send in your email application.",
//     );
//   };

//   const inputStyle =
//     "w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100";

//   return (
//     <main className="overflow-hidden bg-white">
//       {/* =====================================
//           HERO SECTION
//       ===================================== */}
//       <section className="relative isolate overflow-hidden bg-[#06152b] px-5 pb-28 pt-24 text-white sm:px-8 lg:pb-36 lg:pt-32">
//         {/* Animated Background */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           <motion.div
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.5, 0.3],
//             }}
//             transition={{
//               duration: 9,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute -right-32 -top-32 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[110px]"
//           />

//           <motion.div
//             animate={{
//               x: [0, 70, 0],
//               y: [0, -40, 0],
//             }}
//             transition={{
//               duration: 12,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute -bottom-40 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[100px]"
//           />

//           <div
//             className="absolute inset-0 opacity-[0.045]"
//             style={{
//               backgroundImage:
//                 "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//               backgroundSize: "65px 65px",
//             }}
//           />
//         </div>

//         <div className="relative z-10 mx-auto max-w-7xl">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={stagger}
//             className="max-w-4xl"
//           >
//             {/* Badge */}
//             <motion.div
//               variants={fadeUp}
//               className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/25 bg-white/5 px-5 py-2.5 backdrop-blur-xl"
//             >
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
//               </span>

//               <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
//                 Private & Confidential Enquiries
//               </span>
//             </motion.div>

//             {/* Heading */}
//             <motion.h1
//               variants={fadeUp}
//               className="font-serif text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-[78px]"
//             >
//               Let's Start a
//               <br />
//               <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
//                 Confidential
//               </span>
//               <br />
//               Conversation.
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
//             >
//               Every situation deserves attention, professionalism, and
//               discretion. Reach out to our team and tell us how we can assist
//               you.
//             </motion.p>

//             {/* Hero Buttons */}
//             <motion.div
//               variants={fadeUp}
//               className="mt-10 flex flex-wrap items-center gap-4"
//             >
//               <a
//                 href="#enquiry-form"
//                 className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
//               >
//                 Send an Enquiry
//                 <ArrowUpRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </a>

//               <a
//                 href="tel:+919891915550"
//                 className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-blue-300/50 hover:bg-white/10"
//               >
//                 <Phone size={17} />
//                 Speak With Us
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================
//           TRUST FEATURES
//       ===================================== */}
//       <section className="relative z-20 mx-auto -mt-12 max-w-7xl px-5 sm:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.10)] md:grid-cols-3"
//         >
//           {[
//             {
//               icon: ShieldCheck,
//               title: "Discreet Approach",
//               text: "Your privacy matters to us.",
//             },
//             {
//               icon: LockKeyhole,
//               title: "Private Enquiries",
//               text: "Sensitive matters handled carefully.",
//             },
//             {
//               icon: Globe2,
//               title: "International Presence",
//               text: "Offices in India and the UAE.",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className={`group flex items-center gap-4 p-6 transition-colors duration-300 hover:bg-blue-50/60 sm:p-8 ${
//                 index !== 2
//                   ? "border-b border-slate-100 md:border-b-0 md:border-r"
//                   : ""
//               }`}
//             >
//               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-6 group-hover:bg-blue-700 group-hover:text-white">
//                 <item.icon size={24} strokeWidth={1.7} />
//               </div>

//               <div>
//                 <h3 className="font-semibold text-slate-900">{item.title}</h3>

//                 <p className="mt-1 text-sm leading-6 text-slate-500">
//                   {item.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </section>

//       {/* =====================================
//           CONTACT INFORMATION + FORM
//       ===================================== */}
//       <section className="relative px-5 py-24 sm:px-8 lg:py-32">
//         <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
//           {/* LEFT SIDE */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.15 }}
//             variants={stagger}
//           >
//             <motion.div
//               variants={fadeUp}
//               className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700"
//             >
//               <span className="h-px w-8 bg-blue-700" />
//               GET IN TOUCH
//             </motion.div>

//             <motion.h2
//               variants={fadeUp}
//               className="font-serif text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl"
//             >
//               We're Here
//               <br />
//               <span className="text-blue-700">To Listen.</span>
//             </motion.h2>

//             <motion.p
//               variants={fadeUp}
//               className="mt-6 max-w-lg text-base leading-8 text-slate-600"
//             >
//               Whether you need information about our services or wish to discuss
//               a private matter, our team is ready to hear from you.
//             </motion.p>

//             {/* Contact Cards */}
//             <motion.div variants={stagger} className="mt-10 space-y-4">
//               {contactInfo.map((item, index) => (
//                 <motion.a
//                   key={index}
//                   variants={fadeUp}
//                   href={item.href}
//                   whileHover={{ y: -4 }}
//                   className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 sm:p-6"
//                 >
//                   <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

//                   <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
//                     <item.icon size={23} />
//                   </div>

//                   <div className="min-w-0 flex-1">
//                     <p className="text-[10px] font-bold tracking-[0.18em] text-blue-700">
//                       {item.label}
//                     </p>

//                     <h3 className="mt-1 break-all text-sm font-bold text-slate-900 sm:text-base">
//                       {item.title}
//                     </h3>

//                     <p className="mt-1 text-xs text-slate-500">
//                       {item.description}
//                     </p>
//                   </div>

//                   <ArrowUpRight
//                     size={20}
//                     className="hidden shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-700 sm:block"
//                   />
//                 </motion.a>
//               ))}
//             </motion.div>

//             {/* Privacy Note */}
//             <motion.div
//               variants={fadeUp}
//               className="mt-8 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-5"
//             >
//               <ShieldCheck
//                 size={22}
//                 className="mt-0.5 shrink-0 text-blue-700"
//               />

//               <p className="text-sm leading-7 text-slate-600">
//                 <strong className="text-slate-900">
//                   Your privacy comes first.
//                 </strong>{" "}
//                 Please avoid sharing highly sensitive personal information in
//                 your initial enquiry.
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* RIGHT SIDE FORM */}
//           <motion.div
//             id="enquiry-form"
//             initial={{ opacity: 0, x: 45 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.1 }}
//             transition={{
//               duration: 0.75,
//               ease: "easeOut",
//             }}
//             className="relative scroll-mt-24"
//           >
//             <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-100 via-transparent to-cyan-100 opacity-70 blur-xl" />

//             <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.09)] sm:p-10">
//               <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-blue-50/70" />

//               <div className="relative">
//                 <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
//                   <Send size={21} />
//                 </div>

//                 <div className="flex flex-wrap items-start justify-between gap-3">
//                   <div>
//                     <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
//                       PRIVATE ENQUIRY
//                     </p>

//                     <h2 className="mt-2 font-serif text-3xl font-semibold text-slate-950 sm:text-4xl">
//                       Send Us a Message
//                     </h2>
//                   </div>

//                   <Sparkles size={23} className="text-blue-400" />
//                 </div>

//                 <p className="mt-4 text-sm leading-7 text-slate-500">
//                   Fill in the details below. Your email application will open
//                   with your enquiry ready to send.
//                 </p>

//                 <form onSubmit={handleSubmit} className="mt-9">
//                   <div className="grid gap-6 sm:grid-cols-2">
//                     {/* Full Name */}
//                     <div>
//                       <label
//                         htmlFor="contact-name"
//                         className="mb-2 block text-sm font-semibold text-slate-800"
//                       >
//                         Full Name
//                         <span className="text-red-500"> *</span>
//                       </label>

//                       <input
//                         id="contact-name"
//                         name="name"
//                         type="text"
//                         autoComplete="name"
//                         required
//                         placeholder="Your full name"
//                         className={inputStyle}
//                       />
//                     </div>

//                     {/* Email */}
//                     <div>
//                       <label
//                         htmlFor="contact-email"
//                         className="mb-2 block text-sm font-semibold text-slate-800"
//                       >
//                         Email Address
//                         <span className="text-red-500"> *</span>
//                       </label>

//                       <input
//                         id="contact-email"
//                         name="email"
//                         type="email"
//                         autoComplete="email"
//                         required
//                         placeholder="you@example.com"
//                         className={inputStyle}
//                       />
//                     </div>

//                     {/* Phone */}
//                     <div>
//                       <label
//                         htmlFor="contact-phone"
//                         className="mb-2 block text-sm font-semibold text-slate-800"
//                       >
//                         Phone Number
//                       </label>

//                       <input
//                         id="contact-phone"
//                         name="phone"
//                         type="tel"
//                         autoComplete="tel"
//                         placeholder="+91 XXXXX XXXXX"
//                         className={inputStyle}
//                       />
//                     </div>

//                     {/* Service */}
//                     <div>
//                       <label
//                         htmlFor="contact-service"
//                         className="mb-2 block text-sm font-semibold text-slate-800"
//                       >
//                         Enquiry Type
//                       </label>

//                       <select
//                         id="contact-service"
//                         name="service"
//                         defaultValue=""
//                         className={inputStyle}
//                       >
//                         <option value="" disabled>
//                           Select enquiry type
//                         </option>

//                         <option value="Personal Investigation">
//                           Personal Investigation
//                         </option>

//                         <option value="Corporate Investigation">
//                           Corporate Investigation
//                         </option>

//                         <option value="Background Verification">
//                           Background Verification
//                         </option>

//                         <option value="General Enquiry">General Enquiry</option>

//                         <option value="Other">Other</option>
//                       </select>
//                     </div>

//                     {/* Message */}
//                     <div className="sm:col-span-2">
//                       <label
//                         htmlFor="contact-message"
//                         className="mb-2 block text-sm font-semibold text-slate-800"
//                       >
//                         Your Message
//                         <span className="text-red-500"> *</span>
//                       </label>

//                       <textarea
//                         id="contact-message"
//                         name="message"
//                         rows={6}
//                         required
//                         placeholder="Tell us briefly how we can help you..."
//                         className={`${inputStyle} resize-y leading-7`}
//                       />
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <motion.button
//                     type="submit"
//                     whileHover={{
//                       scale: 1.015,
//                     }}
//                     whileTap={{
//                       scale: 0.98,
//                     }}
//                     className="group mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-blue-600/25"
//                   >
//                     Prepare Confidential Enquiry
//                     <ArrowRight
//                       size={19}
//                       className="transition-transform duration-300 group-hover:translate-x-1"
//                     />
//                   </motion.button>

//                   {/* Status Message */}
//                   {emailMessage && (
//                     <div
//                       role="status"
//                       className="mt-5 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-900"
//                     >
//                       <CheckCircle2 size={19} className="mt-0.5 shrink-0" />

//                       <p>{emailMessage}</p>
//                     </div>
//                   )}

//                   <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
//                     <LockKeyhole size={14} className="shrink-0 text-blue-700" />
//                     Please share only necessary information.
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* =====================================
//           OFFICE LOCATIONS
//       ===================================== */}
//       <section className="bg-[#f5f8fc] px-5 py-24 sm:px-8 lg:py-28">
//         <div className="mx-auto max-w-7xl">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={stagger}
//             className="mb-12"
//           >
//             <motion.p
//               variants={fadeUp}
//               className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-700"
//             >
//               <span className="h-px w-8 bg-blue-700" />
//               OUR LOCATIONS
//             </motion.p>

//             <motion.h2
//               variants={fadeUp}
//               className="font-serif text-4xl font-semibold text-slate-950 sm:text-5xl"
//             >
//               Our Office <span className="text-blue-700">Locations.</span>
//             </motion.h2>

//             <motion.p
//               variants={fadeUp}
//               className="mt-5 max-w-2xl leading-7 text-slate-600"
//             >
//               Connect with our team through our offices in New Delhi and Dubai.
//             </motion.p>
//           </motion.div>

//           <div className="grid gap-6 md:grid-cols-2">
//             {offices.map((office, index) => (
//               <motion.div
//                 key={office.city}
//                 initial={{
//                   opacity: 0,
//                   y: 40,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.15,
//                 }}
//                 whileHover={{
//                   y: -7,
//                 }}
//                 className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 sm:p-9"
//               >
//                 <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between">
//                     <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
//                       <MapPin size={25} />
//                     </div>

//                     <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold tracking-widest text-blue-700">
//                       {office.country}
//                     </span>
//                   </div>

//                   <h3 className="mt-8 font-serif text-3xl font-semibold text-slate-950">
//                     {office.city}
//                   </h3>

//                   <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
//                     {office.address}
//                   </p>

//                   <a
//                     href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//                       office.address,
//                     )}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-blue-500"
//                   >
//                     View on Google Maps
//                     <ArrowUpRight
//                       size={17}
//                       className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//                     />
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =====================================
//           PREMIUM LIGHT CTA
//           Different from dark footer
//       ===================================== */}
//       <section className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-br from-[#eef5ff] via-white to-[#e5f1ff] px-5 py-20 sm:px-8 lg:py-24">
//         {/* Decorative Glow */}
//         <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-[90px]" />

//         <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-[90px]" />

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 40,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.7,
//           }}
//           className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
//         >
//           {/* CTA Content */}
//           <div className="max-w-2xl">
//             <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/70 px-4 py-2">
//               <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />

//               <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
//                 WE'RE READY TO LISTEN
//               </span>
//             </div>

//             <h2 className="font-serif text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
//               Have a Question?
//               <br />
//               <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
//                 Let's Talk Privately.
//               </span>
//             </h2>

//             <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
//               Get in touch to discuss your requirements and learn how our
//               professional team may assist you.
//             </p>

//             <div className="mt-7 flex items-center gap-3 text-sm font-medium text-slate-600">
//               <ShieldCheck size={20} className="text-blue-700" />
//               Discreet & Professional Assistance
//             </div>
//           </div>

//           {/* CTA Button */}
//           <motion.a
//             href="#enquiry-form"
//             whileHover={{
//               scale: 1.05,
//               y: -4,
//             }}
//             whileTap={{
//               scale: 0.97,
//             }}
//             className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-blue-700 px-9 py-5 text-sm font-bold text-white shadow-xl shadow-blue-700/20 transition-all duration-300 hover:bg-blue-800 hover:shadow-blue-700/30"
//           >
//             Contact Our Team
//             <ArrowUpRight
//               size={20}
//               className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
//             />
//           </motion.a>
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// export default Contact;

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  LockKeyhole,
  Send,
  Globe2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

// Contact information
const contactInfo = [
  {
    icon: Phone,
    label: "CALL OUR TEAM",
    title: "+91 9891915550",
    description: "Speak directly with our team.",
    href: "tel:+919891915550",
  },
  {
    icon: Phone,
    label: "CALL OUR TEAM",
    title: "01141882075",
    description: "Speak directly with our team.",
    href: "tel:+911141882075",
  },
  {
    icon: Mail,
    label: "EMAIL ENQUIRIES",
    title: "detectiveservice7@gmail.com",
    description: "Send your enquiry privately.",
    href: "mailto:detectiveservice7@gmail.com",
  },
];

// Office locations
const offices = [
  {
    country: "INDIA",
    city: "New Delhi",
    address:
      "43/17, A-Block, Mange Ram Park, Pooth Kalan, Rohini Sector 20, New Delhi, Delhi 110085",
  },
  {
    country: "UNITED ARAB EMIRATES",
    city: "Dubai",
    address:
      "Office 29, Wakson Building, Second Floor, Sheikh Zayed Road, Dubai, UAE",
  },
];

// Animation variants
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Contact = () => {
  // Formspree React Integration
  const [state, handleSubmit] = useForm("xzeeoopj");

  const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100";

  return (
    <main className="overflow-hidden bg-white">
      {/* =====================================
          HERO SECTION
      ===================================== */}
      <section className="relative isolate overflow-hidden bg-[#06152b] px-5 pb-28 pt-24 text-white sm:px-8 lg:pb-36 lg:pt-32">
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-32 -top-32 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[110px]"
          />

          <motion.div
            animate={{
              x: [0, 70, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[100px]"
          />

          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "65px 65px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-400/25 bg-white/5 px-5 py-2.5 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                Private & Confidential Enquiries
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-[78px]"
            >
              Let's Start a
              <br />
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Confidential
              </span>
              <br />
              Conversation.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              Every situation deserves attention, professionalism, and
              discretion. Reach out to our team and tell us how we can assist
              you.
            </motion.p>

            {/* Hero Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#enquiry-form"
                className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                Send an Enquiry
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="tel:+919891915550"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-blue-300/50 hover:bg-white/10"
              >
                <Phone size={17} />
                Speak With Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================
          TRUST FEATURES
      ===================================== */}
      <section className="relative z-20 mx-auto -mt-12 max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.10)] md:grid-cols-3"
        >
          {[
            {
              icon: ShieldCheck,
              title: "Discreet Approach",
              text: "Your privacy matters to us.",
            },
            {
              icon: LockKeyhole,
              title: "Private Enquiries",
              text: "Sensitive matters handled carefully.",
            },
            {
              icon: Globe2,
              title: "International Presence",
              text: "Offices in India and the UAE.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group flex items-center gap-4 p-6 transition-colors duration-300 hover:bg-blue-50/60 sm:p-8 ${
                index !== 2
                  ? "border-b border-slate-100 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:rotate-6 group-hover:bg-blue-700 group-hover:text-white">
                <item.icon size={24} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* =====================================
          CONTACT INFORMATION + FORM
      ===================================== */}
      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700"
            >
              <span className="h-px w-8 bg-blue-700" />
              GET IN TOUCH
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl"
            >
              We're Here
              <br />
              <span className="text-blue-700">To Listen.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-base leading-8 text-slate-600"
            >
              Whether you need information about our services or wish to discuss
              a private matter, our team is ready to hear from you.
            </motion.p>

            {/* Contact Cards */}
            <motion.div variants={stagger} className="mt-10 space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  variants={fadeUp}
                  href={item.href}
                  whileHover={{ y: -4 }}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 sm:p-6"
                >
                  <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-blue-600 transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <item.icon size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold tracking-[0.18em] text-blue-700">
                      {item.label}
                    </p>

                    <h3 className="mt-1 break-all text-sm font-bold text-slate-900 sm:text-base">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="hidden shrink-0 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-700 sm:block"
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Privacy Note */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-5"
            >
              <ShieldCheck
                size={22}
                className="mt-0.5 shrink-0 text-blue-700"
              />

              <p className="text-sm leading-7 text-slate-600">
                <strong className="text-slate-900">
                  Your privacy comes first.
                </strong>{" "}
                Please avoid sharing highly sensitive personal information in
                your initial enquiry.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            id="enquiry-form"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="relative scroll-mt-24"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-blue-100 via-transparent to-cyan-100 opacity-70 blur-xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.09)] sm:p-10">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-blue-50/70" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                  <Send size={21} />
                </div>

                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                      PRIVATE ENQUIRY
                    </p>

                    <h2 className="mt-2 font-serif text-3xl font-semibold text-slate-950 sm:text-4xl">
                      Send Us a Message
                    </h2>
                  </div>

                  <Sparkles size={23} className="text-blue-400" />
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Fill in the details below. Your enquiry will be sent directly
                  to our team, and we will contact you shortly.
                </p>

                {/* Formspree Form */}
                <form onSubmit={handleSubmit} className="mt-9">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Full Name
                        <span className="text-red-500"> *</span>
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Your full name"
                        className={inputStyle}
                      />

                      <ValidationError field="name" errors={state.errors} />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Email Address
                        <span className="text-red-500"> *</span>
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@example.com"
                        className={inputStyle}
                      />

                      <ValidationError field="email" errors={state.errors} />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Phone Number
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className={inputStyle}
                      />

                      <ValidationError field="phone" errors={state.errors} />
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Enquiry Type
                      </label>

                      <select
                        id="contact-service"
                        name="service"
                        defaultValue=""
                        className={inputStyle}
                      >
                        <option value="" disabled>
                          Select enquiry type
                        </option>

                        <option value="Personal Investigation">
                          Personal Investigation
                        </option>

                        <option value="Corporate Investigation">
                          Corporate Investigation
                        </option>

                        <option value="Background Verification">
                          Background Verification
                        </option>

                        <option value="General Enquiry">General Enquiry</option>

                        <option value="Other">Other</option>
                      </select>

                      <ValidationError field="service" errors={state.errors} />
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="contact-message"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Your Message
                        <span className="text-red-500"> *</span>
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows={6}
                        required
                        placeholder="Tell us briefly how we can help you..."
                        className={`${inputStyle} resize-y leading-7`}
                      />

                      <ValidationError field="message" errors={state.errors} />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{
                      scale: state.submitting ? 1 : 1.015,
                    }}
                    whileTap={{
                      scale: state.submitting ? 1 : 0.98,
                    }}
                    className="group mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-blue-600/25 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {state.submitting
                      ? "Submitting Enquiry..."
                      : "Send Confidential Enquiry"}

                    <ArrowRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>

                  {/* Formspree Success Message */}
                  {state.succeeded && (
                    <div
                      role="status"
                      className="mt-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
                    >
                      <CheckCircle2 size={19} className="mt-0.5 shrink-0" />

                      <div>
                        <p className="font-semibold">
                          Enquiry submitted successfully!
                        </p>

                        <p className="mt-1">
                          Thank you for contacting us. Our team will get back to
                          you shortly.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Formspree Error Message */}
                  {state.errors && (
                    <div
                      role="alert"
                      className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
                    >
                      Unable to submit your enquiry. Please check the form
                      details and try again.
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
                    <LockKeyhole size={14} className="shrink-0 text-blue-700" />
                    Please share only necessary information.
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================
          OFFICE LOCATIONS
      ===================================== */}
      <section className="bg-[#f5f8fc] px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12"
          >
            <motion.p
              variants={fadeUp}
              className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-700"
            >
              <span className="h-px w-8 bg-blue-700" />
              OUR LOCATIONS
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl font-semibold text-slate-950 sm:text-5xl"
            >
              Our Office <span className="text-blue-700">Locations.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl leading-7 text-slate-600"
            >
              Connect with our team through our offices in New Delhi and Dubai.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 sm:p-9"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-all duration-300 group-hover:bg-blue-700 group-hover:text-white">
                      <MapPin size={25} />
                    </div>

                    <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold tracking-widest text-blue-700">
                      {office.country}
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-3xl font-semibold text-slate-950">
                    {office.city}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                    {office.address}
                  </p>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      office.address,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition-colors hover:text-blue-500"
                  >
                    View on Google Maps
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          PREMIUM LIGHT CTA
          Different from dark footer
      ===================================== */}
      <section className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-br from-[#eef5ff] via-white to-[#e5f1ff] px-5 py-20 sm:px-8 lg:py-24">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-[90px]" />

        <div className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-[90px]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
        >
          {/* CTA Content */}
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/70 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                WE'RE READY TO LISTEN
              </span>
            </div>

            <h2 className="font-serif text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
              Have a Question?
              <br />
              <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                Let's Talk Privately.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              Get in touch to discuss your requirements and learn how our
              professional team may assist you.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm font-medium text-slate-600">
              <ShieldCheck size={20} className="text-blue-700" />
              Discreet & Professional Assistance
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#enquiry-form"
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-blue-700 px-9 py-5 text-sm font-bold text-white shadow-xl shadow-blue-700/20 transition-all duration-300 hover:bg-blue-800 hover:shadow-blue-700/30"
          >
            Contact Our Team
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;