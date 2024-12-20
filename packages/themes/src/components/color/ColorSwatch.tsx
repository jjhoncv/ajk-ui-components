interface ColorSwatchProps {
  color: string
  name: string
  width?: string
  height?: string
}

export const ColorSwatch = ({ color, name, width = 'w-24', height = 'h-24' }: ColorSwatchProps) => (
  <div className="flex flex-col items-start gap-2">
    <div className={`${width} ${height} rounded-lg shadow-md`} style={{ backgroundColor: color }} />
    <div className="text-xs">
      <div className="font-semibold">{name}</div>
      <div className="font-mono text-slate-500">{color}</div>
    </div>
  </div>
)
