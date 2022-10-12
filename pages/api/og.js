import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler() {
  return new ImageResponse({
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        fontSize: 120,
      },
      children: 'Hello World',
    },
  })
}
