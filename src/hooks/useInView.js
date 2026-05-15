import { useEffect, useRef, useState } from 'react'

/**
 * @param {object} options
 * @param {string} [options.rootMargin]
 * @param {number|number[]} [options.threshold]
 * @param {boolean} [options.once]
 */
export function useInView({ rootMargin = '0px 0px -12% 0px', threshold = 0.12, once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const doneRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (once && doneRef.current) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) {
              doneRef.current = true
              obs.disconnect()
            }
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { rootMargin, threshold },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin, threshold, once])

  return [ref, inView]
}
