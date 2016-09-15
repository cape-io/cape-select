import immutable from 'seamless-immutable'

export const state = {
  socket: immutable({
    connected: false,
    connect: true,
    endTime: null,
    presenter: null,
    sessionId: null,
    siteId: null,
    socketId: null,
    startTime: null,
    subscriber: {},
  }),
}
export const change = { presenter: 'kai', sessionId: 'abc123' }
export const state2 = { socket: defaultState.merge(change) }

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
export const state = immutable({
  user,
})
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
