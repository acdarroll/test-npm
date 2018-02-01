module.exports = {
  wrap (string, wrapper) {
    return wrapper + string + wrapper;
  },
  split (string, split) {
    let letters = string.split("")
    let format = ""
    letters.forEach((letter, i) => {
      if(i < letters.length - 1)
      format += letter + split
    })
    return format;
  }
}