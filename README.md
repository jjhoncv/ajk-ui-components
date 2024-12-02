# AJK UI Components

Una biblioteca de componentes UI modernos construida con React y Tailwind CSS.

## 🌟 Características

- 🎨 Componentes UI modernos y personalizables
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
# Instalar el componente Button
npm install @ajk-ui/button

# o con yarn
yarn add @ajk-ui/button

# o con pnpm
pnpm add @ajk-ui/button
```

## 🚀 Uso

```jsx
import { Button } from "@ajk-ui/button";

function App() {
  return <Button variant="primary">Click me!</Button>;
}
```

## 🏗️ Estructura del Proyecto

```
ajk-ui-components/
├── apps/
│   └── docs/          # Aplicación Storybook
├── packages/
│   └── button/        # Componente Button
├── .changeset/        # Configuración de Changesets
└── package.json
```

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
