import {AnimationConfig} from '../../../interfaces'

const animations = {
  slideInBlurredTop: {
    keyframes: [
      {
        transform: 'translateY(-1000px) scaleY(2.5) scaleX(0.2)',
        transformOrigin: '50% 0%',
        filter: 'blur(40px)',
        opacity: 0,
      },
      {
        transform: 'translateY(0) scaleY(1) scaleX(1)',
        transformOrigin: '50% 50%',
        filter: 'blur(0)',
        opacity: 1,
      },
    ],
    options: {
      duration: 600,
      easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)', // tipo de easing
      fill: 'both',
    },
  },
  slideInBlurredBottom: {
    keyframes: [
      {
        transform: 'translateY(2000px) scaleY(2.5) scaleX(0.2)',
        transformOrigin: '50% 100%',
        filter: 'blur(40px)',
        opacity: 0,
      },
      {
        transform: 'translateY(0) scaleY(1) scaleX(1)',
        transformOrigin: '50% 50%',
        filter: 'blur(0)',
        opacity: 1,
      },
    ],
    options: {
      duration: 600,
      easing: 'cubic-bezier(0.230, 1.000, 0.320, 1.000)', // tipo de easing
      fill: 'both',
    },
  },
  slideInTop: {
    keyframes: [
      {
        transform: 'translateY(-1000px)',
        opacity: 0,
      },
      {
        transform: 'translateY(0)',
        opacity: 1,
      },
    ],
    options: {
      duration: 500,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fill: 'both',
    },
  },
  slideInBckCenter: {
    keyframes: [
      {
        transform: 'translateZ(600px)',
        opacity: 0,
      },
      {
        transform: 'translateZ(0)',
        opacity: 1,
      },
    ],
    options: {
      duration: 700,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fill: 'both',
    },
  },
  scaleInCenter: {
    keyframes: [
      {
        filter: 'blur(1)',
        transform: 'scale(0)',
        opacity: 0,
      },
      {
        filter: 'blur(0)',
        transform: 'scale(1)',
        opacity: 1,
      },
    ],
    options: {
      duration: 500,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fill: 'both',
    },
  },
} satisfies Record<string, AnimationConfig>

type Animations = typeof animations

export const animate = <T extends HTMLElement, K extends keyof Animations>(
  element: T,
  animation: K
) => {
  const {keyframes, options} = animations[animation]
  return element.animate(keyframes, options)
}
