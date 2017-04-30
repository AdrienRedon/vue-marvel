import { expect } from 'chai'
import store from '@/store/heroes'

// destructure assign mutations
const { HEROES_BOOKMARK, HEROES_UNBOOKMARK } = store.mutations
// mock data
const hero = {
  id: 1,
  name: 'deadpool'
}
const other = {
  id: 2,
  name: 'spiderman'
}
const noHero = {
  id: 3,
  name: 'balavoine'
}
// mock state
const state = {
  nbBookmarked: 0,
  heroes: [
    hero,
    other
  ]
}

describe('mutations', () => {
  it('HEROES_BOOKMARK', () => {
    // apply mutation
    HEROES_BOOKMARK(state, hero)
    // assert result
    expect(state.nbBookmarked).to.equal(1)

    // apply mutation
    HEROES_BOOKMARK(state, hero)
    // assert result
    expect(state.nbBookmarked).to.equal(1)

    // apply mutation
    HEROES_BOOKMARK(state, noHero)
    // assert result
    expect(state.nbBookmarked).to.equal(1)
  })

  it('HEROES_UNBOOKMARK', () => {
    // apply mutation
    HEROES_UNBOOKMARK(state, noHero)
    // assert result
    expect(state.nbBookmarked).to.equal(1)

    // apply mutation
    HEROES_UNBOOKMARK(state, other)
    // asset result
    expect(state.nbBookmarked).to.equal(1)

    // apply mutation
    HEROES_UNBOOKMARK(state, hero)
    // assert result
    expect(state.nbBookmarked).to.equal(0)

    // apply mutation
    HEROES_UNBOOKMARK(state, hero)
    // assert result
    expect(state.nbBookmarked).to.equal(0)
  })
})
