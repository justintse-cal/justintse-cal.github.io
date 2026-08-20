/**
 * Central Project Data Source
 * Projects assigned to themes: 'Design', 'Research', 'Applications'
 */

export const PROJECTS = [
  {
    id: 'project-PA',
    title: 'Evaluating PurpleAir Sensors: Do They Accurately Reflect Ambient Air Temperature?',
    shortTitle: 'PurpleAir Sensor Calibration',
    theme: 'Research',
    description: 'As low-cost devices, PurpleAir sensors offer vast opportunistic sensing capabilities due to their widespread deployment ' +
    'This project evaluates PurpleAir temperature measurements and introduces a multiple linear regression model for calibration, ' +
    'advancing hyperlocal heat mapping and multi-hazard vulnerability assessments.',
    image: '/img/evaluatePA.jpg',
    images: ['/img/calibrated.jpg'],
    links: {
      paper: 'https://www.mdpi.com/1424-8220/25/10/3044',
    }
  },
  {
    id: 'BAAMAP',
    title: 'Bay Area Community Air Quality Map',
    shortTitle: 'Bay Area Air Quality Map',
    theme: 'Research',
    description: 'Motivated by the concept of digital twins, we developed an ArcGIS-based application to advance community-centric, real-time air quality monitoring using a spatial-dependent and explainable machine learning method.',
    image: '/img/BAAQMAP.jpg',
    images: ['/img/baaqmap1.jpg', '/img/baaqmap2.jpg', '/img/aqmethod.jpg'],
    links: {
      website: ''
    }
  },
  {
    id: 'park-equity',
    title: 'San Joes Park Equity Model',
    shortTitle: 'San Jose Park Equity Model',
    theme: 'Research',
    description: 'Motivated by the concept of digital twins, we developed an ArcGIS-based application to advance community-centric, real-time air quality monitoring using a spatial-dependent and explainable machine learning method.',
    image: '/img/Parks.jpeg',
    images: ['/img/ParkScenario.jpg', '/img/PQIworkflow.jpg', '/img/FME.jpg'],
    links: {
      website: ''
    }
  },
  {
    id: 'thesis-site-analysis',
    title: 'The Toxic Landscape of Denton',
    shortTitle: 'Toxic Landscape of Denton',
    theme: 'Design',
    description: 'This site analysis aims to highlight how extreme heat and ' +
     'poor air quality inevitably impacts the City of Denton as the Metroplex expands, ' +
     'prompting the need for a better management plan to mitigate these environmental stressors.',
    image: '/img/metroplex.jpg',
    images: ['/img/thesis_poster.jpg'],
    links: {
      poster: 'pdf/thesis_pinup.pdf'
    }
  },
  {
    id: 'project-2',
    title: 'Yeoncheon Imjin Biosphere Reserve Vision Plan',
    shortTitle: 'Yeoncheon Biosphere Reserve',
    theme: 'Design',
    description: 'Co-developed a vision plan for the Biosphere Reserve that notes areas best developed for sustainable economies and “hubs” for ecological and cultural tourism, areas most critical for environmental protection, actions to reduce disturbance to endangered species, and resolution of conflicts between recreation and endangered species.',
    image: '/img/Yeoncheon.jpg',
    images: ['/img/Yeoncheon.jpg'],
    links: {
      report: '/pdf/VisionPlan.pdf',
      slides: '/pdf/Biosphere_slides.pdf',
    }
  },
  {
    id: 'APA',
    title: 'Reclaiming Nicollect: the People and the Place',
    shortTitle: 'Reclaiming Nicollet',
    theme: 'Design',
    description: 'The Reclaiming Nicollet project seeks to reconnect 10 acres of land to the existing surrounding community and for future community members. This report synthesizes background analysis and design concepts of Reclaiming Nicollet for the APA Student Design Competition. Using the provided materials and additional research, our team thought through a collaborative and research-driven approach to address the community’s evolving needs in a comprehensive site design. This project is meant to go beyond redeveloping the space.',
    image: '/img/APA.jpg',
    images: ['/img/street_section.jpg', '/img/programming.jpg'],
    links: {
      report: '/pdf/Reclaiming_Nicollet.pdf',
    }
  },
  {
    id: 'LA200',
    title: 'Scenic Imagination: Strawberry Creek & Faculty Glade',
    shortTitle: 'Scenic Imagination',
    theme: 'Design',
    description: 'My first studio at UC Berkeley.',
    image: '/img/LA200.jpg',
    images: ['/img/explanatory_graphics.jpg', '/img/LA200.jpg', '/img/section1.jpg', '/img/section2.jpg'],
    links: {
      slides: '/pdf/LA200.pdf',
    }
  },
  {
    id: 'lcz',
    title: 'GIS-Based Local Climate Zone Mapping: A Case Study of Denton County, TX',
    shortTitle: 'Local Climate Zone Mapping',
    theme: 'Research',
    description: 'Authored an ArcPy script to classify Local Climate Zones in Denton County using LiDAR, building footprint, and land cover data.',
    image: '/img/newLCZ.jpg',
    images: ['/img/LCZ.jpg', '/img/LCZprocess.jpg', '/img/post_processing.jpg'],
    links: {
      slides: '/pdf/LCZGIS.pdf',
      video: 'https://escholarship.org/uc/item/0fv7k4d5#supplemental',
      github: 'https://github.com/justintse-cal/Local-Climate-Zone',
    }
  },
  {
    id: 'C188',
    title: 'GIS-Based California Tiger Salamander Habitat Suitability and Corridor Analysis in Central Valley, CA',
    shortTitle: 'Tiger Salamander Habitat Analysis',
    theme: 'Research',
    description: 'The final group project of my first GIS class at UC Berkeley.',
    image: '/img/C188.jpg',
    images: ['/img/C188.jpg'],
    links: {
      poster: 'pdf/C188poster.pdf',
    }
  },
  {
    id: 'LA221',
    title: 'Correlation, Seasonality, and Trends of Temperature and Aerosol Optical Depth',
    shortTitle: 'Temperature & AOD Trends',
    theme: 'Research',
    description: 'Using satelite products to analyze seasonal trends and correlations between temperature and air quality',
    image: '/img/LA221.jpg',
    images: ['/img/LA221.jpg'],
    links: {
      poster: 'pdf/LA221poster.pdf',
    }
  },
  {
    id: 'random-route',
    title: 'Hong Kong Random Route',
    shortTitle: 'HK Random Route',
    theme: 'Applications',
    description: 'A random pedestrian route generator for Hong Kong.',
    image: '/img/route.png',
    images: ['/img/light_web.png', '/img/dark_mobile.png'],
    links: {
      website: 'https://hk-random-route.vercel.app/'
    }
  },
  {
    id: 'breathing-earth',
    title: 'Breathing Earth Generator',
    shortTitle: 'Breathing Earth Generator',
    theme: 'Applications',
    description: 'An Google Earth Engine app that reveals how the Earth breathes.',
    image: '/img/ndvi.gif',
    images: ['/img/ndvi-gee.jpg'],
    links: {
      website: 'https://ee-tsejustin-geo4dev.projects.earthengine.app/view/breathing-earth-generator'
    }
  },
  {
    id: 'fire-impact-explorer',
    title: 'Fire Impact Explorer',
    shortTitle: 'Fire Impact Explorer',
    theme: 'Applications',
    description: 'An Google Earth Engine app for assessing burn severity and estimating the socio-economic impacts of fire events.',
    image: '/img/FireImpactRaster.jpg',
    images: ['/img/FireImpactExplorer.jpg'],
    links: {
      website: 'https://ee-tsejustin-geo4dev.projects.earthengine.app/view/fire-impact-explorer'
    }
  },
];

