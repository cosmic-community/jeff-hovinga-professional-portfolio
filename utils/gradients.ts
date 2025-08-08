export const gradients = {
  primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  tertiary: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  sunset: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
  ocean: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  forest: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
  fire: 'linear-gradient(135deg, #ff512f 0%, #f09819 100%)',
  ice: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  dark: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%)',
  cosmic: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
}

export const meshGradients = {
  rainbow: 'radial-gradient(at 40% 20%, hsla(228,100%,74%,1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%), radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%), radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)',
  cool: 'radial-gradient(at 40% 20%, hsla(228,100%,74%,0.8) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.8) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(240,100%,93%,0.8) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(200,100%,76%,0.8) 0px, transparent 50%)',
  warm: 'radial-gradient(at 40% 20%, hsla(15,100%,74%,0.8) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(45,100%,56%,0.8) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.8) 0px, transparent 50%), radial-gradient(at 80% 50%, hsla(340,100%,76%,0.8) 0px, transparent 50%)',
}

export const glowColors = {
  blue: 'rgba(59, 130, 246, 0.4)',
  purple: 'rgba(147, 51, 234, 0.4)',
  pink: 'rgba(236, 72, 153, 0.4)',
  green: 'rgba(34, 197, 94, 0.4)',
  cyan: 'rgba(6, 182, 212, 0.4)',
  orange: 'rgba(249, 115, 22, 0.4)',
  red: 'rgba(239, 68, 68, 0.4)',
  yellow: 'rgba(234, 179, 8, 0.4)',
  indigo: 'rgba(99, 102, 241, 0.4)',
  teal: 'rgba(20, 184, 166, 0.4)',
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
  return randomKey && glowColors[randomKey] ? glowColors[randomKey] : glowColors.blue
}

export function createCustomGradient(colors: string[], direction: number = 135): string {
  return `linear-gradient(${direction}deg, ${colors.join(', ')})`
}

export function createRadialGradient(centerColor: string, edgeColor: string = 'transparent'): string {
  return `radial-gradient(circle, ${centerColor} 0%, ${edgeColor} 100%)`
}