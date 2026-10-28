export type ProjectPhoto = {
  src: string
  caption: string
  alt: string
  tag?: 'Before' | 'After'
}

export type Project = {
  id: string
  category: string
  title: string
  photos: ProjectPhoto[]
}

const photo = (
  id: string,
  n: number,
  caption: string,
  alt: string,
  tag?: ProjectPhoto['tag'],
): ProjectPhoto => ({ src: `/projects/${id}-${n}.webp`, caption, alt, tag })

export const projects: Project[] = [
  {
    id: 'transformation',
    category: 'Full Property',
    title: 'Complete Waterfront Transformation',
    photos: [
      photo('transformation', 1, 'Paver patio steps down to the dock', 'Paver patio with steps leading to a composite dock and PWC lift'),
      photo('transformation', 2, 'Dock leading out to the PWC lifts', 'Composite dock extending to a personal watercraft on a lift'),
      photo('transformation', 3, 'Lakeside lounge on the new patio', 'Paver patio with Muskoka chairs and a fire table by the lake'),
      photo('transformation', 4, 'Dock and lift system from the water', 'Composite dock and PWC lifts in front of a lakefront home'),
      photo('transformation', 5, 'Steel wall with composite dock', 'Corner of a steel breakwall meeting a composite dock'),
      photo('transformation', 6, 'Steel wall meets the paver deck', 'Composite dock running along a steel breakwall below a patio'),
    ],
  },
  {
    id: 'dock-reskin',
    category: 'Docks',
    title: 'Dock Resurfacing',
    photos: [
      photo('dock-reskin', 1, 'Weathered wood decking', 'Old weathered wooden dock before resurfacing', 'Before'),
      photo('dock-reskin', 2, 'New composite surface and ladder', 'Same dock resurfaced with grey composite decking', 'After'),
    ],
  },
  {
    id: 'steel-breakwall',
    category: 'Breakwalls',
    title: 'Steel Breakwall & Wave Deflector',
    photos: [
      photo('steel-breakwall', 1, 'Finished wall with wave deflector', 'Completed steel breakwall with wave deflector along the shoreline'),
      photo('steel-breakwall', 2, 'Boat slip wall underway', 'Steel sheet piles forming a boat slip during construction'),
      photo('steel-breakwall', 3, 'Sheet pile return wall', 'Steel sheet pile return wall set among shoreline rock'),
      photo('steel-breakwall', 4, 'Trenching for the new wall', 'Excavator trenching beside a new steel wall cap'),
      photo('steel-breakwall', 5, 'Excavation along the shoreline', 'Excavator digging behind a new steel breakwall'),
      photo('steel-breakwall', 6, 'Corner return set in place', 'Steel breakwall corner return in an excavated shoreline'),
    ],
  },
  {
    id: 'boathouse-lifts',
    category: 'Lifts',
    title: 'Boathouse Lift Installation',
    photos: [
      photo('boathouse-lifts', 1, 'Bowrider raised on its lift', 'Bowrider boat raised on a lift inside a boathouse'),
      photo('boathouse-lifts', 2, 'Tender stored above the water', 'Inflatable tender raised on a lift inside a boathouse'),
      photo('boathouse-lifts', 3, 'Slips and lifts during the build', 'Boathouse slips and lift posts under construction'),
      photo('boathouse-lifts', 4, 'Lift posts ready for watercraft', 'Lift posts and composite walkways inside a boathouse'),
      photo('boathouse-lifts', 5, 'Full boathouse lift layout', 'Wide view of multiple lifts in a boathouse'),
      photo('boathouse-lifts', 6, 'Slip view out to the water', 'Composite slip with lift rails looking out to the water'),
    ],
  },
  {
    id: 'lift-installs',
    category: 'Lifts',
    title: 'Dock-Mounted Lifts',
    photos: [
      photo('lift-installs', 1, 'Lift cradle beside the dock', 'Aluminum lift cradle mounted beside a composite dock'),
      photo('lift-installs', 2, 'Lift installed off the dock end', 'Lift platform installed at the end of a dock'),
      photo('lift-installs', 3, 'Motorized lift drive', 'Close-up of a motorized lift drive on a dock'),
      photo('lift-installs', 4, 'Lift set along a steel wall', 'Lift cradle installed beside a dock along a steel wall'),
      photo('lift-installs', 5, 'Dock and lift posts from shore', 'Composite dock with several lift posts in a canal'),
    ],
  },
  {
    id: 'composite-docks',
    category: 'Docks',
    title: 'Composite Docks & PWC Lifts',
    photos: [
      photo('floating-docks', 1, 'Straight run into open water', 'Composite dock extending into open lake water'),
      photo('floating-docks', 2, 'Dock platform with boat lift', 'Composite dock platform with a boat lift'),
      photo('floating-docks', 3, 'Wide platform for lounging', 'Wide composite dock platform beside a lift'),
      photo('floating-docks', 4, 'Storage bench on the platform', 'Composite dock platform with storage bench and paddleboard'),
      photo('floating-docks', 5, 'Row of PWC lifts offshore', 'Personal watercraft on lifts offshore'),
    ],
  },
  {
    id: 'dock-lift-lounge',
    category: 'Full Property',
    title: 'Dock, Boat Lift & Lakeside Lounge',
    photos: [
      photo('dock-lift-lounge', 1, 'Lounge deck overlooking the dock', 'Red Muskoka chairs on a deck overlooking a dock'),
      photo('dock-lift-lounge', 2, 'Boat secured on its lift', 'Boat raised on a lift beside a dock'),
      photo('dock-lift-lounge', 3, 'Dock with swim stairs', 'Composite dock with swim stairs and a boat on a lift'),
    ],
  },
  {
    id: 'paver-docks',
    category: 'Paver Decks',
    title: 'Paver Walkway & Dock',
    photos: [
      photo('paver-docks', 1, 'Paver walkway to the dock', 'Paver walkway connecting to a composite dock'),
      photo('paver-docks', 2, 'Paver path along the shoreline', 'Paver path running along the shoreline to a dock'),
      photo('paver-docks', 3, 'Dock with twin PWC lifts', 'Composite dock with two personal watercraft on lifts'),
      photo('paver-docks', 4, 'Dock with boat lift', 'Composite dock with a boat lift at the end'),
      photo('paver-docks', 5, 'Swim stairs off the platform', 'Dock platform with metal swim stairs'),
      photo('paver-docks', 6, 'Lifts lined along the dock', 'Composite dock lined with PWC lifts'),
    ],
  },
  {
    id: 'platform-builds',
    category: 'Paver Decks',
    title: 'Shoreline Platform Builds',
    photos: [
      photo('paver-deck-builds', 1, 'Finished platform on the shore', 'Finished paver platform set on a rocky shoreline'),
      photo('paver-deck-builds', 2, 'Platform set at the water', 'Paver platform placed at the edge of the water'),
      photo('paver-deck-builds', 3, 'Steel frame and surface', 'Steel framed platform with paver surface during the build'),
      photo('paver-deck-builds', 4, 'Building through the winter', 'Platform framing installed on a snowy shoreline'),
    ],
  },
  {
    id: 'crew',
    category: 'On Site',
    title: 'Our Crew at Work',
    photos: [
      photo('crew', 1, 'Work barge on the lake', 'Work barge with excavator on open water'),
      photo('crew', 2, 'Barge staged at the shoreline', 'Work barge with excavator moored at a shoreline'),
      photo('crew', 3, 'Welding through the winter', 'Welder working on a steel wall beside icy water'),
      photo('crew', 4, 'Welding the wall cap', 'Crew member welding a steel breakwall cap'),
      photo('crew', 5, 'Setting a new wall', 'Crew member working on a steel breakwall'),
      photo('crew', 6, 'Fastening dock framing', 'Crew member fastening dock framing above the water'),
      photo('crew', 7, 'Fabricating in our shop', 'Steel lift frame being fabricated in the shop'),
      photo('crew', 8, 'Lift frames built in-house', 'Aluminum lift frames being assembled in the shop'),
    ],
  },
]
