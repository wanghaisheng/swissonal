export function startAnimatedTyping(
  phrases: string[],
  currentPhrase: Ref<string>,
  currentPhraseIndex: Ref<number>,
  currentCharIndex: Ref<number>,
  showBall: Ref<boolean>,
  typingSpeed: number = 200,
  deletingSpeed: number = 80,
  delayBetweenPhrases: number = 2000,
) {
  let shouldStop = false

  return type(typingSpeed, deletingSpeed, delayBetweenPhrases)

  function type(
    typingSpeed: number = 200,
    deletingSpeed: number = 80,
    delayBetweenPhrases: number = 2000,
  ) {
    if (!shouldStop) {
      if (currentCharIndex.value < phrases[currentPhraseIndex.value]!.length) {
        currentPhrase.value += phrases[currentPhraseIndex.value]!.charAt(currentCharIndex.value)
        currentCharIndex.value++
        setTimeout(
          () => type(typingSpeed, deletingSpeed, delayBetweenPhrases),
          typingSpeed,
        )
      }
      else {
        showBall.value = false
        setTimeout(() => erase(typingSpeed, deletingSpeed, delayBetweenPhrases), delayBetweenPhrases)
      }
    }

    return () => {
      shouldStop = true
    }
  }

  function erase(
    typingSpeed: number = 200,
    deletingSpeed: number = 80,
    delayBetweenPhrases: number = 2000,
  ) {
    if (!shouldStop) {
      if (currentCharIndex.value > 0) {
        currentPhrase.value = currentPhrase.value.slice(0, -1)
        currentCharIndex.value--
        setTimeout(() => erase(typingSpeed, deletingSpeed), deletingSpeed)
      }
      else {
        showBall.value = true
        currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length
        setTimeout(
          () => type(typingSpeed, deletingSpeed, delayBetweenPhrases),
          typingSpeed,
        )
      }
    }
  }
}
