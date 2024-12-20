import { Product } from '@ajk-ui/product'

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Zapatilla Old Skool Black/Gum',
    subname: 'Modelo Old Skool',
    slug: 'zapatilla-old-skool-black-gum',
    sku: 'VN000D3HY28',
    brand: {
      id: 1,
      name: 'Vans',
      logo: '/images/brands/vans-logo.svg',
    },
    description:
      'Clásica zapatilla Old Skool con suela de goma y la característica franja lateral de Vans. Perfecta combinación de lona y gamuza.',
    longDescription: `La Vans Old Skool fue presentada en 1977 y se posicionó como el primer modelo de skate que exhibió la icónica sidestripe de la marca. Lo que comenzó como un simple garabato dibujado por Paul Van Doren, y originalmente llamado 'jazz stripe', se ha convertido en el sello inconfundible de la marca Vans.`,
    features: [
      'Upper de lona y gamuza resistente',
      'Sidestripe icónico de Vans',
      'Suela de goma waffle original',
      'Construcción vulcanizada',
      'Plantilla acolchada',
    ],
    specs: {
      material: ['Upper: Combinación de lona y gamuza', 'Forro: Textil', 'Suela: Goma vulcanizada'],
      fit: 'Regular fit',
      care: [
        'Limpiar con un paño húmedo',
        'No lavar en máquina',
        'Dejar secar a temperatura ambiente',
      ],
      origin: 'Fabricado en Vietnam',
    },
    images: {
      gallery: [
        {
          id: 1,
          size: {
            lg: {
              url: '/images/ecommerce/products/oldskool_black_gum_1200x1199.webp',
            },
            xs: {
              url: '/images/ecommerce/products/oldskool_black_gum_140x140.webp',
            },
          },
          alt: 'Vista lateral',
          isPrimary: true,
        },
        {
          id: 2,
          size: {
            lg: {
              url: '/images/ecommerce/products/oldskool_black_gum_top_1200x1200.webp',
            },
            xs: {
              url: '/images/ecommerce/products/oldskool_black_gum_top_140x140.webp',
            },
          },
          alt: 'Vista superior',
          isPrimary: false,
        },
        {
          id: 3,
          size: {
            lg: {
              url: '/images/ecommerce/products/oldskool_black_gum_back_1200x1200.webp',
            },
            xs: {
              url: '/images/ecommerce/products/oldskool_black_gum_back_140x140.webp',
            },
          },
          alt: 'Vista trasera',
          isPrimary: false,
        },
        {
          id: 4,
          size: {
            lg: {
              url: '/images/ecommerce/products/oldskool_black_gum_sole_1200x1200.webp',
            },
            xs: {
              url: '/images/ecommerce/products/oldskool_black_gum_sole_140x140.webp',
            },
          },
          alt: 'Vista costado',
          isPrimary: false,
        },
      ],
    },
    price: 129,
    originalPrice: 149,
    discount: 13,
    quantity: 0,
    condition: 'Nuevo',
    variants: [
      {
        id: 1,
        color: 'Black/Gum',
        colorCode: '#000000',
        images: [
          {
            id: 1,
            size: {
              lg: {
                url: '/images/ecommerce/products/oldskool_black_gum_1200x1199.webp',
              },
              xs: {
                url: '/images/ecommerce/products/oldskool_black_gum_140x140.webp',
              },
            },
            alt: 'Black/Gum - Vista lateral',
            isPrimary: true,
          },
        ],
        sizes: [
          { size: '35', stock: 5 },
          { size: '36', stock: 8 },
          { size: '37', stock: 12 },
          { size: '38', stock: 0 },
          { size: '39', stock: 6 },
        ],
      },
    ],
    categories: ['Zapatillas', 'Skate', 'Mujer'],
    tags: ['vans', 'old skool', 'skate', 'classic', 'black'],
    ratings: {
      average: 4.6,
      count: 458,
      distribution: {
        5: 300,
        4: 100,
        3: 40,
        2: 10,
        1: 8,
      },
    },
    reviews: [
      {
        id: 1,
        userName: 'María G.',
        rating: 5,
        comment: 'Excelente calidad y muy cómodas. Tal cual se ven en las fotos.',
        date: '2024-02-15',
        verified: true,
      },
      {
        id: 2,
        userName: 'Carlos R.',
        rating: 4,
        comment: 'Buenas zapatillas, aunque tuve que pedir una talla más.',
        date: '2024-02-10',
        verified: true,
      },
    ],
    relatedProducts: [2, 3, 4],
    shipping: {
      free: true,
      estimatedDays: 3,
      methods: [
        {
          id: 1,
          name: 'Envío estándar',
          price: 0,
          estimatedDays: 3,
        },
        {
          id: 2,
          name: 'Envío express',
          price: 9.99,
          estimatedDays: 1,
        },
      ],
    },
    stock: {
      total: 34,
      status: 'in_stock' as const,
      threshold: 5,
    },
  },
  {
    id: 2,
    name: 'Zapatilla Old Skool Floral Print',
    subname: 'Modelo Old Skool',
    slug: 'zapatilla-old-skool-floral-print',
    sku: 'VN000D3HY29',
    brand: {
      id: 1,
      name: 'Vans',
      logo: '/images/brands/vans-logo.svg',
    },
    description:
      'Versión floral del clásico modelo Old Skool con estampado de flores sobre lona y detalles en gamuza negra.',
    longDescription: `Esta edición especial de las Vans Old Skool combina el diseño clásico con un moderno estampado floral que le da un toque único y femenino. El patrón floral está cuidadosamente impreso sobre la lona de alta calidad, mientras que los refuerzos en gamuza negra mantienen la durabilidad característica del modelo.`,
    features: [
      'Estampado floral exclusivo',
      'Refuerzos de gamuza negra',
      'Suela de goma waffle original',
      'Interior acolchado',
      'Plantilla extraíble',
    ],
    specs: {
      material: [
        'Upper: Lona estampada y gamuza',
        'Forro: Textil transpirable',
        'Suela: Goma vulcanizada',
      ],
      fit: 'Regular fit',
      care: ['Limpiar con paño suave', 'Evitar exposición prolongada al sol', 'No usar lavadora'],
      origin: 'Fabricado en Vietnam',
    },
    images: {
      gallery: [
        {
          id: 1,
          size: {
            lg: {
              url: '/images/ecommerce/products/oldskool_floral_1199x1200.webp',
            },
            xs: {
              url: '/images/ecommerce/products/oldskool_floral_140x140.webp',
            },
          },
          alt: 'Vista lateral',
          isPrimary: true,
        },
        {
          id: 2,
          size: {
            lg: {
              url: '/images/ecommerce/products/oldskool_floral_top_1200x1200.webp',
            },
            xs: {
              url: '/images/ecommerce/products/oldskool_floral_top_140x140.webp',
            },
          },
          alt: 'Vista superior',
          isPrimary: false,
        },
      ],
    },
    price: 134,
    originalPrice: 159,
    discount: 16,
    quantity: 0,
    condition: 'Nuevo',
    variants: [
      {
        id: 1,
        color: 'Floral/Black',
        colorCode: '#000000',
        images: [
          {
            id: 1,
            size: {
              lg: {
                url: '/images/ecommerce/products/oldskool_floral_1199x1200.webp',
              },
              xs: {
                url: '/images/ecommerce/products/oldskool_floral_140x140.webp',
              },
            },
            alt: 'Floral/Black - Vista lateral',
            isPrimary: true,
          },
        ],
        sizes: [
          { size: '35', stock: 3 },
          { size: '36', stock: 6 },
          { size: '37', stock: 8 },
          { size: '38', stock: 4 },
          { size: '39', stock: 2 },
        ],
      },
    ],
    categories: ['Zapatillas', 'Casual', 'Mujer'],
    tags: ['vans', 'old skool', 'floral', 'fashion', 'limited edition'],
    ratings: {
      average: 4.8,
      count: 325,
      distribution: {
        5: 250,
        4: 50,
        3: 15,
        2: 8,
        1: 2,
      },
    },
    reviews: [
      {
        id: 1,
        userName: 'Laura M.',
        rating: 5,
        comment: '¡Hermosas! El estampado es incluso más bonito en persona.',
        date: '2024-02-18',
        verified: true,
      },
      {
        id: 2,
        userName: 'Ana P.',
        rating: 5,
        comment: 'Muy cómodas y el diseño es único. Las amo.',
        date: '2024-02-12',
        verified: true,
      },
    ],
    relatedProducts: [1, 3, 4],
    shipping: {
      free: true,
      estimatedDays: 3,
      methods: [
        {
          id: 1,
          name: 'Envío estándar',
          price: 0,
          estimatedDays: 3,
        },
        {
          id: 2,
          name: 'Envío express',
          price: 9.99,
          estimatedDays: 1,
        },
      ],
    },
    stock: {
      total: 23,
      status: 'in_stock' as const,
      threshold: 5,
    },
  },
  {
    id: 3,
    name: 'Zapatilla Old Skool Classic White/Black',
    subname: 'Modelo Old Skool',
    slug: 'zapatilla-old-skool-classic-white-black',
    sku: 'VN000D3HY30',
    brand: {
      id: 1,
      name: 'Vans',
      logo: '/images/brands/vans-logo.svg',
    },
    description:
      'Diseño clásico Old Skool en combinación blanco y negro con detalles florales en los laterales. Confeccionada en lona y gamuza.',
    longDescription: `Un giro moderno al clásico diseño Old Skool que incorpora sutiles detalles florales en los paneles laterales. La combinación de blanco y negro mantiene la estética atemporal de Vans mientras que los elementos decorativos añaden un toque de originalidad.`,
    features: [
      'Combinación clásica blanco/negro',
      'Detalles florales en laterales',
      'Suela vulcanizada resistente',
      'Plantilla OrthoLite',
      'Refuerzos estratégicos',
    ],
    specs: {
      material: [
        'Upper: Lona premium y gamuza',
        'Forro: Textil antimicrobial',
        'Suela: Goma vulcanizada waffle',
      ],
      fit: 'Regular fit',
      care: ['Usar protector de calzado', 'Limpiar regularmente', 'Guardar en lugar fresco y seco'],
      origin: 'Fabricado en Vietnam',
    },
    images: {
      gallery: [
        {
          id: 1,
          size: {
            lg: {
              url: '/images/ecommerce/products/oldskool_white_floral_1199x1200.webp',
            },
            xs: {
              url: '/images/ecommerce/products/oldskool_white_floral_140x140.webp',
            },
          },
          alt: 'Vista lateral',
          isPrimary: true,
        },
        {
          id: 2,
          size: {
            lg: {
              url: '/images/ecommerce/products/oldskool_white_floral_top_1200x1200.webp',
            },
            xs: {
              url: '/images/ecommerce/products/oldskool_white_floral_top_140x140.webp',
            },
          },
          alt: 'Vista superior',
          isPrimary: false,
        },
      ],
    },
    price: 124,
    originalPrice: 139,
    discount: 11,
    quantity: 0,
    condition: 'Nuevo',
    variants: [
      {
        id: 1,
        color: 'White/Black',
        colorCode: '#FFFFFF',
        images: [
          {
            id: 1,
            size: {
              lg: {
                url: '/images/ecommerce/products/oldskool_white_floral_1199x1200.webp',
              },
              xs: {
                url: '/images/ecommerce/products/oldskool_white_floral_140x140.webp',
              },
            },
            alt: 'White/Black - Vista lateral',
            isPrimary: true,
          },
        ],
        sizes: [
          { size: '35', stock: 7 },
          { size: '36', stock: 9 },
          { size: '37', stock: 15 },
          { size: '38', stock: 6 },
          { size: '39', stock: 4 },
        ],
      },
    ],
    categories: ['Zapatillas', 'Casual', 'Mujer'],
    tags: ['vans', 'old skool', 'classic', 'white', 'floral'],
    ratings: {
      average: 4.7,
      count: 286,
      distribution: {
        5: 200,
        4: 60,
        3: 20,
        2: 4,
        1: 2,
      },
    },
    reviews: [
      {
        id: 1,
        userName: 'Patricia L.',
        rating: 5,
        comment: 'El diseño es precioso y la calidad excelente.',
        date: '2024-02-16',
        verified: true,
      },
      {
        id: 2,
        userName: 'Sofia R.',
        rating: 4,
        comment: 'Muy cómodas desde el primer uso. Los detalles son únicos.',
        date: '2024-02-11',
        verified: true,
      },
    ],
    relatedProducts: [1, 2, 4],
    shipping: {
      free: true,
      estimatedDays: 3,
      methods: [
        {
          id: 1,
          name: 'Envío estándar',
          price: 0,
          estimatedDays: 3,
        },
        {
          id: 2,
          name: 'Envío express',
          price: 9.99,
          estimatedDays: 1,
        },
      ],
    },
    stock: {
      total: 41,
      status: 'in_stock' as const,
      threshold: 5,
    },
  },
  {
    id: 4,
    name: 'Zapatilla Old Skool Classic Black/White',
    subname: 'Modelo Old Skool',
    slug: 'zapatilla-old-skool-classic-black-white',
    sku: 'VN000D3HY31',
    brand: {
      id: 1,
      name: 'Vans',
      logo: '/images/brands/vans-logo.svg',
    },
    description:
      'El modelo más icónico de Vans en su combinación clásica negro con blanco. Construcción durable en lona y gamuza con suela de goma.',
    longDescription: `La Vans Old Skool en su versión más icónica y atemporal. Esta combinación de negro y blanco ha sido un pilar de la cultura del skateboarding y la moda urbana durante décadas. Su diseño versátil y construcción duradera la han convertido en una de las zapatillas más vendidas de todos los tiempos.`,
    features: [
      'Diseño original Old Skool',
      'Combinación clásica negro/blanco',
      'Suela waffle signature',
      'Construcción reforzada',
      'Ojales metálicos duraderos',
    ],
    specs: {
      material: [
        'Upper: Lona y gamuza premium',
        'Forro: Textil acolchado',
        'Suela: Goma vulcanizada signature',
      ],
      fit: 'Regular fit',
      care: [
        'Limpiar con cepillo suave',
        'Usar protector de calzado',
        'Mantener alejado de la humedad',
      ],
      origin: 'Fabricado en Vietnam',
    },
    images: {
      gallery: [
        {
          id: 1,
          size: {
            lg: {
              url: '/images/ecommerce/products/oldskool_black_white_1200x1199.webp',
            },
            xs: {
              url: '/images/ecommerce/products/oldskool_black_white_140x140.webp',
            },
          },
          alt: 'Vista lateral',
          isPrimary: true,
        },
        {
          id: 2,
          size: {
            lg: {
              url: '/images/ecommerce/products/oldskool_black_white_top_1200x1200.webp',
            },
            xs: {
              url: '/images/ecommerce/products/oldskool_black_white_top_140x140.webp',
            },
          },
          alt: 'Vista superior',
          isPrimary: false,
        },
      ],
    },
    price: 119,
    originalPrice: 129,
    discount: 8,
    quantity: 0,
    condition: 'Nuevo',
    variants: [
      {
        id: 1,
        color: 'Black/White',
        colorCode: '#000000',
        images: [
          {
            id: 1,
            size: {
              lg: {
                url: '/images/ecommerce/products/oldskool_black_white_1200x1199.webp',
              },
              xs: {
                url: '/images/ecommerce/products/oldskool_black_white_140x140.webp',
              },
            },
            alt: 'Black/White - Vista lateral',
            isPrimary: true,
          },
        ],
        sizes: [
          { size: '35', stock: 10 },
          { size: '36', stock: 15 },
          { size: '37', stock: 20 },
          { size: '38', stock: 12 },
          { size: '39', stock: 8 },
        ],
      },
    ],
    categories: ['Zapatillas', 'Skate', 'Unisex'],
    tags: ['vans', 'old skool', 'classic', 'black', 'bestseller'],
    ratings: {
      average: 4.9,
      count: 752,
      distribution: {
        5: 600,
        4: 120,
        3: 25,
        2: 5,
        1: 2,
      },
    },
    reviews: [
      {
        id: 1,
        userName: 'Diego M.',
        rating: 5,
        comment: 'Un clásico que nunca falla. Calidad y estilo garantizado.',
        date: '2024-02-17',
        verified: true,
      },
      {
        id: 2,
        userName: 'Elena S.',
        rating: 5,
        comment: 'Las mejores zapatillas que he tenido. Van con todo.',
        date: '2024-02-14',
        verified: true,
      },
    ],
    relatedProducts: [1, 2, 3],
    shipping: {
      free: true,
      estimatedDays: 3,
      methods: [
        {
          id: 1,
          name: 'Envío estándar',
          price: 0,
          estimatedDays: 3,
        },
        {
          id: 2,
          name: 'Envío express',
          price: 9.99,
          estimatedDays: 1,
        },
      ],
    },
    stock: {
      total: 65,
      status: 'in_stock' as const,
      threshold: 5,
    },
  },
]
