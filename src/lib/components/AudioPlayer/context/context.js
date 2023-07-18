import { getContext, setContext } from "svelte"

const CONTEXT_KEY = Symbol()

export const setAudioContext = context => setContext(CONTEXT_KEY, context)
export const getAudioContext = () => {
  const context = getContext(CONTEXT_KEY)

  if (!context) {
    throw new Error(
      "getAudioContext should be used in AudioPlayer`s child component"
    )
  }

  return context
}