/**
 * Returns projects filtered by selected theme name.
 */
export function getProjectsByTheme(projects, themeName) {
  if (!projects || !Array.isArray(projects)) return [];
  if (!themeName) return [];
  return projects.filter(
    (proj) => proj.theme && proj.theme.trim().toLowerCase() === themeName.trim().toLowerCase()
  );
}

/**
 * Normalizes any Swiper slide index (including loop offsets or negative values)
 * to a valid project index in the range [0, projects.length - 1].
 * Works correctly for any projects array length >= 1.
 */
export function getActiveProject(projects, rawIndex) {
  if (!projects || projects.length === 0) return null;
  const normalizedIndex = ((rawIndex % projects.length) + projects.length) % projects.length;
  return projects[normalizedIndex];
}

/**
 * Link pill configuration definitions
 */
export const LINK_LABELS = {
  report: 'Report',
  slides: 'Slides',
  website: 'Website',
  article: 'Article',
  poster: 'Poster',
  github: 'GitHub',
  paper: 'Paper'
};

/**
 * Returns an array of valid link objects { key, label, url }
 * for a given links object, filtering out missing or falsy values.
 */
export function filterExistingLinks(links = {}) {
  if (!links) return [];
  return Object.entries(links)
    .filter(([key, url]) => Boolean(url) && Boolean(LINK_LABELS[key]))
    .map(([key, url]) => ({
      key,
      label: LINK_LABELS[key],
      url
    }));
}
