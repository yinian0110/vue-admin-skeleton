/**
 * @param {Route|*} to
 * @param {Route|*} from
 * @param {x,y} savedPosition
 */
export default function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  const position = {};
  if (to.hash) {
    position.selector = to.hash;
  }

  // noinspection JSUnresolvedVariable
  if (to.matched.some(match => match.meta.scrollToTop)) {
    position.x = 0;
    position.y = 0;
  }
  return position;
}
