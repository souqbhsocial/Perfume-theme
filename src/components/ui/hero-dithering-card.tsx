import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function OurStorySection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="our-story" className="py-24 w-full flex justify-center items-center px-4 md:px-6">
      <div 
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-brand-gold/20 bg-brand-dark shadow-sm min-h-[600px] md:min-h-[600px] flex flex-col items-center justify-center duration-500">
             <Suspense fallback={<div className="absolute inset-0 bg-brand-dark/50" />}>
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
              <Dithering
                colorBack="#00000000" // Transparent
                colorFront="#B8962E"  // Accent (Brand Gold)
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
            
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-sm font-medium text-brand-gold backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              قصتنا — Our Story
            </div>

            {/* Headline */}
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-brand-cream mb-8 leading-[1.05]">
              More than a perfume.<br />
              <span className="italic text-brand-gold-light">A piece of the Gulf.</span>
            </h2>
            
            {/* Description */}
            <p className="text-brand-text-muted text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Al Ouyof was born from a deep love of Arabian fragrance culture. As an Emirati brand, we believe scent is memory. It carries the warmth of home, the spirit of ancestors, and the identity of our land. Every fragrance we craft is a story, waiting to live on your skin.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
