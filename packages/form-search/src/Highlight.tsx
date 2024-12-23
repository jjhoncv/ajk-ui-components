export const Highlight = ({
  text,
  query,
  className,
}: {
  text: string
  query: string
  className?: string
}) => {
  if (!query.trim()) {
    return <span>{text}</span>
  }

  const parts = text.split(new RegExp(`(${query})`, 'gi'))

  return (
    <span className={className}>
      {parts.map((part, i) => (
        <span
          key={i}
          className={
            part.toLowerCase() === query.toLowerCase() ? 'bg-primary-light/20 font-bold' : ''
          }
        >
          {part}
        </span>
      ))}
    </span>
  )
}
