import { Block, BlockContent, BlockHeader, BlockTitle } from './../block'
import { ColorSwatch } from '.'

interface ColorSectionProps {
  title: string
  colors: object
  description: string
}

export const ColorSection = ({ title, colors, description }: ColorSectionProps) => (
  <Block className="w-full">
    <BlockHeader>
      <BlockTitle>{title}</BlockTitle>
      {description && <p className="text-sm text-slate-500">{description}</p>}
    </BlockHeader>
    <BlockContent>
      <div className="flex flex-wrap gap-6">
        {Object.entries(colors).map(([key, value]) => (
          <ColorSwatch key={key} color={value} name={key.charAt(0).toUpperCase() + key.slice(1)} />
        ))}
      </div>
    </BlockContent>
  </Block>
)
