import { useTheme } from '@ajk-ui/theme-utils'

interface FieldProps {
  label?: string
  error?: string
  hint?: string
  required?: boolean
  children: React.ReactNode
}

export function Field({ label, error, hint, required, children }: FieldProps) {
  const { theme } = useTheme()

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          className="flex items-center gap-1"
          style={{
            color: theme.colors.text,
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.medium,
          }}
        >
          {label}
          {required && <span style={{ color: theme.colors.feedback.error }}>*</span>}
        </label>
      )}
      {children}
      {(error || hint) && (
        <p
          className="text-xs"
          style={{
            color: error ? theme.colors.feedback.error : theme.colors.textVariants.muted,
          }}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
}
