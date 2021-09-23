import React from 'react';
import * as d3 from 'd3';

import * as d3Selection from 'd3-selection'
import d3Zoom from 'd3-zoom'
import { useD3 } from '../hooks/useD3';
import { displayPie, engleText } from '../utils/functions'
import { useDataContext } from '../utils/dataContext'
import { useFontSizeContext } from '../utils/fontSizeContext'


export default function CircleEngleText({setValue}) {

    const { data } = useDataContext()
    const { fontSize } = useFontSizeContext()
    const [zoom, setZoom] = React.useState(1) 
    const ref = useD3(
        (svg) => {
          
            displayPie(svg, data, zoom)
            engleText(svg, data, fontSize, zoom)
           
            svg.call(d3.zoom().on("zoom", (event) => {
                console.log("I'm zooming")
                //svg.attr("transform", event.transform)
                setZoom(event.transform.k)// d3.event.scale in V3
            }))
            setValue(svg)//._groups[0][0])
            console.log(svg._groups[0][0])
        },
        [data, fontSize, zoom]
    );
   // props.value = ref ;
    return (
        <svg
            ref={ref}
        />
    );
}
