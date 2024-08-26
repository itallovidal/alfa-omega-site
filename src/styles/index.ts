import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
    theme: {
        colors: {
            white: '#fff',
            minhaCor: '#121214'
        } as const
    }
})

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    '*:link, *:active':{
        textDecoration: 'none',
    },

    main:{
        opacity: 0,
        transform: 'translateY(100px)',
        // animation: `${show} 500ms forwards`
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$gray900',
        color: '$gray100'
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto',
        fontWeight: 400
    },

    picture: {
        display: 'grid',
        placeItems: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',

        img: {
            maxWidth: '100%',
            maxHeight: '100%',
        }
    }
})