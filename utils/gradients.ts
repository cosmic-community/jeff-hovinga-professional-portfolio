export const gradients = {
  primary: 'linear-gradient(135deg, #059669 0%, #065f46 100%)',
  secondary: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
  tertiary: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
  sunset: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
  ocean: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
  forest: 'linear-gradient(135deg, #16a34a 0%, #166534 100%)',
  fire: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
  ice: 'linear-gradient(135deg, #6ee7b7 0%, #a7f3d0 100%)',
  dark: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
  cosmic: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #14b8a6 100%)',
}

export const meshGradients = {
  rainbow: 'radial-gradient(at 40% 20%, hsla(160,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(180,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(140,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(170,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(150,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(160,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(175,100%,76%,1) 0px, transparent 50%)',
  cool: 'radial-gradient(at 40% 20%, hsla(160,100%,74%,0.8) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(180,100%,56%,0.8) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(170,100%,93%,0.8) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(175,100%,76%,0.8) 0px, transparent 50%)',
  warm: 'radial-gradient(at 40% 20%, hsla(150,100%,74%,0.8) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(140,100%,56%,0.8) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(160,100%,93%,0.8) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(155,100%,76%,0.8) 0px, transparent 50%)',
}

export const glowColors = {
  blue: 'rgba(59, 130, 246, 0.4)',
  purple: 'rgba(147, 51, 234, 0.4)',
  pink: 'rgba(236, 72, 153, 0.4)',
  green: 'rgba(34, 197, 94, 0.4)',
  emerald: 'rgba(16, 185, 129, 0.4)',
  teal: 'rgba(20, 184, 166, 0.4)',
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