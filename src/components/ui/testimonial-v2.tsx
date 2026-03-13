import React from "react";
import { motion } from "framer-motion";
import "./testimonial-v2.css";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data: Based on your website reviews (Ondo power saver / IEMS). Profile images: Indian people (Unsplash). ---
const INDIAN_AVATARS = [
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150&h=150", // Indian man
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=150&h=150", // Indian woman
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150", // Woman portrait
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=150&h=150", // Man portrait
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150", // Woman professional
  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150&h=150", // Man
  "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=150&h=150", // Man portrait
  "https://images.unsplash.com/photo-1619895865013-28bbec946653?auto=format&fit=crop&q=80&w=150&h=150", // Man
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=150&h=150", // Woman portrait
];

const testimonials: Testimonial[] = [
  {
    text: "The power saver has reduced our electricity bills by almost 30% in just three months. Installation was quick and easy, and we noticed the difference immediately. Excellent investment for any household!",
    image: INDIAN_AVATARS[0],
    name: "Rajesh Kumar",
    role: "Home Owner",
  },
  {
    text: "Our appliances are now better protected from voltage fluctuations, and the energy savings have been substantial. The device is very reliable and requires minimal maintenance. Highly satisfied with the purchase!",
    image: INDIAN_AVATARS[1],
    name: "Priya Sharma",
    role: "Business Owner",
  },
  {
    text: "We installed this in our factory and saw immediate improvements in power factor and energy efficiency. The ROI has been excellent, and our electricity costs have dropped significantly. Great investment for any industrial setup!",
    image: INDIAN_AVATARS[2],
    name: "Amit Patel",
    role: "Factory Manager",
  },
  {
    text: "Ondo's IEMS made a real difference in our office. We cut power wastage and our monthly bills are down. Setup was straightforward and the team was very supportive.",
    image: INDIAN_AVATARS[3],
    name: "Vikram Singh",
    role: "Office Manager",
  },
  {
    text: "Smart power solutions that actually deliver. Our shop's electricity costs have reduced and we have peace of mind with surge protection. Recommend to any small business.",
    image: INDIAN_AVATARS[4],
    name: "Kavita Desai",
    role: "Retail Owner",
  },
  {
    text: "The intelligent energy management system is easy to use and the savings are visible from the first month. Customer support was helpful with installation. Very happy with Ondo.",
    image: INDIAN_AVATARS[5],
    name: "Rahul Nair",
    role: "Facilities Head",
  },
  {
    text: "We wanted to lower our carbon footprint and electricity bills. Ondo's power saver did both. Our appliances are protected and we're saving every month. Worth every rupee.",
    image: INDIAN_AVATARS[6],
    name: "Anita Reddy",
    role: "Residential Customer",
  },
  {
    text: "Reliable product and quick installation. Our manufacturing unit has seen better power factor and fewer voltage issues. Ondo Solutions understood our needs and delivered.",
    image: INDIAN_AVATARS[7],
    name: "Suresh Iyer",
    role: "Plant Engineer",
  },
  {
    text: "Over 10,000 satisfied customers is no surprise. Our experience with Ondo's power saver and protector has been excellent—lower bills, safer appliances, and a greener approach.",
    image: INDIAN_AVATARS[8],
    name: "Meera Krishnan",
    role: "Home Owner",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration ?? 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  className="p-10 rounded-3xl border border-neutral-200 shadow-lg shadow-black/5 max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-neutral-600 leading-relaxed font-normal m-0 transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-100 group-hover:ring-primary/30 transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-semibold not-italic tracking-tight leading-5 text-neutral-900 transition-colors duration-300">
                          {name}
                        </cite>
                        <span className="text-sm leading-5 tracking-tight text-neutral-500 mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container px-4 z-10 mx-auto max-w-7xl"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-neutral-300 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-neutral-600 bg-neutral-100/50 transition-colors">
              Review
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-neutral-900 transition-colors"
          >
            What do people say about us
          </h2>
          <p className="text-center mt-5 text-neutral-500 text-lg leading-relaxed max-w-sm transition-colors">
            Over 10,000 satisfied customers across households, corporate offices,
            and manufacturing units have reduced their electricity costs with our
            products.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
