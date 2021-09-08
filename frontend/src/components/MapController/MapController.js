import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import '../SpotNew/NewSpot.css'
import "../SpotById/spotById.css"
import Swordcoast from "../Swordcoast"
import { dispatchMapControl } from "../../store/mapControl"
import { initialState } from "../../store/mapControl"
import { dispatchCoordinates } from "../../store/locCoordinates"
import { useParams } from "react-router"
import clouds from "./clouds700x700.jpg"


function MapController() {

    const currentPage = window.document.URL.substring(window.document.URL.lastIndexOf('/') + 1)
    const direction = useRef('')
    const dispatch = useDispatch();
    const mapControl = useSelector(state => state.mapControl)
    const coordinates = useSelector(state => state.coordinates)
    const spot = useSelector(state => state.spot.spot)
    const spots = useSelector(state => state.spots.spots)
    const { id } = useParams();



    const panValue = 160
    const
        scale = 0.5,
        offsetX = -175,
        offsetY = -700,
        fontSize = -1,
        padding = -0.5,
        shadowX = -1,
        shadowY = -1,
        shadowBlur = -1,
        maxMapX = -175,
        maxMapY = 350,
        minMapX = 175,
        minMapY = 700,
        mapX = 0,
        mapY = 0 ,
        dotOffset = 0.5


    const zoomIn = [  {"scale": scale}, {"offsetX": offsetX}, {"offsetY": offsetY}, {"fontSize": fontSize}, {"padding": padding}, {"shadowX": shadowX}, {"shadowY": shadowY}, {"shadowBlur": shadowBlur}, {"maxMapX": maxMapX}, {"maxMapY": maxMapY}, {"minMapX": minMapX}, {"minMapY": minMapY}, {"mapX": mapX}, { "mapY": mapY}, { "dotOffset": dotOffset}]

    const zoomOut = [  {"scale": scale * -1}, {"offsetX": offsetX * -1}, {"offsetY": offsetY * -1}, {"fontSize": fontSize * -1}, {"padding": padding * -1}, {"shadowX": shadowX * -1}, {"shadowY": shadowY * -1}, {"shadowBlur": shadowBlur * -1}, {"maxMapX": maxMapX * -1}, {"maxMapY": maxMapY * -1}, {"minMapX": minMapX * -1}, {"minMapY": minMapY * -1}, {"mapX": mapX}, { "mapY": mapY}, { "dotOffset": dotOffset * -1}]







    useEffect(()=>{
        dispatch(dispatchMapControl(initialState))
        dispatch(dispatchCoordinates({ "X": 350, "Y": 250 }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [spots])

    useEffect(()=>{
        if(id && currentPage !== "new"){
            dispatch(dispatchCoordinates({ "X": spot?.coordinateX, "Y": spot?.coordinateY }))
        }
    }, [spot])

    function adjustMap(arr) {
        let newObj = Object.assign({}, mapControl);
        for (let i = 0; i < arr.length; i++) {
            let key = Object.keys(arr[i])[0]
            let value = newObj[Object.keys(arr[i])]
            let action = Object.values(arr[i])[0]
            let newValue = value + action;
            if (key === "scale" && (newValue < 1 || newValue > 4)) return;

            // keeps the map within the edges
            if (direction.current === "right" && newValue <= newObj.maxMapX && key === "mapX") {
                newObj[key] = newObj.maxMapX
            } else if (direction.current === "down" && newValue <= newObj.maxMapY && key === "mapY") {
                newObj[key] = newObj.maxMapY
            } else if (direction.current === "left" && newValue >= newObj.minMapX && key === "mapX") {
                newObj[key] = newObj.minMapX
            } else if (direction.current === "up" && newValue >= newObj.minMapY && key === "mapY") {
                newObj[key] = newObj.minMapY
            }

            // Zooms in/out towards/away location marker
            else if (key === "mapX" && direction.current === "zoomIn") {
                newObj[key] = newObj.minMapX - (coordinates.X * newObj.scale) + 350;
            }

            else if (key === "mapY" && direction.current === "zoomIn") {
                let zoomInValY = newObj.minMapY - (coordinates.Y * newObj.scale) + 250;
                newObj[key] = zoomInValY
            }

            else if (key === "mapX" && direction.current === "zoomOut") {
                if (newObj.scale === 1) {
                    newObj[key] = newObj.minMapX
                } else {
                    newObj[key] = newObj.minMapX - (coordinates.X * newObj.scale) + 350;
                }
            }
            else if (key === "mapY" && direction.current === "zoomOut") {
                if (newObj.scale === 1) {
                    newObj[key] = newObj.minMapY
                } else {
                    newObj[key] = newObj.minMapY - (coordinates.Y * newObj.scale) + 250;
                }
            }

            else if (key === "mapX" && direction.current === "panToView") {
                newObj[key] = newObj.minMapX - (coordinates.X * newObj.scale) + 350;
            }

            else if (key === "mapY" && direction.current === "panToView") {
                let zoomInValY = newObj.minMapY - (coordinates.Y * newObj.scale) + 250;
                newObj[key] = zoomInValY
            }

            else {
                newObj[key] = newValue

            }
        }
        dispatch(dispatchMapControl(newObj))
    }


// function invokeAdjust(){
//     if(currentPage === "new"){
//         return
//     } else {
//         direction.current = "panToView"
//         adjustMap([{"mapX": coordinates.X},{"mapY": coordinates.Y}])
//      }
// }

    useEffect(()=>{
        if(currentPage === "new" || currentPage === "edit"){
            return
        } else {
            direction.current = "panToView"
            adjustMap([{"mapX": coordinates.X},{"mapY": coordinates.Y}])
         }        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coordinates])


    return (<>
        <div className="mapControls">
            <div className="controlElement"
                onClick={() => [
                    direction.current = "left",
                    adjustMap([{ "mapX": panValue }])]}>
                <div className="arrowLeft"></div>
            </div>

            <div className="controlElement"
                onClick={() => [
                    direction.current = "right",
                    adjustMap([{ "mapX": panValue * -1 }])]}>
                <div className="arrowRight" ></div>
            </div>

            <div className="controlElement"
                onClick={() => [
                    direction.current = "up",
                    adjustMap([{ "mapY": panValue }])]}>
                <div className="arrowUp"></div>
            </div>

            <div className="controlElement"
                onClick={() => [
                    direction.current = "down",
                    adjustMap([{ "mapY": panValue * -1 }])]}>
                <div className="arrowDown"></div>
            </div>



            <div className="controlElement" onClick={() => [
                direction.current = "zoomIn",
                adjustMap(zoomIn)]}>+</div>
            <div className="controlElement" onClick={() => [
                direction.current = "zoomOut",
                adjustMap(zoomOut)]}>-</div>

            <div className="controlElement resetView" onClick={() => dispatch(dispatchMapControl(initialState))}>reset view</div>

        </div>
        {/* style={{ overflow: "hidden" }} */}
        <div className="map" style={{backgroundImage: `url(${clouds})`}} >
            <div style={{
                position: "relative",
                left: `${mapControl.mapX}px`,
                top: `${mapControl.mapY}px`,
                transform: `scale(${mapControl.scale})`,
                transition: `all 0.6s ease-in-out`,

            }}>

                <Swordcoast />

            </div>

        </div>



    </>)
}

export default MapController
