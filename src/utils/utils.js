export default class Utils {
  static randomNum(to, from = 1) {
    return Math.floor((Math.random() * to) + from)
  }
}
