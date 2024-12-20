# @ajk-ui/footer

A comprehensive footer component for React applications with multiple layout options.

## Installation

```bash
npm install @ajk-ui/footer
# or
yarn add @ajk-ui/footer
# or
pnpm add @ajk-ui/footer
```

## Usage

```tsx
import { Footer } from '@ajk-ui/footer'

function MyComponent() {
  const footerColumns = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ]

  return <Footer variant="multicolumn" columns={footerColumns} copyright="© 2024 Company Name" />
}
```

## Features

- Multiple variants (simple, multicolumn, centered)
- Newsletter signup support
- Social media links
- Copyright information
- Responsive design
- Theme integration
- TypeScript support

## Props

| Prop       | Type                                    | Default   | Description                     |
| ---------- | --------------------------------------- | --------- | ------------------------------- |
| variant    | 'simple' \| 'multicolumn' \| 'centered' | 'simple'  | Footer layout variant           |
| columns    | FooterColumn[]                          | []        | Footer content columns          |
| social     | SocialLink[]                            | []        | Social media links              |
| copyright  | string                                  | undefined | Copyright text                  |
| newsletter | NewsletterConfig                        | undefined | Newsletter signup configuration |
| className  | string                                  | undefined | Additional CSS classes          |

## Types

```typescript
interface FooterColumn {
  title: string
  links: Array<{
    label: string
    href: string
  }>
}

interface SocialLink {
  platform: string
  href: string
  icon?: ReactNode
}

interface NewsletterConfig {
  title: string
  description?: string
  buttonText: string
  onSubmit?: (email: string) => void
}
```

## Examples

### Multicolumn Footer

```tsx
<Footer
  variant="multicolumn"
  columns={[
    {
      title: 'Products',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Careers', href: '/careers' },
      ],
    },
  ]}
  social={[
    { platform: 'twitter', href: 'https://twitter.com' },
    { platform: 'linkedin', href: 'https://linkedin.com' },
  ]}
  copyright="© 2024 Company Name. All rights reserved."
/>
```

### Simple Footer

```tsx
<Footer
  variant="simple"
  copyright="© 2024 Brand Name"
  social={[
    { platform: 'facebook', href: 'https://facebook.com' },
    { platform: 'instagram', href: 'https://instagram.com' },
  ]}
/>
```

### With Newsletter

```tsx
<Footer
  variant="centered"
  newsletter={{
    title: 'Subscribe to our newsletter',
    description: 'Get the latest updates',
    buttonText: 'Subscribe',
    onSubmit: email => console.log('Subscribed:', email),
  }}
/>
```

## Customization

Customize footer styles using Tailwind CSS:

```tsx
<Footer
  className="bg-gradient-to-b from-gray-800 to-gray-900"
  variant="multicolumn"
  columns={footerColumns}
/>
```

## Version History

Current version: 0.2.1

See [Changelog](../../CHANGELOG.md) for details about changes and updates.

## License

MIT © [Your Name]
