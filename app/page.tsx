import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-cream text-text">
      <header className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
          <Image
            src="/images/hero.jpg"
            alt="Sample Company"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(49,54,71,0.5)] to-[rgba(67,86,99,0.7)] z-[2]"></div>
        </div>
        <div className="relative z-[3] text-center text-white max-w-4xl px-5">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-4 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.3)] tracking-[0.02em]">
            Sample Company
          </h1>
          <p className="text-[clamp(1.1rem,2.5vw,1.5rem)] opacity-95 font-normal drop-shadow-[1px_1px_4px_rgba(0,0,0,0.2)]">
            Welcome to Our Company
          </p>
        </div>
      </header>

      <main>
        <section className="bg-background-cream py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-text mb-10 text-center">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              <div className="text-center p-12 bg-white rounded-[20px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_12px_40px_rgba(163,176,135,0.25)] shadow-[0_4px_20px_rgba(49,54,71,0.08)] border-2 border-[hsla(79,21%,61%,0.15)] hover:border-primary relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="mb-6 flex justify-center items-center">
                  <div className="text-[3.5rem] w-[90px] h-[90px] flex items-center justify-center bg-gradient-to-br from-[hsla(79,21%,61%,0.1)] to-[hsla(79,21%,61%,0.2)] rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:bg-gradient-to-br group-hover:from-[hsla(79,21%,61%,0.2)] group-hover:to-[hsla(79,21%,61%,0.3)]">
                    ✨
                  </div>
                </div>
                <h3 className="text-[1.4rem] font-bold text-text mb-4 tracking-[-0.02em]">
                  Quality Service
                </h3>
                <p className="text-[1.05rem] text-text-light leading-[1.7] font-normal">
                  We deliver exceptional quality in everything we do, ensuring
                  your complete satisfaction.
                </p>
              </div>
              <div className="text-center p-12 bg-white rounded-[20px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_12px_40px_rgba(163,176,135,0.25)] shadow-[0_4px_20px_rgba(49,54,71,0.08)] border-2 border-[hsla(79,21%,61%,0.15)] hover:border-primary relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="mb-6 flex justify-center items-center">
                  <div className="text-[3.5rem] w-[90px] h-[90px] flex items-center justify-center bg-gradient-to-br from-[hsla(79,21%,61%,0.1)] to-[hsla(79,21%,61%,0.2)] rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:bg-gradient-to-br group-hover:from-[hsla(79,21%,61%,0.2)] group-hover:to-[hsla(79,21%,61%,0.3)]">
                    👥
                  </div>
                </div>
                <h3 className="text-[1.4rem] font-bold text-text mb-4 tracking-[-0.02em]">
                  Expert Team
                </h3>
                <p className="text-[1.05rem] text-text-light leading-[1.7] font-normal">
                  Our experienced professionals bring years of expertise to
                  every project.
                </p>
              </div>
              <div className="text-center p-12 bg-white rounded-[20px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_12px_40px_rgba(163,176,135,0.25)] shadow-[0_4px_20px_rgba(49,54,71,0.08)] border-2 border-[hsla(79,21%,61%,0.15)] hover:border-primary relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="mb-6 flex justify-center items-center">
                  <div className="text-[3.5rem] w-[90px] h-[90px] flex items-center justify-center bg-gradient-to-br from-[hsla(79,21%,61%,0.1)] to-[hsla(79,21%,61%,0.2)] rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-[5deg] group-hover:bg-gradient-to-br group-hover:from-[hsla(79,21%,61%,0.2)] group-hover:to-[hsla(79,21%,61%,0.3)]">
                    🎯
                  </div>
                </div>
                <h3 className="text-[1.4rem] font-bold text-text mb-4 tracking-[-0.02em]">
                  Customer Focus
                </h3>
                <p className="text-[1.05rem] text-text-light leading-[1.7] font-normal">
                  Your success is our priority. We tailor our approach to meet
                  your unique needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-white to-background-cream py-32 px-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsla(79,21%,61%,0.05)_0,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(67,86,99,0.05)_0,transparent_50%)] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center relative z-[1]">
            <div className="relative h-full min-h-[600px]">
              <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(49,54,71,0.2)] transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src="/images/story.jpg"
                  alt="Our story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsla(79,21%,61%,0.1)] to-[rgba(67,86,99,0.2)] pointer-events-none"></div>
              </div>
            </div>
            <div className="py-10">
              <div className="mb-12">
                <span className="inline-block text-[0.85rem] font-semibold tracking-[0.15em] uppercase text-primary mb-4 px-5 py-2 bg-[hsla(79,21%,61%,0.1)] rounded-full border border-[hsla(79,21%,61%,0.2)]">
                  About Us
                </span>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-text mb-5 leading-tight tracking-[-0.02em]">
                  Our Story
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary-dark rounded-sm mt-4"></div>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-[1.3rem] leading-[2.1] text-text font-medium m-0">
                  This is a sample description for the default template.
                </p>
                <p className="text-[1.2rem] leading-[2] text-text-light font-normal tracking-[0.01em] m-0">
                  Our journey began with a simple vision: to create meaningful
                  connections and deliver exceptional value to every client we
                  serve. Over the years, we have built a reputation for
                  excellence, innovation, and unwavering commitment to our
                  clients&apos; success.
                </p>
                <p className="text-[1.2rem] leading-[2] text-text-light font-normal tracking-[0.01em] m-0">
                  What sets us apart is our passion for what we do and our
                  dedication to continuous improvement. We believe that every
                  challenge is an opportunity to grow, and every success is a
                  stepping stone to greater achievements.
                </p>
                <p className="text-[1.2rem] leading-[2] text-text-light font-normal tracking-[0.01em] m-0">
                  Today, we stand proud of our accomplishments while remaining
                  focused on the future. We are constantly evolving, learning,
                  and adapting to meet the changing needs of our clients and the
                  world around us.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-text mb-10 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              <div className="text-center p-12 bg-gradient-to-br from-background-cream to-white rounded-[20px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_12px_40px_rgba(163,176,135,0.25)] shadow-[0_4px_20px_rgba(49,54,71,0.08)] border-2 border-[hsla(79,21%,61%,0.15)] hover:border-primary hover:bg-gradient-to-br hover:from-white hover:to-background-cream relative overflow-hidden group">
                <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,hsla(79,21%,61%,0.1)_0,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="mb-6 flex justify-center items-center relative z-[1]">
                  <div className="text-[3.5rem] w-[90px] h-[90px] flex items-center justify-center bg-gradient-to-br from-[rgba(49,54,71,0.05)] to-[rgba(67,86,99,0.1)] rounded-full transition-all duration-300 group-hover:scale-[1.15] group-hover:rotate-[-5deg] group-hover:bg-gradient-to-br group-hover:from-[hsla(79,21%,61%,0.15)] group-hover:to-[hsla(79,21%,61%,0.25)] drop-shadow-[0_4px_8px_rgba(49,54,71,0.1)] group-hover:drop-shadow-[0_6px_12px_rgba(163,176,135,0.3)]">
                    💡
                  </div>
                </div>
                <h3 className="text-[1.4rem] font-bold text-text mb-4 tracking-[-0.02em] relative z-[1]">
                  Consultation
                </h3>
                <p className="text-[1.05rem] text-text-light leading-[1.7] font-normal relative z-[1]">
                  Expert guidance to help you make informed decisions and
                  achieve your goals.
                </p>
              </div>
              <div className="text-center p-12 bg-gradient-to-br from-background-cream to-white rounded-[20px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_12px_40px_rgba(163,176,135,0.25)] shadow-[0_4px_20px_rgba(49,54,71,0.08)] border-2 border-[hsla(79,21%,61%,0.15)] hover:border-primary hover:bg-gradient-to-br hover:from-white hover:to-background-cream relative overflow-hidden group">
                <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,hsla(79,21%,61%,0.1)_0,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="mb-6 flex justify-center items-center relative z-[1]">
                  <div className="text-[3.5rem] w-[90px] h-[90px] flex items-center justify-center bg-gradient-to-br from-[rgba(49,54,71,0.05)] to-[rgba(67,86,99,0.1)] rounded-full transition-all duration-300 group-hover:scale-[1.15] group-hover:rotate-[-5deg] group-hover:bg-gradient-to-br group-hover:from-[hsla(79,21%,61%,0.15)] group-hover:to-[hsla(79,21%,61%,0.25)] drop-shadow-[0_4px_8px_rgba(49,54,71,0.1)] group-hover:drop-shadow-[0_6px_12px_rgba(163,176,135,0.3)]">
                    ⚡
                  </div>
                </div>
                <h3 className="text-[1.4rem] font-bold text-text mb-4 tracking-[-0.02em] relative z-[1]">
                  Implementation
                </h3>
                <p className="text-[1.05rem] text-text-light leading-[1.7] font-normal relative z-[1]">
                  Efficient execution with attention to detail and timely
                  delivery.
                </p>
              </div>
              <div className="text-center p-12 bg-gradient-to-br from-background-cream to-white rounded-[20px] transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_12px_40px_rgba(163,176,135,0.25)] shadow-[0_4px_20px_rgba(49,54,71,0.08)] border-2 border-[hsla(79,21%,61%,0.15)] hover:border-primary hover:bg-gradient-to-br hover:from-white hover:to-background-cream relative overflow-hidden group">
                <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,hsla(79,21%,61%,0.1)_0,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="mb-6 flex justify-center items-center relative z-[1]">
                  <div className="text-[3.5rem] w-[90px] h-[90px] flex items-center justify-center bg-gradient-to-br from-[rgba(49,54,71,0.05)] to-[rgba(67,86,99,0.1)] rounded-full transition-all duration-300 group-hover:scale-[1.15] group-hover:rotate-[-5deg] group-hover:bg-gradient-to-br group-hover:from-[hsla(79,21%,61%,0.15)] group-hover:to-[hsla(79,21%,61%,0.25)] drop-shadow-[0_4px_8px_rgba(49,54,71,0.1)] group-hover:drop-shadow-[0_6px_12px_rgba(163,176,135,0.3)]">
                    🤝
                  </div>
                </div>
                <h3 className="text-[1.4rem] font-bold text-text mb-4 tracking-[-0.02em] relative z-[1]">
                  Support
                </h3>
                <p className="text-[1.05rem] text-text-light leading-[1.7] font-normal relative z-[1]">
                  Ongoing assistance to ensure your continued success and
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-secondary-dark to-secondary py-24 px-5 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg width='100' height='100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='1' fill='rgba(163,176,135,0.1)'/></svg>")`,
            }}
          ></div>
          <div className="max-w-6xl mx-auto relative z-[1]">
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-background-cream mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10">
              <div className="bg-[hsla(0,0%,100%,0.95)] p-10 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] border-2 border-[hsla(79,21%,61%,0.2)] hover:border-primary relative">
                <div className="absolute top-5 left-6 text-[5rem] text-[hsla(79,21%,61%,0.2)] font-serif leading-none">
                  &quot;
                </div>
                <div className="flex gap-1 mb-5 justify-center">
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                </div>
                <p className="text-[1.1rem] leading-[1.8] text-text mb-8 italic relative z-[1]">
                  &quot;Outstanding service and exceptional results. They
                  exceeded all our expectations and delivered beyond what we
                  imagined.&quot;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-[hsla(79,21%,61%,0.2)]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary-dark text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-[0_4px_12px_hsla(79,21%,61%,0.3)]">
                    S
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-text text-base mb-1">
                      Sarah Johnson
                    </div>
                    <div className="text-[0.9rem] text-text-light font-normal">
                      CEO, Tech Solutions
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[hsla(0,0%,100%,0.95)] p-10 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] border-2 border-[hsla(79,21%,61%,0.2)] hover:border-primary relative">
                <div className="absolute top-5 left-6 text-[5rem] text-[hsla(79,21%,61%,0.2)] font-serif leading-none">
                  &quot;
                </div>
                <div className="flex gap-1 mb-5 justify-center">
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                </div>
                <p className="text-[1.1rem] leading-[1.8] text-text mb-8 italic relative z-[1]">
                  &quot;Professional, reliable, and truly dedicated to our
                  success. Working with them has been a game-changer for our
                  business.&quot;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-[hsla(79,21%,61%,0.2)]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary-dark text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-[0_4px_12px_hsla(79,21%,61%,0.3)]">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-text text-base mb-1">
                      Michael Chen
                    </div>
                    <div className="text-[0.9rem] text-text-light font-normal">
                      Director, Innovation Labs
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[hsla(0,0%,100%,0.95)] p-10 rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] border-2 border-[hsla(79,21%,61%,0.2)] hover:border-primary relative">
                <div className="absolute top-5 left-6 text-[5rem] text-[hsla(79,21%,61%,0.2)] font-serif leading-none">
                  &quot;
                </div>
                <div className="flex gap-1 mb-5 justify-center">
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                  <span className="text-yellow-400 text-xl drop-shadow-[0_2px_4px_rgba(255,215,0,0.3)]">
                    ★
                  </span>
                </div>
                <p className="text-[1.1rem] leading-[1.8] text-text mb-8 italic relative z-[1]">
                  &quot;The team&apos;s expertise and attention to detail is
                  unmatched. They transformed our vision into reality
                  seamlessly.&quot;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-[hsla(79,21%,61%,0.2)]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary-dark text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-[0_4px_12px_hsla(79,21%,61%,0.3)]">
                    E
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-text text-base mb-1">
                      Emily Rodriguez
                    </div>
                    <div className="text-[0.9rem] text-text-light font-normal">
                      Founder, Creative Studio
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-background-cream to-white py-32 px-5 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-[0.85rem] font-semibold tracking-[0.15em] uppercase text-primary mb-4 px-5 py-2 bg-[hsla(79,21%,61%,0.1)] rounded-full border border-[hsla(79,21%,61%,0.2)]">
                Get In Touch
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold text-text mb-5 tracking-[-0.02em]">
                Contact Us
              </h2>
              <p className="text-[1.2rem] text-text-light leading-[1.8] max-w-2xl mx-auto">
                Ready to take the next step? Fill out the form below and
                we&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
              <form className="bg-white p-12 rounded-[24px] shadow-[0_8px_30px_rgba(49,54,71,0.1)] border-2 border-[hsla(79,21%,61%,0.15)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="text-[0.95rem] font-semibold text-text mb-2 tracking-[0.01em]"
                    >
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 text-base font-inherit text-text bg-background-cream border-2 border-[hsla(79,21%,61%,0.2)] rounded-xl transition-all duration-300 outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_hsla(79,21%,61%,0.1)] placeholder:text-text-light placeholder:opacity-50"
                      placeholder="John Doe"
                      required
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-[0.95rem] font-semibold text-text mb-2 tracking-[0.01em]"
                    >
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-4 text-base font-inherit text-text bg-background-cream border-2 border-[hsla(79,21%,61%,0.2)] rounded-xl transition-all duration-300 outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_hsla(79,21%,61%,0.1)] placeholder:text-text-light placeholder:opacity-50"
                      placeholder="john@example.com"
                      required
                      name="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="text-[0.95rem] font-semibold text-text mb-2 tracking-[0.01em]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-5 py-4 text-base font-inherit text-text bg-background-cream border-2 border-[hsla(79,21%,61%,0.2)] rounded-xl transition-all duration-300 outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_hsla(79,21%,61%,0.1)] placeholder:text-text-light placeholder:opacity-50"
                      placeholder="+1 (555) 123-4567"
                      name="phone"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="subject"
                      className="text-[0.95rem] font-semibold text-text mb-2 tracking-[0.01em]"
                    >
                      Subject <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-5 py-4 text-base font-inherit text-text bg-background-cream border-2 border-[hsla(79,21%,61%,0.2)] rounded-xl transition-all duration-300 outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_hsla(79,21%,61%,0.1)] placeholder:text-text-light placeholder:opacity-50"
                      placeholder="How can we help?"
                      required
                      name="subject"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="message"
                    className="text-[0.95rem] font-semibold text-text mb-2 tracking-[0.01em]"
                  >
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-5 py-4 text-base font-inherit text-text bg-background-cream border-2 border-[hsla(79,21%,61%,0.2)] rounded-xl transition-all duration-300 outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_4px_hsla(79,21%,61%,0.1)] placeholder:text-text-light placeholder:opacity-50 resize-y min-h-[150px] leading-[1.6]"
                    rows={6}
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-10 py-5 text-[1.1rem] font-semibold text-white bg-gradient-to-br from-primary to-secondary-dark border-none rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2.5 mt-2.5 shadow-[0_4px_15px_hsla(79,21%,61%,0.3)] font-inherit tracking-[0.02em] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_hsla(79,21%,61%,0.4)] hover:bg-gradient-to-br hover:from-secondary-dark hover:to-primary active:translate-y-0"
                >
                  Send Message
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
              <div className="bg-gradient-to-br from-secondary to-secondary-dark p-12 rounded-[24px] text-white shadow-[0_8px_30px_rgba(49,54,71,0.2)] text-center flex flex-col items-center">
                <div className="text-6xl mb-6 drop-shadow-[0_4px_8px_rgba(163,176,135,0.3)]">
                  💬
                </div>
                <h3 className="text-[1.8rem] font-bold text-background-cream mb-5 tracking-[-0.01em]">
                  We&apos;re Here to Help
                </h3>
                <p className="text-[1.05rem] leading-[1.8] text-[rgba(255,248,212,0.9)] mb-9 font-normal">
                  Have a question or want to learn more? Fill out the form and
                  we&apos;ll get back to you within 24 hours. We&apos;re
                  committed to providing you with the best possible service.
                </p>
                <div className="flex flex-col gap-4 w-full mt-2.5">
                  <div className="flex items-center justify-center gap-3 px-5 py-3 bg-[hsla(79,21%,61%,0.15)] rounded-xl border border-[hsla(79,21%,61%,0.2)] transition-all duration-300 hover:bg-[hsla(79,21%,61%,0.25)] hover:border-[hsla(79,21%,61%,0.4)] hover:translate-x-1">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-background-cream text-base font-medium">
                      Quick Response
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 px-5 py-3 bg-[hsla(79,21%,61%,0.15)] rounded-xl border border-[hsla(79,21%,61%,0.2)] transition-all duration-300 hover:bg-[hsla(79,21%,61%,0.25)] hover:border-[hsla(79,21%,61%,0.4)] hover:translate-x-1">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-background-cream text-base font-medium">
                      Expert Support
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3 px-5 py-3 bg-[hsla(79,21%,61%,0.15)] rounded-xl border border-[hsla(79,21%,61%,0.2)] transition-all duration-300 hover:bg-[hsla(79,21%,61%,0.25)] hover:border-[hsla(79,21%,61%,0.4)] hover:translate-x-1">
                    <span className="text-primary font-bold text-xl">✓</span>
                    <span className="text-background-cream text-base font-medium">
                      Personalized Service
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-16 px-10 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10 pb-10 border-b border-[hsla(79,21%,61%,0.2)]">
            <div className="flex flex-col text-left">
              <h3 className="text-[0.9rem] font-semibold tracking-[0.15em] uppercase text-primary mb-6">
                Contact
              </h3>
              <div className="mb-5">
                <span className="block text-[0.75rem] tracking-[0.1em] uppercase text-primary mb-2 font-normal opacity-80">
                  Phone
                </span>
                <a
                  href="tel:+1 (555) 123-4567"
                  className="text-[0.95rem] text-background-cream no-underline font-light tracking-[0.02em] transition-colors duration-300 block hover:text-primary"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <span className="block text-[0.75rem] tracking-[0.1em] uppercase text-primary mb-2 font-normal opacity-80">
                  Email
                </span>
                <a
                  href="mailto:contact@example.com"
                  className="text-[0.95rem] text-background-cream no-underline font-light tracking-[0.02em] transition-colors duration-300 block hover:text-primary"
                >
                  contact@example.com
                </a>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <h3 className="text-[0.9rem] font-semibold tracking-[0.15em] uppercase text-primary mb-6">
                Location
              </h3>
              <p className="text-[0.95rem] leading-[1.8] text-background-cream font-light tracking-[0.01em] m-0">
                123 Main Street, City, State 12345
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center pt-5">
            <p className="text-[0.85rem] text-primary tracking-[0.05em] font-light m-0 opacity-80">
              © 2025 Sample Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
