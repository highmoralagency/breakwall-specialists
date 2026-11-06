export type ProjectPhoto = {
  src: string
  alt: string
  caption: string
  tag?: 'Before' | 'After'
}

export type Project = {
  id: string
  title: string
  category: string
  photos: ProjectPhoto[]
}

export const projects: Project[] = [
  {
    id: 'full-shoreline',
    title: 'Complete Shoreline Rebuild',
    category: 'Wall, Deflector, Dock, Lifts & Pavers',
    photos: [
      {
        src: '/projects/full-shoreline/1.webp',
        alt: 'Paver deck leading to a dock with a jet ski raised on a lift',
        caption: 'Old concrete and rock replaced with a steel wall, wave deflector and 60 ft dock.',
      },
      {
        src: '/projects/full-shoreline/2.webp',
        alt: 'Dock framed by planters at the edge of a paver deck',
        caption: 'Trim added to the back of the wall for a clean, streamlined finish.',
      },
      {
        src: '/projects/full-shoreline/3.webp',
        alt: 'Paver deck seating area with Adirondack chairs beside the lake',
        caption: 'Paver deck with proper drainage and virtually maintenance-free seating.',
      },
      {
        src: '/projects/full-shoreline/4.webp',
        alt: 'Dock running out from the shoreline with a jet ski on a lift',
        caption: 'Twin jet ski lifts set on a 12 ft finger dock to keep the main dock open.',
      },
      {
        src: '/projects/full-shoreline/5.webp',
        alt: 'Steel sheet pile wall meeting the dock at the corner of the property',
        caption: 'New steel sheet pile wall with proper drainage behind it.',
      },
      {
        src: '/projects/full-shoreline/6.webp',
        alt: 'Composite dock decking meeting the steel wall and paver patio',
        caption: 'Bump poles and cleats on the west side for visiting boats and jet skis.',
      },
      {
        src: '/projects/full-shoreline/7.webp',
        alt: 'Lawn, paver deck and dock looking out to the open lake',
        caption: 'A 6 x 12 platform at the end of the dock for unobstructed sunset views.',
      },
    ],
  },
  {
    id: 'wall-dock-lift',
    title: 'Steel Wall, Dock & Boat Lift',
    category: 'Full Waterfront Upgrade',
    photos: [
      {
        src: '/projects/wall-dock-lift/1.webp',
        alt: 'Fishing boat raised on a lift beside a long dock',
        caption: 'Armour stone and concrete replaced with a steel sheet pile wall and 60 ft dock.',
      },
      {
        src: '/projects/wall-dock-lift/2.webp',
        alt: 'Long composite dock with a boat on a lift and aluminum stairs',
        caption: '10,000 lb boat lift on the east side for fast, easy access to the lake.',
      },
      {
        src: '/projects/wall-dock-lift/3.webp',
        alt: 'Paver deck with red Adirondack chairs overlooking the dock',
        caption: 'Paver deck on the land side that will never rot like a wooden deck.',
      },
    ],
  },
]
