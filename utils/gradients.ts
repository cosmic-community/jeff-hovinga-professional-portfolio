export const gradients = {
  primary: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
  secondary: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
  tertiary: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)',
  sunset: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #047857 100%)',
  ocean: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)',
  forest: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
  fire: 'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
  ice: 'linear-gradient(135deg, #a7f3d0 0%, #d1fae5 100%)',
  dark: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
  cosmic: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%)',
}

export const meshGradients = {
  rainbow: 'radial-gradient(at 40% 20%, hsla(160,100%,74%,0.8) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(180,100%,56%,0.8) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(140,100%,93%,0.6) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(170,100%,76%,0.7) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(150,100%,77%,0.6) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(160,100%,70%,0.7) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(175,100%,76%,0.7) 0px, transparent 50%)',
  cool: 'radial-gradient(at 40% 20%, hsla(160,100%,74%,0.7) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(180,100%,56%,0.7) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(170,100%,93%,0.6) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(175,100%,76%,0.6) 0px, transparent 50%)',
  warm: 'radial-gradient(at 40% 20%, hsla(150,100%,74%,0.7) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(140,100%,56%,0.7) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(160,100%,93%,0.6) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(155,100%,76%,0.6) 0px, transparent 50%)',
}

export const glowColors = {
  blue: 'rgba(59, 130, 246, 0.4)',
  purple: 'rgba(147, 51, 234, 0.4)',
  pink: 'rgba(236, 72, 153, 0.4)',
  green: 'rgba(52, 211, 153, 0.3)',
  emerald: 'rgba(110, 231, 183, 0.3)',
  teal: 'rgba(45, 212, 191, 0.3)',
  cyan: 'rgba(6, 182, 212, 0.4)',
  orange: 'rgba(249, 115, 22, 0.4)',
  red: 'rgba(239, 68, 68, 0.4)',
  yellow: 'rgba(234, 179, 8, 0.4)',
  indigo: 'rgba(99, 102, 241, 0.4)',
}

export function getRandomGradient(): string {
  const gradientKeys = Object.keys(gradients) as (keyof typeof gradients)[]
  const randomIndex = Math.floor(Math.random() * gradientKeys.length)
  const randomKey = gradientKeys[randomIndex]
  return randomKey && gradients[randomKey] ? gradients[randomKey] : gradients.primary
}

export function getRandomGlowColor(): string {
  const glowKeys = Object.keys(glowColors) as (keyof typeof glowColors)[]
  const randomIndex = Math.floor(Math.random() * glowKeys.length)
  const randomKey = glowKeys[randomIndex]
  return randomKey && glowColors[randomKey] ? glowColors[randomKey] : glowColors.green
}

export function createCustomGradient(colors: string[], direction: number = 135): string {
  return `linear-gradient(${direction}deg, ${colors.join(', ')})`
}

export function createRadialGradient(centerColor: string, edgeColor: string = 'transparent'): string {
  return `radial-gradient(circle, ${centerColor} 0%, ${edgeColor} 100%)`
}