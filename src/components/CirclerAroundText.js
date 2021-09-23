import React from 'react';
import { useD3 } from '../hooks/useD3';
import { displayPie, textArround } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'
import * as d3 from 'd3';
import { useFontSizeContext } from '../utils/fontSizeContext'

export default function CirclerAroundText({setSvg}) {

    const { data } = useDataContext()
    const { fontSize } = useFontSizeContext()
    const [zoom , setZoom] = React.useState(1) 

    const ref = useD3(
        (svg) => {
            displayPie(svg, data , zoom)
            textArround(svg, data, fontSize , zoom )
            setSvg(svg)

            svg.call(d3.zoom().on("zoom", (event) => {
                console.log("I'm zooming")
                //svg.attr("transform", event.transform)
             //   let innerRadius = radius * (event.transform.k); // d3.event.scale in V3
                console.log({ event })
                setZoom(event.transform.k)
                /*displayPie(svg, data, innerRadius);
                textArround(svg, data, fontSize, innerRadius); */

            }))
        },
        [data, fontSize , zoom]
    );
    return (
        <svg
            ref={ref}
        />
    );
}
