interface LotusDecorProps {
  className?: string
  color?: string
  size?: number
}

export default function LotusDecor({
  className = '',
  color = 'currentColor',
  size = 48,
}: LotusDecorProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Lotus petals — simplified line art matching brand mark */}
      <path d="M50 85 C50 85 30 70 28 50 C26 30 40 20 50 15 C60 20 74 30 72 50 C70 70 50 85 50 85Z" />
      <path d="M50 85 C50 85 18 72 15 52 C12 32 28 18 40 18 C34 30 34 50 50 65" />
      <path d="M50 85 C50 85 82 72 85 52 C88 32 72 18 60 18 C66 30 66 50 50 65" />
      <path d="M50 85 C50 85 10 65 12 45 C14 25 30 16 42 20" />
      <path d="M50 85 C50 85 90 65 88 45 C86 25 70 16 58 20" />
      {/* Stem */}
      <line x1="50" y1="85" x2="50" y2="98" />
      {/* Centre bud */}
      <ellipse cx="50" cy="38" rx="6" ry="8" />
    </svg>
  )
}

export function LotusRule({ className = '', light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className={`flex-1 h-px ${light ? 'bg-cream/30' : 'bg-cream-dark/50'}`} />
      <LotusDecor size={20} color={light ? 'rgba(232,222,200,0.5)' : '#D4C9AC'} />
      <div className={`flex-1 h-px ${light ? 'bg-cream/30' : 'bg-cream-dark/50'}`} />
    </div>
  )
}
