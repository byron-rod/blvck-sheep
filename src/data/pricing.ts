export const sharedRoutes = [
  { id: "gt-ant", from: "Guate", to: "Antigua", price: 128.6, privatePrice: 400, schedule: "6:00am, 10:30am, 1:30pm" },
  { id: "gt-pana", from: "Guate", to: "Panajachel", price: 224, privatePrice: 900, schedule: "6:00am, 10:30am, 1:30pm" },
  { id: "ant-pana", from: "Antigua", to: "Panajachel", price: 128.6, privatePrice: 720, schedule: "5:30am, 8:00am, 12:30pm, 4:00pm" },
  { id: "pana-ant", from: "Panajachel", to: "Antigua", price: 128.6, privatePrice: 720, schedule: "5:00am, 9:00am, 12:00pm, 4:00pm" },
  { id: "pana-gt", from: "Panajachel", to: "Guate", price: 224, privatePrice: 900, schedule: "5:00am, 9:00am, 12:00pm, 4:00pm" },
  { id: "ant-gt", from: "Antigua", to: "Guate", price: 150, privatePrice: 400, schedule: "4:00am, 9:00am" },
  { id: "pana-lanq", from: "Panajachel", to: "Lanquin", price: 350, privatePrice: 2200, schedule: "8:00am" },
  { id: "ant-lanq", from: "Antigua", to: "Lanquin", price: 350, privatePrice: 1850, schedule: "8:00am" },
  { id: "lanq-flores", from: "Lanquin", to: "Flores", price: 300, privatePrice: 2200, schedule: "8:00am" },
  { id: "ant-paredon", from: "Antigua", to: "El Paredón", price: 150, privatePrice: 900, schedule: "9:00am, 2:00pm" },
];

export const addOns = [
  { id: "sim", name: "Instant Connectivity (SIM Card)", descriptionEN: "Local SIM Card ready on boarding.", descriptionES: "Tarjeta SIM local lista al abordar." },
  { id: "detour", name: "The Express Detour", descriptionEN: "Modify your journey with strategic stops at Mayan ruins or local restaurants.", descriptionES: "Paradas estratégicas en ruinas Mayas o restaurantes locales." },
  { id: "cooler", name: "The Road Cooler", descriptionEN: "For long journeys, fill a cooler with ice-cold beverages and snacks during your transit.", descriptionES: "" }
];