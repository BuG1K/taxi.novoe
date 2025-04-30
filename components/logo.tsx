export default function Logo({ width = 120, height = 120 }: { width?: number; height?: number }) {
  return <img  src="/logo.png" width={width} height={height} alt="Такси НОВОЕ" className="object-contain" />
}
