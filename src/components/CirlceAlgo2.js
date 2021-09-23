import React from 'react';
import { useD3 } from '../hooks/useD3';
import * as d3 from 'd3';
import { displayPie, textAlgo2 } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'
import { useFontSizeContext } from '../utils/fontSizeContext'

export default function CirlceAlgo2({setSvg}) {
    const { data } = useDataContext()
    const { fontSize } = useFontSizeContext()
    const [zoom, setZoom] = React.useState(1) 
    const ref = useD3(
        (svg) => {
            displayPie(svg, data , zoom)
            textAlgo2(svg, data, fontSize , zoom )
            setSvg(svg)
            svg.call(d3.zoom().on("zoom", (event) => {
                console.log("I'm zooming")
                //svg.attr("transform", event.transform)
                setZoom(event.transform.k)// d3.event.scale in V3
            }))
        },
        [data, fontSize, zoom]
    );
    return (
        <svg
            ref={ref}
        />
    );
}