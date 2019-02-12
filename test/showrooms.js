import { keyBy } from 'lodash'

export const offices = [
  {
    id: 'rgheadquarters',
    title: 'Corporate Headquarters',
    type: 'Showroom',
  },
  {
    id: 'NYCshowroom',
    title: 'New York Showroom',
    type: 'Showroom',
  },
  {
    id: 'dlheadquarters',
    title: 'Corporate Headquarters',
    type: 'Showroom',
  },
  {
    id: 'ariz',
    title: 'Arizona Showroom',
    type: 'Showroom',
  },
  {
    id: 'bostonNE',
    title: 'Boston and Northeast US',
    type: 'Showroom',
  },
  {
    id: 'chicago',
    title: 'Chicago Showroom',
    type: 'Showroom',
  },
  {
    id: 'mountainStates',
    title: 'Colorado and Mountain States Showroom',
    type: 'Showroom',
  },
  {
    id: 'connecticutEtc',
    title: 'Connecticut, Rhode Island, Long Island & Westchester Representative',
    type: 'Showroom',
  },
  {
    id: 'dallas',
    title: 'Dallas Showroom',
    type: 'Showroom',
  },
  {
    id: 'washingtonDC',
    title: 'DC Showroom',
    type: 'Showroom',
  },
  {
    id: 'florida',
    title: 'Florida Showroom',
    type: 'Showroom',
  },
  {
    id: 'houston',
    title: 'Houston Showroom',
    type: 'Showroom',
  },
  {
    id: 'midwest',
    title: 'Iowa, Kansas, Minnesota, Missouri, Nebraska, North Dakota, South Dakota Representative',
    type: 'Showroom',
  },
  {
    id: 'laWestCoast',
    title: 'Los Angeles Showroom',
    type: 'Showroom',
  },
  {
    id: 'newjersey',
    title: 'Northern New Jersey Representative',
    type: 'Showroom',
  },
  {
    id: 'midatlantic',
    title: 'Pennsylvania, Southern NJ, Delaware Showroom',
    type: 'Showroom',
  },
  {
    id: 'sanfranWestCoast',
    title: 'San Francisco Showroom',
    type: 'Showroom',
  },
  {
    id: 'southeast',
    title: 'Southeastern US, Ohio, Kentucky, Indiana Representative',
    type: 'Showroom',
  },
  {
    id: 'northwest',
    title: 'Northwest (US & Canada) Representative',
    type: 'Showroom',
  },
  {
    id: 'pacificrim',
    title: 'Australia, New Zealand, Singapore Representative',
    type: 'Showroom',
  },
  {
    id: 'europe',
    title: 'European Representative',
    type: 'Showroom',
  },
  {
    id: 'canada',
    title: 'Toronto Showroom',
    type: 'Showroom',
  },
]
const showroomIndex = keyBy(offices, 'id')

export default showroomIndex
