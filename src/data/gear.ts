export type GearProduct = {
  name: string;
  bestFor: string;
  searchQuery: string;
};

export type GearCategory = {
  slug: string;
  title: string;
  keyword: string;
  description: string;
  buyingChecks: string[];
  products: GearProduct[];
};

export const gearCategories: GearCategory[] = [
  {
    slug: 'microsd-cards', title: 'microSD cards for handheld gaming', keyword: 'best microSD card for Steam Deck and handheld gaming',
    description: 'A2/U3 microSD shortlists for expanding Steam Deck, ROG Ally, and Legion Go game storage without opening the device.',
    buyingChecks: ['Match the capacity to your real library.', 'Prefer reputable A2/U3 cards sold by Amazon or the manufacturer.', 'Test the card before moving your only copy of a game library.'],
    products: [
      { name: 'Samsung PRO Plus 512GB microSDXC', bestFor: 'Reliable 512GB expansion', searchQuery: 'Samsung PRO Plus 512GB microSDXC A2' },
      { name: 'SanDisk Extreme 1TB microSDXC', bestFor: 'Large portable library', searchQuery: 'SanDisk Extreme 1TB microSDXC A2' },
      { name: 'Lexar PLAY 1TB microSDXC', bestFor: 'Value-focused 1TB option', searchQuery: 'Lexar PLAY 1TB microSDXC A2' }
    ]
  },
  {
    slug: 'power-banks', title: 'USB-C power banks for handheld gaming', keyword: 'best power bank for Steam Deck ROG Ally Legion Go',
    description: 'High-output USB-C PD power bank shortlists for flights, commutes, and long handheld gaming sessions.',
    buyingChecks: ['Check USB-C PD output, not only total capacity.', 'Confirm airline carry-on limits before travel.', 'Use a cable rated for the required wattage.'],
    products: [
      { name: 'Anker 737 Power Bank', bestFor: 'High-output travel kit', searchQuery: 'Anker 737 power bank 140W' },
      { name: 'UGREEN 145W Power Bank', bestFor: 'Multiple-device travel', searchQuery: 'UGREEN 145W power bank' },
      { name: 'Baseus Blade 100W Power Bank', bestFor: 'Slim laptop-style packing', searchQuery: 'Baseus Blade 100W power bank' }
    ]
  },
  {
    slug: 'docks', title: 'USB-C docks for handheld gaming PCs', keyword: 'best dock for Steam Deck ROG Ally Legion Go',
    description: 'Dock shortlists for TV play, monitors, Ethernet, controllers, and desktop use.',
    buyingChecks: ['Verify HDMI/DisplayPort needs.', 'Check PD pass-through and whether a charger is included.', 'Confirm the cradle does not block vents or fit poorly with a case.'],
    products: [
      { name: 'JSAUX 6-in-1 Steam Deck Dock', bestFor: 'Mainstream TV/desk setup', searchQuery: 'JSAUX 6 in 1 Steam Deck dock' },
      { name: 'UGREEN Steam Deck Dock', bestFor: 'Multi-device USB-C setup', searchQuery: 'UGREEN Steam Deck dock ROG Ally' },
      { name: 'Anker USB-C Hub with HDMI and Ethernet', bestFor: 'Portable hub-style setup', searchQuery: 'Anker USB C hub HDMI Ethernet 100W PD' }
    ]
  },
  {
    slug: 'chargers', title: 'USB-C chargers for handheld gaming PCs', keyword: 'best USB-C charger for Steam Deck ROG Ally Legion Go',
    description: '45W, 65W, and 100W USB-C PD charger options for handhelds, docks, and travel kits.',
    buyingChecks: ['Match the device and dock wattage requirement.', 'Remember that multi-port chargers split output.', 'Pair the charger with a properly rated cable.'],
    products: [
      { name: 'Anker 715 Nano II 65W Charger', bestFor: 'Compact single-device charging', searchQuery: 'Anker 715 Nano II 65W charger' },
      { name: 'UGREEN Nexode 100W GaN Charger', bestFor: 'Handheld plus phone/laptop', searchQuery: 'UGREEN Nexode 100W GaN charger' },
      { name: 'Baseus 65W GaN Charger', bestFor: 'Value-focused travel charger', searchQuery: 'Baseus 65W GaN USB C charger' }
    ]
  },
  {
    slug: 'nvme-ssds', title: 'NVMe SSD upgrades for handheld gaming PCs', keyword: 'best SSD upgrade for Steam Deck ROG Ally',
    description: '2230 and 2280 NVMe SSD product families to research before opening a handheld.',
    buyingChecks: ['Verify 2230, 2242, or 2280 physical fit.', 'Check device warranty and official service guidance.', 'Clone or back up data before opening the device.'],
    products: [
      { name: 'Sabrent Rocket 2230 NVMe SSD', bestFor: 'Steam Deck/2230 devices', searchQuery: 'Sabrent Rocket 2230 1TB NVMe SSD' },
      { name: 'Corsair MP600 MINI 2230 SSD', bestFor: '2230 upgrade shortlist', searchQuery: 'Corsair MP600 MINI 1TB 2230 SSD' },
      { name: 'WD_BLACK SN850X 2280 SSD', bestFor: 'ROG Ally X/2280 devices', searchQuery: 'WD BLACK SN850X 2TB NVMe SSD' }
    ]
  },
  {
    slug: 'cases', title: 'carrying cases for handheld gaming PCs', keyword: 'best carrying case for Steam Deck ROG Ally Legion Go',
    description: 'Protective cases and travel bags sized for handhelds, chargers, docks, cables, and power banks.',
    buyingChecks: ['Match the exact device and grip/case dimensions.', 'Check joystick clearance.', 'Do not pack loose hard accessories against the screen.'],
    products: [
      { name: 'Spigen Rugged Armor Pro carrying case', bestFor: 'Protective Steam Deck travel', searchQuery: 'Spigen Rugged Armor Pro Steam Deck case' },
      { name: 'tomtoc Handheld Gaming PC carrying case', bestFor: 'Accessory-heavy travel', searchQuery: 'tomtoc handheld gaming PC carrying case' },
      { name: 'JSAUX carrying case for handheld gaming', bestFor: 'Value-focused protection', searchQuery: 'JSAUX carrying case Steam Deck ROG Ally' }
    ]
  },
  {
    slug: 'screen-protectors', title: 'screen protectors for handheld gaming PCs', keyword: 'best screen protector Steam Deck OLED ROG Ally Legion Go',
    description: 'Device-specific tempered glass and anti-glare screen protector searches.',
    buyingChecks: ['Match the exact screen size and model.', 'Decide whether anti-glare will alter display clarity.', 'Check compatibility with protective shells and cases.'],
    products: [
      { name: 'amFilm Steam Deck OLED screen protector', bestFor: 'Steam Deck OLED', searchQuery: 'amFilm Steam Deck OLED screen protector' },
      { name: 'Spigen GlasTR EZ FIT for ROG Ally', bestFor: 'ROG Ally installation tray', searchQuery: 'Spigen GlasTR EZ FIT ROG Ally screen protector' },
      { name: 'ivoler Legion Go screen protector', bestFor: 'Legion Go coverage', searchQuery: 'ivoler Legion Go screen protector' }
    ]
  },
  {
    slug: 'controllers', title: 'controllers for docked handheld gaming', keyword: 'best controller for Steam Deck docked',
    description: 'Bluetooth and 2.4GHz controller shortlists for docked play and travel.',
    buyingChecks: ['Check Bluetooth, dongle, or USB support.', 'Confirm button layout and game compatibility.', 'Pack a data-capable cable for pairing recovery.'],
    products: [
      { name: 'Xbox Wireless Controller', bestFor: 'Broad Windows compatibility', searchQuery: 'Xbox Wireless Controller USB C' },
      { name: '8BitDo Ultimate 2C Wireless Controller', bestFor: 'Value-focused docked play', searchQuery: '8BitDo Ultimate 2C wireless controller' },
      { name: 'Sony DualSense Wireless Controller', bestFor: 'PlayStation-style layout', searchQuery: 'Sony DualSense wireless controller' }
    ]
  },
  {
    slug: 'portable-monitors', title: 'portable monitors for handheld gaming PCs', keyword: 'best portable monitor for Steam Deck ROG Ally',
    description: 'USB-C portable monitor families for hotel desks, LAN setups, and larger-screen play.',
    buyingChecks: ['Confirm USB-C DisplayPort Alt Mode support.', 'Check whether the monitor needs separate power.', 'Match refresh rate/VRR expectations to the handheld.'],
    products: [
      { name: 'ARZOPA Z1FC portable gaming monitor', bestFor: 'High-refresh travel display', searchQuery: 'ARZOPA Z1FC portable gaming monitor' },
      { name: 'ASUS ZenScreen portable monitor', bestFor: 'Business/travel reliability', searchQuery: 'ASUS ZenScreen USB C portable monitor' },
      { name: 'UPERFECT portable gaming monitor', bestFor: 'Broad size/refresh options', searchQuery: 'UPERFECT portable gaming monitor USB C' }
    ]
  },
  {
    slug: 'headsets-earbuds', title: 'headsets and earbuds for handheld gaming', keyword: 'best gaming earbuds for Steam Deck ROG Ally',
    description: 'Wired, Bluetooth, and low-latency USB-C dongle audio options for handheld play.',
    buyingChecks: ['Use 2.4GHz dongle or wired audio for timing-sensitive games.', 'Check USB-C dongle clearance.', 'Verify microphone support on the target device.'],
    products: [
      { name: 'SteelSeries Arctis GameBuds', bestFor: 'Low-latency wireless gaming', searchQuery: 'SteelSeries Arctis GameBuds' },
      { name: 'Soundcore VR P10 gaming earbuds', bestFor: 'USB-C dongle value', searchQuery: 'Soundcore VR P10 gaming earbuds' },
      { name: 'Apple EarPods USB-C', bestFor: 'Simple wired travel audio', searchQuery: 'Apple EarPods USB C' }
    ]
  },
  {
    slug: 'keyboards-mice', title: 'travel keyboards and mice for handheld PCs', keyword: 'best keyboard and mouse for Steam Deck desktop mode',
    description: 'Compact keyboard and mouse families for desktop mode, launchers, modding, and hotel-desk setups.',
    buyingChecks: ['Prefer multi-device Bluetooth or 2.4GHz flexibility.', 'Check dongle/USB-A needs.', 'Prioritize compact packing over full-size gaming features.'],
    products: [
      { name: 'Logitech Pebble Keys 2 K380s', bestFor: 'Compact Bluetooth typing', searchQuery: 'Logitech Pebble Keys 2 K380s' },
      { name: 'Logitech Pebble Mouse 2 M350s', bestFor: 'Quiet compact travel mouse', searchQuery: 'Logitech Pebble Mouse 2 M350s' },
      { name: 'Keychron K3 low-profile keyboard', bestFor: 'Premium portable mechanical option', searchQuery: 'Keychron K3 low profile keyboard' }
    ]
  },
  {
    slug: 'usb-c-cables-adapters', title: 'USB-C cables and adapters for handheld gaming', keyword: 'best USB-C cable for Steam Deck ROG Ally',
    description: '100W/240W cables, right-angle adapters, and short dock cables for cleaner handheld setups.',
    buyingChecks: ['Buy a cable rated for the intended PD wattage.', 'Confirm data/video capability when needed.', 'Avoid rigid adapters that put leverage on the handheld port.'],
    products: [
      { name: 'Anker 333 USB-C 100W cable', bestFor: 'General charging and docks', searchQuery: 'Anker 333 USB C 100W cable' },
      { name: 'UGREEN 240W USB-C cable', bestFor: 'Future-ready charging cable', searchQuery: 'UGREEN 240W USB C cable' },
      { name: 'Cable Matters right-angle USB-C cable', bestFor: 'Reduced cable strain', searchQuery: 'Cable Matters right angle USB C 100W cable' }
    ]
  }
];

export function amazonSearchUrl(query: string) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
}
