import React from 'react'
import { useD3 } from '../hooks/useD3'
import { displayPie, labelList } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'
import * as d3 from 'd3';
import { useFontSizeContext } from '../utils/fontSizeContext'


export default function CircleLabelList({setSvg }) {
    const { fontSize } = useFontSizeContext()
    const { data } = useDataContext()
    const [zoom, setZoom] = React.useState(1) 
   
    const ref = useD3(
        (svg) => {
            displayPie(svg, data , zoom)
            labelList(svg, data, fontSize , zoom)
        
            setSvg(svg)

            svg.call(d3.zoom().on("zoom", (event) => {
                console.log("I'm zooming")
                //svg.attr("transform", event.transform)
                setZoom(event.transform.k)// d3.event.scale in V3
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

