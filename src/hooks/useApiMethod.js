import { useEffect, useRef } from "react";
import { switchMapTo, tap, timer } from "rxjs";

const dataShopRawList = [
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    tags: ["meat"],
    productId: "bo-ssam-dinner-for-4-6",
    title: "Momofuku",
    description:
      "Half Bo Ssäm Dinner for 4-6 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New York, NY",
    price: "$169",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110906/bo-ssam-dinner-for-4.c4a32e8801e2f0283e0565bbe8493149.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    reviews: [],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    tags: ["curry"],
    productId: "legendary-seafood-gumbo",
    title: "Commander's Palace",
    description:
      "Legendary Seafood Gumbo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New Orleans, LA",
    price: "$49",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133100/legendary-seafood-gumbo.a4010efb8ba0569ff59d68c3723f0963.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "the-gramercy-tavern-burger-4-pack",
    title: "Gramercy Tavern",
    description:
      "The Gramercy Tavern  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Burger - 4 Pack Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New York, NY",
    price: "$99",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["burger"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    tags: ["meat"],
    productId: "the-coop-complete-fried-chicken-dinner-for-4",
    title: "Blue Ribbon",
    description:
      '"The Coop" Complete Fried Chicken Dinner for 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.',
    location: "New York, NY",
    price: "$119",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134235/complete-fried-chicken-dinner-for-4.aeabf841c124b9cc2fb0166f27790999.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    tags: ["soup"],
    productId: "traditional-beef-empanadas-with-llajua-sauce-12-pack",
    title: "Chef Francis Mallmann",
    description:
      "Traditional Beef Empanadas  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. with Llajua Sauce - 12 Pack Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Patagonia, Argentina",
    price: "$99",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132987/traditional-meat-empanadas-with-llajua-sauce-12-pack.f2adcfeb4ccf027675047f1367ce83ca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "pork-buns-12-pack",
    title: "Momofuku",
    description:
      "Pork Buns - 12 Pack Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New York, NY",
    price: "$119",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110984/pork-buns-12-pack.67a379b014b23c7fd944ab48b9e720f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "hot-honey-chicken-and-cornbread-waffles-for-2",
    title: "Marcus Samuelsson's Streetbird",
    description:
      "Marcus’ Hot Honey  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Chicken & Cornbread Waffles Kit for 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Harlem, NY",
    price: "$99",
    rate: "2",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131336/marcus-hot-honey-chicken-and-cornbread-waffles-kit-for-4.618df9b9613b506f65c8342ab2e28b32.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "zahav-hummus-and-salatim-spread",
    title: "Zahav",
    description:
      "Zahav Hummus & Salatim  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Philadelphia, PA",
    price: "$99",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114579/zahav-hummus-and-salatim-spread-for-6-8.137df09ea04ec063480f58ead8fe4b83.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "wood-fired-pizzas-best-seller-4-pack",
    title: "Pizzeria Bianco",
    description:
      "Wood Fired Pizzas  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Best Seller - 4 Pack Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Phoenix, AZ",
    price: "$129",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "gramercy-tavern-mushroom-lasagna-for-4",
    title: "Gramercy Tavern",
    description:
      "Gramercy Tavern Mushroom Lasagna for 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New York, NY",
    price: "$99",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134704/gramercy-tavern-mushroom-lasagna-4-pack.88c671dec184d8bee908d6f5d8d860f9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "brown-butter-lobster-roll-kit-4-pack",
    title: "Eventide Oyster Co.",
    description:
      "Brown Butter Lobster Roll Kit - 4 Pack Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Portland, ME",
    price: "$99",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133343/brown-butter-lobster-roll-kit-4-pack.f97b1254243c8628ad1a5cd41227f5d7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "commanders-palace-three-course-dinner-for-2-shrimp-and-grits",
    title: "Commander's Palace",
    description: "Commander's Palace Three-Course Shrimp & Grits Dinner for 2",
    location: "New Orleans, LA",
    price: "$169",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104768/commanders-palace-three-course-shrimp-and-grits-dinner-for-2.984253533e589547e834420efccc174a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "butchers-feast-for-4",
    title: "Cote Korean Steakhouse",
    description:
      "The  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Original Butcher's Feast® for 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New York, NY",
    price: "$259",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104628/butchers-feast-for-4.cf40ca583a3bc2de78ac6355ee4b2995.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "whole-peking-duck-kit-for-4",
    title: "RedFarm",
    description:
      "Whole Peking Duck Kit for 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New York, NY",
    price: "$139",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132862/decoys-whole-peking-duck-for-4.36f80dd5235f5495f279ed8765c33167.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "unconventional-texas-bbq-sampler-for-4-6",
    title: "Underbelly by Chris Shepherd",
    description:
      "Unconventional Texas BBQ Sampler for 4-6 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Houston, TX",
    price: "$119",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126766/unconventional-texas-bbq-sampler-for-4-6.ee40a926a0863ceeb13b1eafb987c7d1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "diy-kit-for-2",
    title: "Blue Ribbon Sushi",
    description:
      "Blue Ribbon Sushi - DIY Kit for 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New York, NY",
    price: "$129",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113695/traditional-negiri-sushi-and-cutroll-kit-for-2.381bee7a4e1be32ad5818d93524b0bef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "zahav-lamb-shoulder-meal-kit",
    title: "Zahav",
    description:
      "Zahav Lamb Shoulder Meal Kit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Philadelphia, PA",
    price: "$249",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114544/zahav-lamb-shoulder-meal-kit-for-4-6.58cfa4d3d5eca52ac45b2d37a9d0f2d4.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "the-classic-plateau-dinner-for-2",
    title: "Blue Ribbon",
    description:
      "The Classic Plateau Seafood Dinner for 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New York, NY",
    price: "$139",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131364/the-classic-plateau-dinner-for-2.9906825037a76931415a8fb5e8a2dcbd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "mac-and-cheese-chicken-pot-pie-combo-for-4",
    title: "Wolfgang Puck Catering",
    description:
      "Mac and Cheese + Chicken Pot Pie Combo for 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Los Angeles, CA",
    price: "$129",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112776/mac-and-cheese-chicken-pot-pie-combo-for-4.c77be8dcb4fabfa1870a2ff4a6bd4c6a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "prime-galbi-steak-feast-for-4",
    title: "Cote Korean Steakhouse",
    description:
      "Prime Galbi Steak Feast for 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New York, NY",
    price: "$249",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104674/prime-galbi-steak-feast-for-4.51c78b5ba768078b166fe91325e60edc.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "dry-aged-boneless-ribeye-steak-dinner-kit-for-4",
    title: "Chef Francis Mallmann",
    description:
      "Dry-Aged Boneless Ribeye Steak Dinner Kit for 4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Patagonia, Argentina",
    price: "$225",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126887/dry-aged-boneless-ribeye-steak-dinner-for-4.81c3bdc05fe6bdb2c2214709863120e0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "wood-fired-pizza-choose-your-own-4-pack",
    title: "Pizzeria Bianco",
    description:
      "Wood Fired Pizza - Choose Your Own 4 Pack Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Phoenix, AZ",
    price: "$135",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104006/wood-fired-pizza-choose-your-own-4-pack.e36692807e17618a646885a8087a4c97.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "pasta-dinner-gift-basket",
    title: "Fox & the Knife",
    description:
      "Pasta Dinner Gift Basket Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "Boston, MA",
    price: "$129",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111490/pasta-sauce-gift-basket.e7d2b1afaeef767b7327843716d15203.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "chinese-tea-smoked-whole-duck",
    title: "Shirley Chung's Ms. Chi",
    description:
      "Chinese Tea Smoked  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Whole Duck",
    location: "Los Angeles, CA",
    price: "$119",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112821/chinese-tea-smoked-whole-duck.97b321323431f1453d204a3ba9a35293.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "traditional-beef-empanadas-with-llajua-sauce-24-pack",
    title: "Chef Francis Mallmann",
    description:
      "Traditional Beef Empanadas  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. with Llajua Sauce - 24 Pack",
    location: "Patagonia, Argentina",
    price: "$149",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133293/traditional-meat-empanadas-with-llajua-sauce-24-pack.800489d1d8db1e649e129968ed91e449.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "choose-your-own-pasta-dinner-for-4",
    title: "Fox & the Knife",
    description:
      "Pasta Dinner for  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. 4 - Choose Your Own",
    location: "Boston, MA",
    price: "$99",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111241/choose-your-own-pasta-dinner-for-4.1195531d1b5fd7958e85d2640bd4d5bf.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "marcus-hot-fried-chicken-wings-for-2",
    title: "Marcus Samuelsson's Streetbird",
    description:
      "Marcus’ Fried Chicken  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Wings for 2",
    location: "Harlem, NY",
    price: "$99",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129322/marcus-fried-chicken-wings.95e4f4d5cb4d3e069f4addcb3e33b111.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "taco-combo-kit-for-4-6-choose-your-own",
    title: "Johnny Sanchez",
    description:
      "Taco Combo Kit  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. for 4-6 - Choose Your Own",
    location: "New Orleans, LA",
    price: "$119",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133992/taco-combo-kit-for-4-6-choose-your-own.62a9fa8e0b5912c035e2999508fe36e1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "shiitake-mushroom-buns-12-pack",
    title: "Momofuku",
    description:
      "Shiitake Mushroom Buns  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - 12 Pack",
    location: "New York, NY",
    price: "$109",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/110987/shiitake-mushroom-buns-12-pack.449e51af13ae6204f3c2914355d427ac.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "turtle-soup",
    title: "Commander's Palace",
    description:
      "Legendary Turtle Soup  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New Orleans, LA",
    price: "$89",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/102811/legendary-turtle-soup.12d6f4c9806c3cf11cd2ff2a160657e7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "blue-ribbon-special-sushi-diy-kit-for-2-3",
    title: "Blue Ribbon Sushi",
    description:
      "Blue Ribbon Special  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Sushi - DIY Kit for 2-3",
    location: "New York, NY",
    price: "$169",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119272/blue-ribbon-special-sushi-diy-kit-for-2-3.08c8f6c674366187e651ccb03cd1747d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "burger-au-poivre-kit-4-pack",
    title: "Raoul's",
    description:
      "Burger Au Poivre  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Kit - 4 Pack",
    location: "New York, NY",
    price: "$99",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "pork-and-shrimp-wontons-20-pack",
    title: "Shirley Chung's Ms. Chi",
    description:
      "Pork and Shrimp  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Wontons - 20 Pack",
    location: "Los Angeles, CA",
    price: "$69",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98019/pork-and-shrimp-wontons-20-pack.1489740a2c5ab4c5585b49ebbde2f1c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "pasta-dinner-for-2-choose-your-own",
    title: "Fox & the Knife",
    description:
      "Pasta Dinner for  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. 2 - Choose Your Own",
    location: "Boston, MA",
    price: "$69",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/112230/pasta-dinner-for-2-choose-your-own.f5edf5a6c05115eec571d2c2f3805300.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "traditional-argentinian-asado-dinner-kit-for-10-12",
    title: "Chef Francis Mallmann",
    description:
      "Traditional Argentinian Asado  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Feast for 10-12",
    location: "Patagonia, Argentina",
    price: "$469",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126975/traditional-argentinian-asado-dinner-kit-for-8.0143a30b0ccda3282a3f81a0c13a6f7b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "neapolitan-pizza-choose-your-own-4-pack",
    title: "Pizzeria Delfina",
    description:
      "Neapolitan Pizza -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Choose Your Own 4 Pack",
    location: "San Francisco, CA",
    price: "$119",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131291/neapolitan-pizza-choose-your-own-4-pack.e9e370c647523cb3b6a8ee6f60c9a9c1.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "double-stack-burger-kit-for-4",
    title: "Holeman & Finch",
    description:
      "Double Stack Burger  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Kit for 4",
    location: "Atlanta, GA",
    price: "$79",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "bo-ssam-dinner-for-8-10",
    title: "Momofuku",
    description:
      "Whole Bo Ssäm  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Dinner for 8-10",
    location: "New York, NY",
    price: "$269",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111005/bo-ssam-dinner-for-4-6.20cb5b3dede7ecca90c888aadc93567f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId:
      "chicken-jiaozi-dumplings-giant-cheese-burger-potstickers-combo-pack",
    title: "Shirley Chung's Ms. Chi",
    description:
      "Ms. Chi Potstickers  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. and Dumplings - Combo Pack",
    location: "Los Angeles, CA",
    price: "$99",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134028/chicken-jiaozi-dumplings-giant-cheese-burger-potstickers-best-seller-pack.908a1c285e5356202e5163fc03ede65e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "vietnamese-dinner-kit-for-4-choose-your-own",
    title: "The Slanted Door",
    description:
      "Vietnamese Dinner Kit  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. for 4 - Choose Your Own",
    location: "San Francisco, CA",
    price: "$149",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133221/vietnamese-dinner-kit-for-4-choose-your-own.6adf8528fae31fa5260ee6c1bed222c4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "chicken-jiaozi-dumplings-20-pack",
    title: "Shirley Chung's Ms. Chi",
    description:
      "Chicken Jiaozi Dumplings  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - 20 Pack",
    location: "Los Angeles, CA",
    price: "$69",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97105/chicken-jiaozi-dumplings-20-pack.15df330a0f96492d492d6f3ed6518aa8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "whole-plate-short-rib-dinner-for-3-4",
    title: "Momofuku",
    description:
      "Whole Plate Short  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Rib Dinner for 3-4",
    location: "New York, NY",
    price: "$249",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117831/whole-plate-short-rib-dinner-for-3-4.3d4f7a1d5441c0a3a50263c89ef3fb47.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "pasta-dinner-bestsellers-for-4",
    title: "Fox & the Knife",
    description:
      "Best Sellers -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Pasta Dinner for 4",
    location: "Boston, MA",
    price: "$89",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/111245/pasta-dinner-bestsellers-for-4.94ca16a49a00a4f50714e827ab686510.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "best-seller-ramen-kits-4-pack",
    title: "Ivan Ramen",
    description:
      "Best Seller Ramen  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Kits for 4",
    location: "New York, NY",
    price: "$149",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119444/best-seller-ramen-kits-for-4.6946ea916af35904079d82208a0cb7e2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "carnitas-taco-kit-for-2-3",
    title: "Frontera Grill",
    description:
      "Carnitas Taco Kit  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. for 2-3",
    location: "Chicago, IL",
    price: "$89",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133954/carnitas-taco-kit-for-2.8e93e32c7ad6399ab54ffd4ccffc648a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "neapolitan-pizza-choose-your-own-3-pack",
    title: "Pizzeria Delfina",
    description:
      "Neapolitan Pizza -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Choose Your Own 3 Pack",
    location: "San Francisco, CA",
    price: "$99",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114414/neapolitan-pizza-choose-your-own-3-pack.5b29cea22f1eeee4b8d95057b9bc7abd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "brown-butter-lobster-roll-kit-6-pack",
    title: "Eventide Oyster Co.",
    description:
      "Brown Butter Lobster  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Roll Kit - 6 Pack",
    location: "Portland, ME",
    price: "$149",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/93518/brown-butter-lobster-roll-kit-6-pack.b09e74d8a0f05fa77d00773d2daf12c6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "taco-fiesta-pack-queso-margarita-mix-for-4-6",
    title: "Johnny Sanchez",
    description:
      "Taco Fiesta Pack  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. + Queso + Margarita Mix for 4-6",
    location: "New Orleans, LA",
    price: "$179",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/119163/taco-party-pack-queso-margarita-mix-for-4-6.1468490bf51e9f474a2562f8d0f76be9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "the-crustacean-plateau-dinner-for-4-6",
    title: "Blue Ribbon",
    description:
      "The Crustacean Plateau  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Seafood Dinner for 4-6",
    location: "New York, NY",
    price: "$239",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131730/the-crustacean-plateau-dinner-for-4-6.d0de88df7471976c81acdcfa94806bee.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "the-family-coop-complete-fried-chicken-dinner-for-8",
    title: "Blue Ribbon",
    description:
      '"The Family Coop  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat." Complete Fried Chicken Dinner for 8-10',
    location: "New York, NY",
    price: "$189",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132341/complete-fried-chicken-dinner-for-8.512f5bff5f9f22995de1408764b7c0ff.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "gramercy-tavern-burger-kielbasa-combo",
    title: "Gramercy Tavern",
    description:
      "Gramercy Tavern Burger  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. + Kielbasa Combo",
    location: "New York, NY",
    price: "$149",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135126/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-47.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "lobster-pot-pie-and-crab-cake-combo-for-4",
    title: "Summer Shack",
    description:
      "Lobster Pot Pie  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. and Crab Cake Combo for 4",
    location: "Boston, MA",
    price: "$139",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/117760/lobster-pot-pie-and-crab-cake-combo-for-4.a3f470732ece5228abe8cdb25af96043.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "truffle-chicken-pot-pie-kit-for-4",
    title: "Wolfgang Puck Catering",
    description:
      "Truffle Chicken Pot  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Pie Kit for 4",
    location: "Los Angeles, CA",
    price: "$139",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132863/chicken-pot-pie-kit-for-4.7fb17eea18a6ef99129f189fcc130fca.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "carnitas-taco-kit-for-4-6",
    title: "Frontera Grill",
    description:
      "Carnitas Taco Kit  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. for 4-6",
    location: "Chicago, IL",
    price: "$129",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122300/carnitas-taco-kit-for-4.984935855d88edab90fe5859999221cb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "gluten-free-chinese-orange-chicken-kit-for-4",
    title: "Shirley Chung's Ms. Chi",
    description:
      "Gluten-Free Chinese  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Orange Chicken Kit for 4",
    location: "Los Angeles, CA",
    price: "$79",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132017/gluten-free-chinese-orange-chicken-kit-for-4.b5618b86376b9ca33a0180504df4ccd8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "taiwanese-style-pork-chop-dinner-kit-for-4",
    title: "Shirley Chung's Ms. Chi",
    description:
      "Taiwanese Style Pork  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Chop Dinner Kit for 4",
    location: "Los Angeles, CA",
    price: "$119",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107818/taiwanese-style-pork-chop-dinner-kit-for-4.af151d422000d25f084e36e5f83cccba.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "best-seller-falafel-kit-for-6-vegan",
    title: "Taïm",
    description:
      "Best Seller Falafel  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Kit for 6 (Vegan)",
    location: "New York, NY",
    price: "$89",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134459/best-seller-falafel-kit-for-6.5dc557098f859293bc45cefda7ecb3af.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "signature-spicy-tuna-crispy-rice-diy-kit-for-2-4",
    title: "Blue Ribbon Sushi",
    description:
      "Signature Spicy Tuna  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Crispy Rice DIY Kit for 2-4",
    location: "New York, NY",
    price: "$149",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/113679/spicy-tuna-crispy-rice-kit-for-4.53612097e152d97482a074c3250c6e28.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "redfarm-signature-sampler-for-3-4",
    title: "RedFarm",
    description:
      "RedFarm Signature Sampler  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. for 3-4",
    location: "New York, NY",
    price: "$129",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131850/redfarm-sampler-for-3-4.b47a4dad3b06d719e9fc17380238afd2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "yuzu-shio-ramen-kit-for-3",
    title: "AFURI",
    description:
      "Yuzu Shio Ramen  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Kit for 3",
    location: "Portland, OR",
    price: "$89",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132439/yuzu-shio-ramen-kit-for-3.eff2c00445f04ccad761867bf8083ab6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "shake-shack-shackburger-8-pack",
    title: "Shake Shack",
    description:
      "Shake Shack ShackBurger®  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. – 8 Pack",
    location: "New York, NY",
    price: "$49",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["burger"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "gotts-cheeseburger-kit-for-4",
    title: "Gott's Roadside",
    description:
      "Gott's Complete  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Cheeseburger Kit for 4",
    location: "St. Helena, CA",
    price: "$99",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132933/gotts-complete-cheeseburger-kit-for-4.7bdc74104b193427b3fe6eae39e05b5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["burger"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "le-big-matt-kit-for-6",
    title: "Emmy Squared",
    description:
      "Le Big Matt Burger  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Kit for 6",
    location: "Brooklyn, NY",
    price: "$99",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["burger"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "shake-shack-shackburger-16-pack",
    title: "Shake Shack",
    description:
      "Shake Shack Shackburger®  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. – 16 Pack",
    location: "New York, NY",
    price: "$89",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134022/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["burger"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "wagyu-burger-patties-12-pack",
    title: "Westholme Wagyu",
    description:
      "Wagyu Burger Patties  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - 12 Pack",
    location: "Queensland, Australia",
    price: "$129",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107019/wagyu-burger-patties-12-pack.6116f4cd648dee20651f99e21e7d758b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["burger"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "21-usda-prime-burgers-pack-of-18-8oz-each",
    title: "Peter Luger Steak House",
    description:
      "USDA Prime Burgers  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - Pack of 18 (8oz each)",
    location: "Brooklyn, NY",
    price: "$175.95",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["burger"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "burger-bomb-kit-for-6",
    title: "Old Homestead Steakhouse",
    description:
      "Burger Bomb Kit  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. for 6",
    location: "New York, NY",
    price: "$129",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133829/burger-bomb-kit-for-6.b0430200cfc153c1c15c7997236a6152.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["burger"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "artisanal-bread-choose-your-own-3-pack",
    title: "Orwashers Bakery",
    description:
      "Artisanal Bread -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Choose Your Own 3 Pack",
    location: "New York, NY",
    price: "$45",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132332/artisanal-bread-choose-your-own-3-pack.c64d8dc0584457116b91a24f43cd861c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["bread"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "artisanal-bread-choose-your-own-4-pack",
    title: "Grateful Bread Company",
    description:
      "Artisanal Bread -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Choose Your Own 4 Pack",
    location: "Sacramento, CA",
    price: "$59",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132426/bread-choose-your-own-4-pack.78f96938f1a3a5bc6a7fefa564bf878c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["bread"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "corn-cheese-bread-2-pack",
    title: "Calic Bread",
    description:
      "Corn Cheese Bread  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - 2 Pack",
    location: "Los Angeles, CA",
    price: "$89",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133923/corn-cheese-bread-2-pack.703937ce3943d6caad78d3612cd9dcef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["bread"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "tartine-bread-loaves-choose-your-own-2-pack",
    title: "Tartine Bakery",
    description:
      "Tartine Bread Loaves  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - Choose Your Own 2 Pack",
    location: "San Francisco, CA",
    price: "$39",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133401/tartine-bread-loaves-choose-your-own-2-pack.aa052bf998aa1b627e1fa71a482311a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["bread"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "japanese-milk-bread",
    title: "Craftsman and Wolves",
    description:
      "Japanese Milk Bread  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - 2 Loaves",
    location: "San Francisco, CA",
    price: "$55",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95387/japanese-milk-bread.5c3e3677db6b145b659e702af3098337.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["bread"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "artisanal-bread-choose-your-own-6-pack",
    title: "Orwashers Bakery",
    description:
      "Artisanal Bread -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Choose Your Own 6 Pack",
    location: "New York, NY",
    price: "$69",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126688/bread-choose-your-own-6-pack.060cf408cf8b30ef3ea618ef3e5d5389.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["bread"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "23572-artichoke-bread-sampler-4-pack",
    title: "Arcangeli Grocery",
    description:
      "Artichoke Bread Sampler  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - 4 Pack",
    location: "Pescadero, CA",
    price: "$59",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89514/artichoke-bread-sampler-4-pack.2243d37a2b976f88cdfe026026e82e1f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["bread"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "bavarian-soft-pretzel-twists-10-pack",
    title: "Milwaukee Pretzel Company",
    description:
      "Bavarian Soft Pretzel  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Twists - 10 Pack",
    location: "Milwaukee, WI",
    price: "$39",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133455/bavarian-soft-pretzel-twists-10-pack.0f8c34ca7341a525bd581924bd9f030f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["bread"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "the-gothamist-prosciutto-burrata-sandwich-kit-4-pack",
    title: "Alidoro",
    description:
      '"The Gothamist"  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Prosciutto + Burrata Sandwich Kit - 4 Pack',
    location: "New York, NY",
    price: "$99",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129490/the-gothamist-prosciutto-burrata-sandwich-kit-4-pack.4238b1e274d50b6e09d0b488aebe64bd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["sandwich"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "15504-original-muffuletta-sandwich-2-pack",
    title: "Central Grocery Muffulettas",
    description:
      "Original Muffuletta Sandwich  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - 2-Pack (Serves 6-8)",
    location: "New Orleans, LA",
    price: "$109",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/68615/original-muffuletta-sandwich-2-pack.ee9a97c691374b6866ea5b7083dd46d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["sandwich"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "the-bomb-sandwich-for-4",
    title: "Sal, Kris & Charlie's Deli",
    description:
      "The Bomb Sandwich  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. for 4",
    location: "Astoria, NY",
    price: "$89",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/85102/the-bomb-sandwich-for-4.78f5f65f8b94d6b3c81f70761b8d0f87.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["sandwich"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "15428-pittsburgh-party-pack",
    title: "Primanti Bros.",
    description:
      "Primanti Bros Sandwich  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Pack - (Choose Your Meat)",
    location: "Pittsburgh, PA",
    price: "$89",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132404/primanti-bros-sandwich-pack-choose-your-meat.db41e477a72d6957e98f860204ce356c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["sandwich"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "pastrami-burnt-end-sandwich-kit",
    title: "Ugly Drum",
    description:
      'Ugly Buns "Burnt  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. End" Sandwich Kit - 6 Pack',
    location: "Los Angeles, CA",
    price: "$109",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/101923/ugly-buns-burnt-end-sandwich-kit-4-pack.cadca40421c5a2b09d46673a8e2a8d37.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["sandwich"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "favorite-sloppy-joe-sandwich",
    title: "Town Hall Deli",
    description:
      "Favorite Sloppy Joe  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Sandwich",
    location: "South Orange, NJ",
    price: "$79",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/67768/new-jersey-sloppy-joe-sandwich-feeds-3.b866e4c84e09ad65cb8c6b9f4949ec7d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["sandwich"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "sandwich-best-sellers-4-pack",
    title: "Alidoro",
    description:
      "Italian Sandwich Kit  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Best Sellers - 4 Pack",
    location: "New York, NY",
    price: "$99",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133197/italian-sandwich-kit-best-sellers-4-pack.746c4cdd37eb5855178bcb6492fd66f6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["sandwich"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "15504-original-muffuletta-sandwich-pack",
    title: "Central Grocery Muffulettas",
    description:
      "Original Muffuletta Sandwich  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - 3 pack (Serves 10-12)",
    location: "New Orleans, LA",
    price: "$149",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133232/original-muffuletta-sandwich-3-pack.2b00693e49ef277bc2b69810709d8fe8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["sandwich"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "hong-kong-boba-tea-kit-for-6",
    title: "New Territories",
    description:
      "Hong Kong Boba  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Tea Kit for 6",
    location: "New York, NY",
    price: "$59",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108725/hong-kong-boba-tea-kit-for-6.63841de36d8e5edfafa13023fc303285.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["drink"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "guys-caliente-margaritas-for-12",
    title: "Guy Fieri",
    description:
      "Guy's Caliente  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Margaritas for 12",
    location: "Flavortown, USA",
    price: "$69",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126836/guys-caliente-margaritas-for-12.ca8c6bc06b8f1039549385ffcebc749d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["drink"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "woodford-reserve-mint-julep-syrup",
    title: "Woodford Reserve",
    description:
      "Woodford Reserve Mint  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Julep Syrup",
    location: "Louisville, KY",
    price: "$39",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134036/woodford-reserve-mint-julep-syrup.ef523ac7cbae5f4aba6b058207f490d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["drink"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "new-orleans-hurricane-mix",
    title: "Franco's Hurricane Mix",
    description:
      "New Orleans Hurricane  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Mix",
    location: "Natchitoches, LA",
    price: "$39",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/84522/new-orleans-hurricane-mix.4613584fc65cb0787024dd24d2a8f4b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["drink"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "evan-williams-gourmet-mint-julep-mix-2-pack",
    title: "Evan Williams",
    description:
      "Evan Williams Gourmet  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Mint Julep Mix - 2 Pack",
    location: "Louisville, KY",
    price: "$39",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/product_image/image/42820/evan-williams-gourmet-mint-julep-mix-2-pack.a0bd561099dd14bfb33e3363c1c025d0.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["drink"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "margarita-mix",
    title: "Johnny Sanchez",
    description:
      "Margarita Mix Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat.",
    location: "New Orleans, LA",
    price: "$59",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132643/margarita-mix.bd48a000d589d3147b14790af3c33fcd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["drink"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "woodford-reserve-mint-julep-syrup-2-pack",
    title: "Woodford Reserve",
    description:
      "Woodford Reserve Mint  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Julep Syrup - 2 Pack",
    location: "Louisville, KY",
    price: "$59",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133235/woodford-reserve-mint-julep-syrup-2-pack.0ac76063f151988113cbaabd0eaa829f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["drink"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "evan-williams-gourmet-mint-julep-mix",
    title: "Evan Williams",
    description:
      "Evan Williams Gourmet  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Mint Julep Mix",
    location: "Louisville, KY",
    price: "$25",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/92899/evan-williams-gourmet-mint-julep-mix.c90e8c3ed5ac0dc1c85139e6b7b8521c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["drink"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "2-lou-malnatis-deep-dish-pizzas",
    title: "Lou Malnati's Pizza",
    description:
      "2 Lou Malnati's  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Deep Dish Pizzas",
    location: "Chicago, IL",
    price: "$67.99",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/97981/2-lou-malnatis-deep-dish-pizzas.bf0fe065d251a9cca3925b269d443a27.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["pizza"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "23699-choose-your-own-thin-crust-pizza-4-pack",
    title: "Bartolini’s",
    description:
      "Choose Your Own  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Thin Crust Pizza - 4 Pack",
    location: "Chicago, IL",
    price: "$139",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89781/choose-your-own-thin-crust-pizza-4-pack.b928a2008eab50c65dc87e59b5952190.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["pizza"],
  },
  {
    tags: [""],
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "choose-your-own-new-haven-style-pizza-6-pack",
    title: "Zuppardi's Apizza",
    description:
      "New Haven-Style  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Pizza - 6 Pack (Choose Your Own)",
    location: "West Haven, CT",
    price: "$79",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "6-lou-malnatis-deep-dish-pizzas",
    title: "Lou Malnati's Pizza",
    description:
      "6 Lou Malnati's  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Deep Dish Pizzas",
    location: "Chicago, IL",
    price: "$116.99",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106829/6-lou-malnatis-deep-dish-pizzas.f59993181da5d295668c8a6fb856055e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["pizza"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "wood-fired-pizzas-best-seller-4-pack",
    title: "Pizzeria Bianco",
    description:
      "Wood Fired Pizzas  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Best Seller - 4 Pack",
    location: "Phoenix, AZ",
    price: "$129",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106027/wood-fired-pizzas-best-seller-4-pack.1653bb05922ba153ac178f8365d27f6d.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["pizza"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "236991-choose-your-own-deep-dish-pizza-3-pack",
    title: "Bartolini’s",
    description:
      "Choose Your Own  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Deep Dish Pizza - 3 Pack",
    location: "Chicago, IL",
    price: "$139",
    rate: "5",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133398/choose-your-own-deep-dish-pizza-3-pack.4111791511244a4946bb5c9ad2c17da9.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["pizza"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "choose-your-own-detroit-style-pizza-3-pack",
    title: "Emmy Squared",
    description:
      "Detroit-Style Pizza  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. - Choose Your Own 3 Pack",
    location: "Brooklyn, NY",
    price: "$89",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132973/detroit-style-pizza-choose-your-own-3-pack.6b6f4909ffd4066d5471e70eac5c3d89.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["pizza"],
  },
  {
    ingredients: [
      "Egg",
      "Milk Protein",
      "Sesame",
      "Lactose",
      "Gluten",
      "Mustard",
    ],
    productId: "brooklyn-pizza-choose-your-own-5-pack",
    title: "Paesan’s Pizza",
    description:
      "Brooklyn Pizza -  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem quasi modi voluptatibus hic nobis fugit, iure facilis deserunt nam sint quam praesentium ex amet, quas assumenda sed mollitia fugiat. Choose Your Own 5 Pack",
    location: "Albany, NY",
    price: "$69",
    rate: "4",
    imageUrl:
      "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/104938/brooklyn-pizza-choose-your-own-5-pack.edc4f476a75207d0af840ce6f225f2b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    tags: ["pizza"],
  },
];

export const useFetchProductShop = (
  startLoading,
  stopLoading,
  setRawList,
  page,
  price,
  rate,
  keySearch,
  updateListByConditions,
  popular,
  containerRef
) => {
  const tempRef = useRef([]);
  useEffect(() => {
    if (tempRef.current.length <= 1) tempRef.current.push(page);
    if (tempRef.current.length > 1) {
      window.scroll({
        top: containerRef.current.offsetTop - 100,
      });
    }
    const subscription = timer(0)
      .pipe(
        tap(() => startLoading()),
        switchMapTo(timer(2000))
      )
      .subscribe(() => {
        setRawList(dataShopRawList);
        updateListByConditions(dataShopRawList);
        stopLoading();
      });
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, price, rate, keySearch, popular]);
};

export const useFetchShopProductDetailByProductId = (
  productId,
  updateDetailData
) => {
  useEffect(() => {
    window.scroll({ top: 0 });
    const subscription = timer(1000).subscribe(() => {
      updateDetailData(
        dataShopRawList.find((data) => productId === data.productId)
      );
    });
    return () => {
      updateDetailData({});
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);
};

export const useFetchShopRelatedProducts = (
  tag,
  exceptProductId,
  updateRelatedProducts,
  updateIsLoadingRelatedProducts
) => {
  useEffect(() => {
    const subscription = timer(2000).subscribe(() => {
      updateRelatedProducts(
        dataShopRawList.filter(
          ({ tags = [], productId }) =>
            tags.includes(tag) && productId !== exceptProductId
        )
      );
      updateIsLoadingRelatedProducts(false);
    });
    return () => {
      subscription.unsubscribe();
      updateIsLoadingRelatedProducts(true);
      updateRelatedProducts([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exceptProductId]);
};
