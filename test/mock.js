import immutable from 'seamless-immutable'

export const socket = {
  connected: false,
  connect: true,
  endTime: null,
  presenter: null,
  sessionId: null,
  siteId: null,
  socketId: null,
  startTime: null,
  subscriber: {},
}

export const user = {
  type: 'Person',
  id: 'anon',
  name: 'foo',
  gender: 'bar',
}
export const user2 = {
  type: 'Person',
  id: 'auth',
  name: 'Auth User',
}

export const props = {
  item: { id: 'bar' },
  title: 'strawberry',
}
export const collection = {
  a1: {
    id: 'a1',
    type: 'Sample',
    title: 'Rubish',
    creator: {
      anon: user,
      auth: user2,
    },
  },
  a2: {
    id: 'a2',
    type: 'Sample',
    creator: {
      auth: user2,
    },
  },
  a3: {
    id: 'a3',
    type: 'Sample',
    title: 'Favorites',
    creator: {
      anon: user,
    },
  },
}
export const state = immutable({
  collection,
  user,
  socket,
})
export const change = { presenter: 'kai', sessionId: 'abc123' }
export const state2 = state.set('socket', state.socket.merge(change))
export const offices = {
  main: [ 'dlheadquarters' ],
  us: [
    'ariz',
    'bostonNE',
    'chicago',
    'southeast',
  ],
  world: [ 'pacificrim', 'europe', 'canada' ],
}
export const world = [
  { id: 'pacificrim',
    title: 'Australia, New Zealand, Singapore Representative',
    type: 'Showroom' },
  { id: 'europe', title: 'European Representative', type: 'Showroom' },
  { id: 'canada', title: 'Toronto Showroom', type: 'Showroom' },
]
export const officesFull = {
  main: [ { id: 'dlheadquarters',
       title: 'Corporate Headquarters',
       type: 'Showroom' } ],
  us: [ { id: 'ariz', title: 'Arizona Showroom', type: 'Showroom' },
     { id: 'bostonNE',
       title: 'Boston and Northeast US',
       type: 'Showroom' },
     { id: 'chicago', title: 'Chicago Showroom', type: 'Showroom' },
     { id: 'southeast',
       title: 'Southeastern US, Ohio, Kentucky, Indiana Representative',
       type: 'Showroom' } ],
  world: [
    { id: 'pacificrim',
       title: 'Australia, New Zealand, Singapore Representative',
       type: 'Showroom' },
     { id: 'europe',
       title: 'European Representative',
       type: 'Showroom' },
     { id: 'canada', title: 'Toronto Showroom', type: 'Showroom' },
  ],
}
