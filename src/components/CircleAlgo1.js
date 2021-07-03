import React from 'react';
import { useD3 } from '../hooks/useD3';
import { displayPie, textAlgo1 } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'
import { useFontSizeContext } from '../utils/fontSizeContext'
import {removeOverlaps} from '../utils/removeOverlaps'

export default function CircleAlgo1({doRemoveOverlap , set}) {
    const { data } = useDataContext()
    const { fontSize } = useFontSizeContext()
    const ref = useD3(
        (svg) => {
            displayPie(svg, data)
            textAlgo1(svg, data, fontSize)

            if(doRemoveOverlap){
                removeOverlaps(svg)
                set(false)
            }
        },
        [data, fontSize ,doRemoveOverlap]
    );
    return (
        <svg
            ref={ref}
        />
    );
}

