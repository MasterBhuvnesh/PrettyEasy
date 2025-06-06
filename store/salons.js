const salons = [
  {
    address: "12 MG Road, Bengaluru, Karnataka",
    opening: "9:00 AM",
    closing: "8:00 PM",
    image: "https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg",
    name: "Bliss Beauty Salon",
    seats: 20,
  },
  {
    address: "45 South Extension, New Delhi, Delhi",
    opening: "10:00 AM",
    closing: "7:00 PM",
    image: "https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg",
    name: "Elite Spa & Salon",
    seats: 15,
  },
  {
    address: "23 Linking Road, Mumbai, Maharashtra",
    opening: "8:30 AM",
    closing: "9:00 PM",
    image: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
    name: "Glow & Shine",
    seats: 25,
  },
  {
    address: "88 Park Street, Kolkata, West Bengal",
    opening: "9:00 AM",
    closing: "8:00 PM",
    image: "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg",
    name: "Bengal Beauty Haven",
    seats: 18,
  },
  {
    address: "16 GN Chetty Road, Chennai, Tamil Nadu",
    opening: "10:00 AM",
    closing: "6:30 PM",
    image: "https://images.pexels.com/photos/3065174/pexels-photo-3065174.jpeg",
    name: "South Style Studio",
    seats: 12,
  },
  {
    address: "78 Banjara Hills, Hyderabad, Telangana",
    opening: "8:00 AM",
    closing: "9:30 PM",
    image: "https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg",
    name: "The Luxe Lounge",
    seats: 30,
  },
  {
    address: "10 Rajiv Chowk, New Delhi, Delhi",
    opening: "9:00 AM",
    closing: "7:00 PM",
    image: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
    name: "Mirror Magic",
    seats: 22,
  },
  {
    address: "22 Koregaon Park, Pune, Maharashtra",
    opening: "9:30 AM",
    closing: "8:30 PM",
    image: "https://images.pexels.com/photos/3065174/pexels-photo-3065174.jpeg",
    name: "Pamper Palace",
    seats: 17,
  },
  {
    address: "45 Gomti Nagar, Lucknow, Uttar Pradesh",
    opening: "10:00 AM",
    closing: "9:00 PM",
    image: "https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg",
    name: "Heavenly Hands",
    seats: 15,
  },
  {
    address: "20 GT Road, Amritsar, Punjab",
    opening: "8:00 AM",
    closing: "8:30 PM",
    image: "https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg",
    name: "Radiance Salon",
    seats: 10,
  },
  {
    address: "33 Civil Lines, Jaipur, Rajasthan",
    opening: "10:00 AM",
    closing: "7:30 PM",
    image: "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg",
    name: "Royal Touch",
    seats: 20,
  },
  {
    address: "5 Lal Darwaja, Ahmedabad, Gujarat",
    opening: "9:00 AM",
    closing: "9:00 PM",
    image: "https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg",
    name: "Western Elegance",
    seats: 25,
  },
  {
    address: "12 Brigade Road, Bengaluru, Karnataka",
    opening: "9:30 AM",
    closing: "8:00 PM",
    image: "https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg",
    name: "Serene Styles",
    seats: 14,
  },
  {
    address: "50 Residency Road, Jodhpur, Rajasthan",
    opening: "8:00 AM",
    closing: "7:30 PM",
    image: "https://images.pexels.com/photos/3065174/pexels-photo-3065174.jpeg",
    name: "Heritage Beauty",
    seats: 18,
  },
  {
    address: "34 Race Course Road, Dehradun, Uttarakhand",
    opening: "9:00 AM",
    closing: "8:30 PM",
    image: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
    name: "Hilltop Glow",
    seats: 12,
  },
];

