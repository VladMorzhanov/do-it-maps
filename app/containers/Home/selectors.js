import {createSelector} from 'reselect'

/**
 * Direct selector to the home state domain
 */
const selectHomeDomain = (state) => state.get('home')

/**
 * Other specific selectors
 */

/**
 * Default selector used by Home
 */

const makeSelectHome = () => createSelector(
  selectHomeDomain,
  (substate) => substate.toJS()
)

const makeSelectMarkers = () => createSelector(
  selectHomeDomain,
  (substate) => substate.get('markers').toJS()
)

const makeSelectUser = () => createSelector(
  selectHomeDomain,
  (substate) => substate.get('user').toJS()
)

const makeSelectMapDataType = () => createSelector(
  selectHomeDomain,
  (substate) => substate.get('mapDataType')
)

const makeSelectPopularType = () => createSelector(
  selectHomeDomain,
  (substate) => substate.get('popularType')
)

const makeSelectZoom = () => createSelector(
  selectHomeDomain,
  (substate) => substate.get('zoom')
)

const makeSelectCenter = () => createSelector(
  selectHomeDomain,
  (substate) => substate.get('center')
)

export default makeSelectHome
export {
  selectHomeDomain,
  makeSelectMarkers,
  makeSelectHome,
  makeSelectMapDataType,
  makeSelectPopularType,
  makeSelectUser,
  makeSelectZoom,
  makeSelectCenter
}
