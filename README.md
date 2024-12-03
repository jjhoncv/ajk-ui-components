# AJK UI Components

Una biblioteca modular de componentes UI para crear sitios web temáticos con React y Tailwind CSS.

## 🌟 Características

- 🎨 Componentes UI modernos y personalizables
- 🏗️ Layouts predefinidos por industria
- 🎯 Temas específicos por tipo de negocio
- 📦 Construido con React y Tailwind CSS
- 📚 Documentación completa con Storybook
- 🔄 Sistema de versionado automático con Changesets
- 🚀 Despliegue automático de documentación

## 🛠️ Tecnologías

- React
- TypeScript
- Tailwind CSS
- Storybook
- Turborepo
- pnpm (Gestor de paquetes)
- Changesets (Gestión de versiones)

## 📦 Instalación

```bash
# Instalar componentes individuales
npm install @ajk-ui/button @ajk-ui/nav @ajk-ui/header @ajk-ui/card @ajk-ui/section @ajk-ui/footer

# o con yarn
yarn add @ajk-ui/button @ajk-ui/nav @ajk-ui/header @ajk-ui/card @ajk-ui/section @ajk-ui/footer

# o con pnpm
pnpm add @ajk-ui/button @ajk-ui/nav @ajk-ui/header @ajk-ui/card @ajk-ui/section @ajk-ui/footer
```

## 🚀 Uso

```jsx
import { ThemeProvider } from "@ajk-ui/theme-utils";
import { Nav } from "@ajk-ui/nav";
import { Header } from "@ajk-ui/header";
import { Section } from "@ajk-ui/section";
import { Card } from "@ajk-ui/card";
import { Footer } from "@ajk-ui/footer";

function App() {
  return (
    <ThemeProvider theme={themes.restaurant.modern}>
      <Nav
        items={[
          { label: "Home", href: "#" },
          { label: "Menu", href: "#" },
          { label: "About", href: "#" },
          { label: "Contact", href: "#" },
        ]}
      />
      <Header
        title="Welcome to Our Restaurant"
        subtitle="Experience the finest dining"
        backgroundImage="/hero.jpg"
      />
      <Section title="Our Specialties" layout="grid" gridCols={3}>
        <Card
          title="Special Dish"
          description="A delicious specialty"
          image="/dish.jpg"
        />
        {/* More cards */}
      </Section>
      <Footer
        columns={[
          {
            title: "Contact",
            links: [
              { label: "Location", href: "#" },
              { label: "Hours", href: "#" },
            ],
          },
        ]}
      />
    </ThemeProvider>
  );
}
```

## 🏗️ Estructura del Proyecto

```
ajk-ui/
├── apps/
│   └── docs/          # Aplicación Storybook
├── packages/
│   ├── core/          # Utilidades core
│   ├── theme-utils/   # Utilidades de tema
│   ├── button/        # Componente Button
│   ├── nav/           # Componente Nav
│   ├── header/        # Componente Header
│   ├── card/          # Componente Card
│   ├── section/       # Componente Section
│   └── footer/        # Componente Footer
└── package.json
```

## 🎨 Temas Disponibles

### Restaurant

- Modern: Diseño contemporáneo y minimalista
- Classic: Estilo tradicional y elegante

### Barbershop

- Vintage: Estética clásica de barbería
- Modern: Look contemporáneo y urbano

### Business

- Corporate: Diseño profesional y formal
- Startup: Estilo moderno y dinámico

## 🔧 Desarrollo

1. Clonar el repositorio:

```bash
git clone https://github.com/jjhoncv/ajk-ui-components.git
```

2. Instalar dependencias:

```bash
pnpm install
```

3. Iniciar el entorno de desarrollo:

```bash
pnpm dev
```

4. Abrir Storybook:

```bash
pnpm storybook
```

## 📖 Documentación

La documentación completa está disponible en nuestro [Storybook](https://jjhoncv.github.io/ajk-ui-components).

## 🤝 Contribuir

1. Crear una rama para tu feature
2. Hacer commit de tus cambios
3. Crear un changeset:

```bash
pnpm changeset
```

4. Hacer push y crear un Pull Request

## 📝 Changelog

Ver [CHANGELOG.md](CHANGELOG.md) para más detalles sobre los cambios en cada versión.

## 📄 Licencia

MIT
