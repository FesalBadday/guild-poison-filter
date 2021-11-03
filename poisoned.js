const poisoned = array => {
  return array.filter(isPoisoned => isPoisoned.poisoned)
}

module.exports = poisoned