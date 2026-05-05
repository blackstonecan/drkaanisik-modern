import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react'

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none'

type RevealProps = HTMLMotionProps<'div'> & {
  direction?: RevealDirection
  delay?: number
  duration?: number
  distance?: number
  amount?: number
  once?: boolean
}

const offsetFor = (dir: RevealDirection, d: number) => {
  switch (dir) {
    case 'up':
      return { y: d }
    case 'down':
      return { y: -d }
    case 'left':
      return { x: d }
    case 'right':
      return { x: -d }
    default:
      return {}
  }
}

export function Reveal({
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 24,
  amount = 0.2,
  once = true,
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion()
  const initial = reduce ? { opacity: 1 } : { opacity: 0, ...offsetFor(direction, distance) }
  const animate = { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