const carouselImages = [
  {
    images: [
      "https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg",
      "https://images.pexels.com/photos/1028422/pexels-photo-1028422.jpeg",
      "https://images.pexels.com/photos/209957/pexels-photo-209957.jpeg"
    ],
    sal_id: "/salons/salon_1",
  },
  {
    images: [
      "https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg",
      "https://images.pexels.com/photos/374845/pexels-photo-374845.jpeg",
      "https://images.pexels.com/photos/1587049/pexels-photo-1587049.jpeg"
    ],
    sal_id: "/salons/salon_2",
  },
  {
    images: [
      "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      "https://images.pexels.com/photos/545217/pexels-photo-545217.jpeg"
    ],
    sal_id: "/salons/salon_3",
  },
  {
    images: [
      "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg",
      "https://images.pexels.com/photos/356046/pexels-photo-356046.jpeg",
      "https://images.pexels.com/photos/312574/pexels-photo-312574.jpeg"
    ],
    sal_id: "/salons/salon_4",
  },
  {
    images: [
      "https://images.pexels.com/photos/3065174/pexels-photo-3065174.jpeg",
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
      "https://images.pexels.com/photos/372275/pexels-photo-372275.jpeg"
    ],
    sal_id: "/salons/salon_5",
  },
  {
    images: [
      "https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg",
      "https://images.pexels.com/photos/2736139/pexels-photo-2736139.jpeg",
      "https://images.pexels.com/photos/2905449/pexels-photo-2905449.jpeg"
    ],
    sal_id: "/salons/salon_6",
  },
  {
    images: [
      "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
      "https://images.pexels.com/photos/4553357/pexels-photo-4553357.jpeg",
      "https://images.pexels.com/photos/3944389/pexels-photo-3944389.jpeg"
    ],
    sal_id: "/salons/salon_7",
  },
  {
    images: [
      "https://images.pexels.com/photos/3065174/pexels-photo-3065174.jpeg",
      "https://images.pexels.com/photos/3884981/pexels-photo-3884981.jpeg",
      "https://images.pexels.com/photos/3984866/pexels-photo-3984866.jpeg"
    ],
    sal_id: "/salons/salon_8",
  },
  {
    images: [
      "https://images.pexels.com/photos/3992875/pexels-photo-3992875.jpeg",
      "https://images.pexels.com/photos/313369/pexels-photo-313369.jpeg",
      "https://images.pexels.com/photos/2377184/pexels-photo-2377184.jpeg"
    ],
    sal_id: "/salons/salon_9",
  },
  {
    images: [
      "https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg",
      "https://images.pexels.com/photos/1704127/pexels-photo-1704127.jpeg",
      "https://images.pexels.com/photos/270345/pexels-photo-270345.jpeg"
    ],
    sal_id: "/salons/salon_10",
  },
  {
    images: [
      "https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg",
      "https://images.pexels.com/photos/3913302/pexels-photo-3913302.jpeg",
      "https://images.pexels.com/photos/271255/pexels-photo-271255.jpeg"
    ],
    sal_id: "/salons/salon_11",
  },
  {
    images: [
      "https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg",
      "https://images.pexels.com/photos/3015995/pexels-photo-3015995.jpeg",
      "https://images.pexels.com/photos/1987135/pexels-photo-1987135.jpeg"
    ],
    sal_id: "/salons/salon_12",
  },
  {
    images: [
      "https://images.pexels.com/photos/3993448/pexels-photo-3993448.jpeg",
      "https://images.pexels.com/photos/3767398/pexels-photo-3767398.jpeg",
      "https://images.pexels.com/photos/3564551/pexels-photo-3564551.jpeg"
    ],
    sal_id: "/salons/salon_13",
  },
  {
    images: [
      "https://images.pexels.com/photos/3065174/pexels-photo-3065174.jpeg",
      "https://images.pexels.com/photos/1716975/pexels-photo-1716975.jpeg",
      "https://images.pexels.com/photos/2330034/pexels-photo-2330034.jpeg"
    ],
    sal_id: "/salons/salon_14",
  },
  {
    images: [
      "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
      "https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg",
      "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
    ],
    sal_id: "/salons/salon_15",
  },
];
const slots = [
  {
    ref_id: "/salons/salon_1",
    slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  },
  {
    ref_id: "/salons/salon_2",
    slot: ["09:30", "11:30", "13:30", "15:30", "17:30"],
  },
  {
    ref_id: "/salons/salon_3",
    slot: ["08:30", "10:30", "12:30", "14:30", "16:30", "18:30"],
  },
  {
    ref_id: "/salons/salon_4",
    slot: ["09:00", "11:00", "13:00", "15:00", "17:00"],
  },
  {
    ref_id: "/salons/salon_5",
    slot: ["10:00", "12:00", "14:00", "16:00"],
  },
  {
    ref_id: "/salons/salon_6",
    slot: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  },
  {
    ref_id: "/salons/salon_7",
    slot: ["09:00", "11:00", "13:00", "15:00", "17:00"],
  },
  {
    ref_id: "/salons/salon_8",
    slot: ["09:30", "11:30", "13:30", "15:30", "17:30"],
  },
  {
    ref_id: "/salons/salon_9",
    slot: ["10:00", "12:00", "14:00", "16:00", "18:00"],
  },
  {
    ref_id: "/salons/salon_10",
    slot: ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"],
  },
  {
    ref_id: "/salons/salon_11",
    slot: ["10:00", "12:00", "14:00", "16:00"],
  },
  {
    ref_id: "/salons/salon_12",
    slot: ["09:00", "11:00", "13:00", "15:00", "17:00"],
  },
  {
    ref_id: "/salons/salon_13",
    slot: ["09:30", "11:30", "13:30", "15:30", "17:30"],
  },
  {
    ref_id: "/salons/salon_14",
    slot: ["08:30", "10:30", "12:30", "14:30", "16:30"],
  },
  {
    ref_id: "/salons/salon_15",
    slot: ["09:00", "11:00", "13:00", "15:00", "17:00"],
  },
];

export { carouselImages, salons, slots };

