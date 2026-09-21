// Central manifest of all real Baker Babe cake photos, grouped by category.
// Single source of truth so images are used consistently and never repeat.

export const cakeImages = {
  birthday: [
    '/cakes/birthday/baker-babe-cleaned-001.jpg',
    '/cakes/birthday/baker-babe-cleaned-004.jpg',
    '/cakes/birthday/baker-babe-cleaned-005.jpg',
    '/cakes/birthday/baker-babe-cleaned-006.jpg',
    '/cakes/birthday/baker-babe-cleaned-007.jpg',
    '/cakes/birthday/baker-babe-cleaned-012.jpg',
    '/cakes/birthday/baker-babe-cleaned-014.jpg',
    '/cakes/birthday/baker-babe-cleaned-015.jpg',
    '/cakes/birthday/baker-babe-cleaned-019.jpg',
    '/cakes/birthday/baker-babe-cleaned-022.jpg',
    '/cakes/birthday/baker-babe-cleaned-028.jpg',
    '/cakes/birthday/baker-babe-cleaned-034.jpg',
    '/cakes/birthday/baker-babe-cleaned-035.jpg',
    '/cakes/birthday/baker-babe-cleaned-041.jpg',
    '/cakes/birthday/baker-babe-cleaned-045.jpg',
    '/cakes/birthday/baker-babe-cleaned-051.jpg',
    '/cakes/birthday/baker-babe-cleaned-052.jpg',
    '/cakes/birthday/baker-babe-cleaned-053.jpg',
    '/cakes/birthday/baker-babe-cleaned-059.jpg',
    '/cakes/birthday/baker-babe-cleaned-062.jpg',
    '/cakes/birthday/baker-babe-cleaned-076.jpg',
  ],
  custom: [
    '/cakes/custom/baker-babe-cleaned-002.jpg',
    '/cakes/custom/baker-babe-cleaned-013.jpg',
    '/cakes/custom/baker-babe-cleaned-018.jpg',
    '/cakes/custom/baker-babe-cleaned-029.jpg',
    '/cakes/custom/baker-babe-cleaned-036.jpg',
    '/cakes/custom/baker-babe-cleaned-040.jpg',
    '/cakes/custom/baker-babe-cleaned-046.jpg',
    '/cakes/custom/baker-babe-cleaned-047.jpg',
    '/cakes/custom/baker-babe-cleaned-049.jpg',
    '/cakes/custom/baker-babe-cleaned-054.jpg',
    '/cakes/custom/baker-babe-cleaned-056.jpg',
    '/cakes/custom/baker-babe-cleaned-057.jpg',
    '/cakes/custom/baker-babe-cleaned-058.jpg',
    '/cakes/custom/baker-babe-cleaned-060.jpg',
    '/cakes/custom/baker-babe-cleaned-061.jpg',
    '/cakes/custom/baker-babe-cleaned-075.jpg',
    '/cakes/custom/baker-babe-cleaned-077.jpg',
    '/cakes/custom/baker-babe-cleaned-078.jpg',
  ],
  wedding: [
    '/cakes/wedding/baker-babe-cleaned-021.jpg',
    '/cakes/wedding/baker-babe-cleaned-033.jpg',
    '/cakes/wedding/baker-babe-cleaned-038.jpg',
    '/cakes/wedding/baker-babe-cleaned-055.jpg',
    '/cakes/wedding/baker-babe-cleaned-024.jpg',
    '/cakes/wedding/baker-babe-cleaned-026.jpg',
  ],
  'baby-shower': [
    '/cakes/baby-shower/baker-babe-cleaned-010.jpg',
    '/cakes/baby-shower/baker-babe-cleaned-016.jpg',
    '/cakes/baby-shower/baker-babe-cleaned-023.jpg',
    '/cakes/baby-shower/baker-babe-cleaned-025.jpg',
    '/cakes/baby-shower/baker-babe-cleaned-044.jpg',
    '/cakes/baby-shower/baker-babe-cleaned-050.jpg',
  ],
  corporate: [
    '/cakes/corporate/baker-babe-cleaned-003.jpg',
    '/cakes/corporate/baker-babe-cleaned-031.jpg',
    '/cakes/corporate/baker-babe-cleaned-032.jpg',
    '/cakes/corporate/baker-babe-cleaned-043.jpg',
    '/cakes/corporate/baker-babe-cleaned-064.jpg',
    '/cakes/corporate/baker-babe-cleaned-065.jpg',
  ],
  festive: [
    '/cakes/festive/baker-babe-cleaned-011.jpg',
    '/cakes/festive/baker-babe-cleaned-017.jpg',
    '/cakes/festive/baker-babe-cleaned-037.jpg',
    '/cakes/festive/baker-babe-cleaned-039.jpg',
    '/cakes/festive/baker-babe-cleaned-073.jpg',
  ],
  desserts: [
    '/cakes/desserts/baker-babe-cleaned-009.jpg',
    '/cakes/desserts/baker-babe-cleaned-020.jpg',
    '/cakes/desserts/baker-babe-cleaned-027.jpg',
    '/cakes/desserts/baker-babe-cleaned-030.jpg',
    '/cakes/desserts/baker-babe-cleaned-042.jpg',
    '/cakes/desserts/baker-babe-cleaned-048.jpg',
  ],
  workshop: [
    '/cakes/workshop/baker-babe-cleaned-070.jpg',
    '/cakes/workshop/baker-babe-cleaned-071.jpg',
    '/cakes/workshop/baker-babe-cleaned-072.jpg',
  ],
}

// Gallery filter categories (label + folder key) — matches the real folders.
export const galleryCategories = [
  { label: 'All Cakes', key: 'all' },
  { label: 'Birthday', key: 'birthday' },
  { label: 'Custom & Themed', key: 'custom' },
  { label: 'Wedding & Engagement', key: 'wedding' },
  { label: 'Baby Shower', key: 'baby-shower' },
  { label: 'Corporate', key: 'corporate' },
  { label: 'Festive & Seasonal', key: 'festive' },
  { label: 'Desserts', key: 'desserts' },
]

// Human-readable category names for display tags on cards.
export const categoryLabels = {
  birthday: 'Birthday',
  custom: 'Custom & Themed',
  wedding: 'Wedding & Engagement',
  'baby-shower': 'Baby Shower',
  corporate: 'Corporate',
  festive: 'Festive & Seasonal',
  desserts: 'Desserts',
  workshop: 'Workshop',
}

// Flattened gallery items across all display categories (excludes workshop),
// each image used exactly once. Ordered interleaved so the grid looks varied.
export const galleryItems = (() => {
  const order = ['birthday', 'custom', 'wedding', 'baby-shower', 'corporate', 'festive', 'desserts']
  const items = []
  // Interleave all images across categories for a varied "All Cakes" view.
  let idx = 0
  let added = true
  while (added) {
    added = false
    for (const k of order) {
      const src = cakeImages[k][idx]
      if (src) {
        items.push({ id: `${k}-${idx}`, src, category: k, label: categoryLabels[k] })
        added = true
      }
    }
    idx += 1
  }
  return items
})()
