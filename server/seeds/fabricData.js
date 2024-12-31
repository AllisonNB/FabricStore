const fabricData = [
  {
    name: "brocade",
    description:
      "A richly decorative fabric, often made from silk, featuring intricate patterns woven with a raised design.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Silk", "Polyester"],
      similarFabrics: ["Damask", "Jacquard", "Tapestry"],
    },
    characteristics: {
      weight: "heavy",
      stretch: "none",
      transparency: "fully-opaque",
      breathability: "low",
      wrinkle: "low",
      durability: "high",
    },
    garments: {
      cleaning: "dry clean",
      uses: ["evening wear", "upholstery", "decor"],
    },
    quantities: {
      cost: 29.99,
      amount: 7.75,
    },
  },
  {
    name: "canvas",
    description:
      "A durable, heavy-duty fabric typically made from cotton or linen, used for making tents, sails, and casual shoes.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Cotton", "Linen"],
      similarFabrics: ["Denim", "Duck Cloth", "Twill"],
    },
    characteristics: {
      weight: "heavy",
      stretch: "none",
      transparency: "fully-opaque",
      breathability: "low to medium",
      wrinkle: "low",
      durability: "high",
    },
    garments: {
      cleaning: "machine wash",
      uses: ["tote bags", "shoes", "outdoor gear"],
    },
    quantities: {
      cost: 9.99,
      amount: 3.5,
    },
  },
  {
    name: "chenille",
    description:
      "A soft, textured fabric known for its velvety feel and cozy appearance, often used in upholstery and blankets.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Cotton", "Acrylic", "Polyester"],
      similarFabrics: ["Velvet", "Terry Cloth", "Fleece"],
    },
    characteristics: {
      weight: "medium",
      stretch: "none",
      transparency: "fully-opaque",
      breathability: "medium",
      wrinkle: "low",
      durability: "medium",
    },
    garments: {
      cleaning: "machine wash or dry clean",
      uses: ["upholstery", "home decor", "sweaters"],
    },
    quantities: {
      cost: 14.99,
      amount: 4.25,
    },
  },
  {
    name: "chiffon",
    description:
      "A lightweight, sheer fabric with a soft, flowing drape, commonly used for dresses and scarves.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Silk", "Polyester"],
      similarFabrics: ["Georgette", "Organza", "Tulle"],
    },
    characteristics: {
      weight: "light",
      stretch: "none",
      transparency: "sheer",
      breathability: "high",
      wrinkle: "high",
      durability: "medium",
    },
    garments: {
      cleaning: "hand wash or dry clean",
      uses: ["evening wear", "blouses", "scarves"],
    },
    quantities: {
      cost: 18.99,
      amount: 2.75,
    },
  },
  {
    name: "coating",
    description:
      "A heavyweight fabric designed for making outerwear, such as coats and jackets, providing warmth and durability.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven or Knit",
      fiber: ["Wool", "Polyester", "Nylon"],
      similarFabrics: ["Melton", "Tweed", "Gabardine"],
    },
    characteristics: {
      weight: "heavy",
      stretch: "none to light",
      transparency: "fully-opaque",
      breathability: "low",
      wrinkle: "low",
      durability: "high",
    },
    garments: {
      cleaning: "dry clean",
      uses: ["coats", "jackets", "outerwear"],
    },
    quantities: {
      cost: 19.99,
      amount: 6.5,
    },
  },
  {
    name: "crepe",
    description:
      "A fabric with a crinkled or pebbled texture, available in various weights and used for elegant dresses and blouses.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Silk", "Polyester", "Wool"],
      similarFabrics: ["Georgette", "Chiffon", "Crêpe de Chine"],
    },
    characteristics: {
      weight: "light to medium",
      stretch: "none",
      transparency: "varies",
      breathability: "high",
      wrinkle: "medium",
      durability: "medium",
    },
    garments: {
      cleaning: "hand wash or dry clean",
      uses: ["dresses", "blouses", "suits"],
    },
    quantities: {
      cost: 22.99,
      amount: 4.5,
    },
  },
  {
    name: "double guaze",
    description:
      "A lightweight, breathable fabric made from two layers of gauze, often used for baby clothes and summer garments.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Cotton"],
      similarFabrics: ["Muslin", "Voile", "Lawn"],
    },
    characteristics: {
      weight: "light to medium",
      stretch: "none",
      transparency: "semi-opaque to fully-opaque",
      breathability: "high",
      wrinkle: "medium",
      durability: "medium",
    },
    garments: {
      cleaning: "machine wash",
      uses: ["baby clothes", "summer dresses", "swaddles"],
    },
    quantities: {
      cost: 11.99,
      amount: 5.25,
    },
  },
  {
    name: "drapey",
    description:
      "Fabrics that have a fluid, graceful fall, ideal for making garments with movement, like skirts and dresses.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven or Knit",
      fiber: ["Silk", "Rayon", "Polyester"],
      similarFabrics: ["Chiffon", "Georgette", "Crepe"],
    },
    characteristics: {
      weight: "light to medium",
      stretch: "none to medium",
      transparency: "varies",
      breathability: "high",
      wrinkle: "medium",
      durability: "medium",
    },
    garments: {
      cleaning: "hand wash or dry clean",
      uses: ["dresses", "blouses", "skirts"],
    },
    quantities: {
      cost: 16.99,
      amount: 4.5,
    },
  },
  {
    name: "fleece",
    description:
      "A synthetic fabric known for its warmth, softness, and lightweight, perfect for outdoor clothing and blankets.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Knit",
      fiber: ["Polyester", "Cotton", "Wool"],
      similarFabrics: ["Microfiber", "Terrycloth", "Sherpa"],
    },
    characteristics: {
      weight: "medium to heavy",
      stretch: "light to medium",
      transparency: "fully-opaque",
      breathability: "medium to low",
      wrinkle: "low",
      durability: "medium",
    },
    garments: {
      cleaning: "machine wash",
      uses: ["jackets", "blankets", "sweaters"],
    },
    quantities: {
      cost: 10.99,
      amount: 5.75,
    },
  },
  {
    name: "flannel",
    description:
      "A soft, warm fabric with a brushed surface, commonly used for pajamas, shirts, and bedding.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Cotton", "Wool"],
      similarFabrics: ["Tartan", "Chamois", "Brushed Cotton"],
    },
    characteristics: {
      weight: "medium",
      stretch: "none",
      transparency: "fully-opaque",
      breathability: "high",
      wrinkle: "medium",
      durability: "medium",
    },
    garments: {
      cleaning: "machine wash",
      uses: ["shirts", "pajamas", "blankets"],
    },
    quantities: {
      cost: 7.99,
      amount: 4.5,
    },
  },
  {
    name: "jacquard",
    description:
      "A fabric featuring intricate patterns woven into the material, rather than printed, used for upholstery and formal wear.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Cotton", "Polyester", "Silk"],
      similarFabrics: ["Brocade", "Damask", "Matelassé"],
    },
    characteristics: {
      weight: "medium to heavy",
      stretch: "none",
      transparency: "fully-opaque",
      breathability: "medium",
      wrinkle: "medium",
      durability: "high",
    },
    garments: {
      cleaning: "machine wash or dry clean",
      uses: ["home decor", "upholstery", "formal wear"],
    },
    quantities: {
      cost: 17.99,
      amount: 3.5,
    },
  },
  {
    name: "knits",
    description:
      "Stretchy fabrics made from interlocking loops of yarn, used for making comfortable and flexible garments like t-shirts and sweaters.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Knit",
      fiber: ["Cotton", "Wool", "Polyester"],
      similarFabrics: ["Jersey", "Rib Knit", "Interlock Knit"],
    },
    characteristics: {
      weight: "varies",
      stretch: "medium to high",
      transparency: "varies",
      breathability: "high",
      wrinkle: "low",
      durability: "medium",
    },
    garments: {
      cleaning: "machine wash",
      uses: ["t-shirts", "sweaters", "activewear"],
    },
    quantities: {
      cost: 8.99,
      amount: 6.25,
    },
  },
  {
    name: "lace",
    description:
      "A delicate, decorative fabric made from threads in an open, web-like pattern, often used for bridal wear and lingerie.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven or Knit",
      fiber: ["Cotton", "Polyester", "Nylon"],
      similarFabrics: ["Eyelet", "Tulle", "Chantilly Lace"],
    },
    characteristics: {
      weight: "light",
      stretch: "none",
      transparency: "sheer",
      breathability: "high",
      wrinkle: "low",
      durability: "medium",
    },
    garments: {
      cleaning: "hand wash or dry clean",
      uses: ["hems", "bridal wear", "lingerie", "accessories"],
    },
    quantities: {
      cost: 12.99,
      amount: 3.0,
    },
  },
  {
    name: "leather",
    description:
      "A durable and flexible material made from animal hide, used for jackets, bags, and shoes.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Natural",
      fiber: ["Animal Hide"],
      similarFabrics: ["Faux Leather", "Suede", "Nubuck"],
    },
    characteristics: {
      weight: "medium to heavy",
      stretch: "none",
      transparency: "fully-opaque",
      breathability: "low",
      wrinkle: "low",
      durability: "high",
    },
    garments: {
      cleaning: "special leather care",
      uses: ["jackets", "shoes", "bags"],
    },
    quantities: {
      cost: 35.99,
      amount: 4.25,
    },
  },
  {
    name: "lining",
    description:
      "Smooth, lightweight fabrics used inside garments to improve comfort and appearance, such as in coats and skirts.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven or Knit",
      fiber: ["Acetate", "Polyester", "Silk"],
      similarFabrics: ["Batiste", "Voile", "Tricot"],
    },
    characteristics: {
      weight: "light",
      stretch: "none to light",
      transparency: "varies",
      breathability: "low to medium",
      wrinkle: "low",
      durability: "medium",
    },
    garments: {
      cleaning: "machine wash or dry clean",
      uses: ["lining for garments", "bags", "jackets"],
    },
    quantities: {
      cost: 5.99,
      amount: 3.75,
    },
  },
  {
    name: "satin",
    description:
      "A glossy, smooth fabric with a luxurious sheen, often used for evening wear and lingerie.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Silk", "Polyester"],
      similarFabrics: ["Charmeuse", "Silk", "Crepe"],
    },
    characteristics: {
      weight: "light to medium",
      stretch: "none",
      transparency: "varies",
      breathability: "low",
      wrinkle: "medium",
      durability: "medium",
    },
    garments: {
      cleaning: "hand wash or dry clean",
      uses: ["evening wear", "lingerie", "linings"],
    },
    quantities: {
      cost: 18.99,
      amount: 2.5,
    },
  },
  {
    name: "swimwear",
    description:
      "Fabrics designed specifically for making swimsuits, typically stretchy, quick-drying, and resistant to chlorine.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Knit",
      fiber: ["Nylon", "Spandex", "Polyester"],
      similarFabrics: ["Lycra", "Tricot", "Power Mesh"],
    },
    characteristics: {
      weight: "light to medium",
      stretch: "high",
      transparency: "fully-opaque",
      breathability: "low",
      wrinkle: "low",
      durability: "high",
    },
    garments: {
      cleaning: "hand wash or machine wash",
      uses: ["swimwear", "activewear"],
    },
    quantities: {
      cost: 15.99,
      amount: 4.0,
    },
  },
  {
    name: "twill",
    description:
      "A versatile fabric with a distinctive diagonal weave, used for making trousers, jackets, and workwear.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Cotton", "Polyester", "Wool"],
      similarFabrics: ["Denim", "Chino", "Gabardine"],
    },
    characteristics: {
      weight: "medium to heavy",
      stretch: "none",
      transparency: "fully-opaque",
      breathability: "medium",
      wrinkle: "low",
      durability: "high",
    },
    garments: {
      cleaning: "machine wash",
      uses: ["pants", "jackets", "uniforms"],
    },
    quantities: {
      cost: 9.99,
      amount: 5.5,
    },
  },
  {
    name: "velvet",
    description:
      "A soft, plush fabric with a dense pile, known for its luxurious feel and rich appearance, used in clothing and home decor.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Silk", "Cotton", "Polyester"],
      similarFabrics: ["Velveteen", "Corduroy", "Chenille"],
    },
    characteristics: {
      weight: "medium to heavy",
      stretch: "none to light",
      transparency: "fully-opaque",
      breathability: "low",
      wrinkle: "medium",
      durability: "medium",
    },
    garments: {
      cleaning: "dry clean",
      uses: ["evening wear", "upholstery", "costumes"],
    },
    quantities: {
      cost: 27.99,
      amount: 3.5,
    },
  },
  {
    name: "waterResistant",
    description:
      "Fabrics treated or woven to repel water, used for making outdoor gear and rainwear.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven or Knit",
      fiber: ["Polyester", "Nylon"],
      similarFabrics: ["Gore-Tex", "Softshell", "Ripstop Nylon"],
    },
    characteristics: {
      weight: "light to medium",
      stretch: "none to light",
      transparency: "fully-opaque",
      breathability: "low to medium",
      wrinkle: "low",
      durability: "high",
    },
    garments: {
      cleaning: "machine wash",
      uses: ["outerwear", "raincoats", "gear"],
    },
    quantities: {
      cost: 12.99,
      amount: 6.0,
    },
  },
  {
    name: "wovens",
    description:
      "Fabrics made by interlacing threads at right angles, providing stability and structure, used for shirts, pants, and dresses.",
    image:
      "https://res.cloudinary.com/dctayuelh/image/upload/v1735589647/cgxhlb7rcfhk9bqzdeku.jpg",
    composition: {
      construction: "Woven",
      fiber: ["Cotton", "Polyester", "Silk", "Wool"],
      similarFabrics: ["Poplin", "Chiffon", "Taffeta"],
    },
    characteristics: {
      weight: "varies",
      stretch: "none",
      transparency: "varies",
      breathability: "varies",
      wrinkle: "varies",
      durability: "varies",
    },
    garments: {
      cleaning: "varies",
      uses: ["shirts", "pants", "dresses", "jackets"],
    },
    quantities: {
      cost: 8.99,
      amount: 7.25,
    },
  },
];

module.exports = fabricData;
