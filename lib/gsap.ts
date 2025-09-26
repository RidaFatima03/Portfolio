export async function gsapSetup() {
  const gsap = (await import('gsap')).gsap
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)
  return { gsap, ScrollTrigger }
}
