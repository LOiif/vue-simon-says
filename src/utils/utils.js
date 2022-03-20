export default class Utils {
  static randomNum(to, from = 1) {
    return Math.floor((Math.random() * to) + from)
  }

  static playSound(name) {
    let path = require(`@/assets/sounds/${name}.wav`)
    const audio = new Audio(path);
    audio.play()
  }

  static lightSections(el, duration) {
    setTimeout(() => {
      el.classList.add('active');
    }, 1)
    setTimeout(() => {
      el.classList.remove('active');
    }, duration)
  }
}
