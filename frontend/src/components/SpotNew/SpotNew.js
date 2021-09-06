import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { postCreatedSpot } from '../../store/spot'
import { useHistory, useParams } from 'react-router-dom'
import './NewSpot.css'
import "../SpotById/spotById.css"
import Swordcoast from "../Swordcoast"
import { dispatchMapControl } from "../../store/mapControl"
import { initialState } from "../../store/mapControl"
import { dispatchMapTitle } from "../../store/mapTitle"

// import { useDispatch } from 'react-router-dom';

export default function SpotNew() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState("Sword Coast");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [mainPic, setMainPic] = useState('');
    const [allowsFamiliar, setAllowsFamiliar] = useState(false);
    const direction = useRef('')

    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user)
    const mapControl = useSelector(state => state.mapControl)
    const coordinates = useSelector(state => state.coordinates)


    if (!userId) { return null; }
    const payload = {
        title,
        location,
        coordinateX: coordinates.X,
        coordinateY: coordinates.Y,
        price,
        description,
        mainPic,
        ownerId: userId.id,
        allowsFamiliar,
    };

    async function handleSubmit(e) {
        e.preventDefault();
        let createSpot = await dispatch(postCreatedSpot(payload))
        history.push(`/spot/${createSpot.newSpot.id}`)
    }





    function adjustMap(arr) {
        let newObj = Object.assign({}, mapControl);
        console.log(newObj)
        for (let i = 0; i < arr.length; i++) {
            let key = Object.keys(arr[i])[0]
            let value = newObj[Object.keys(arr[i])]
            let action = Object.values(arr[i])[0]
            let newValue = value + action;
            // console.log(key, newValue, direction.current)
            if(key === "scale" && (newValue < 1 || newValue > 4)) return;

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
                if(newObj.scale === 1){
                    newObj[key] = newObj.minMapX
                } else {
                    newObj[key] = newObj.minMapX - (coordinates.X * newObj.scale) + 350;
                }
            }
            else if (key === "mapY" && direction.current === "zoomOut") {
                if(newObj.scale === 1){
                    newObj[key] = newObj.minMapY
                } else {
                    newObj[key] = newObj.minMapY - (coordinates.Y * newObj.scale) + 250;
                }
            }

            else {
                newObj[key] = newValue

            }
        }
        dispatch(dispatchMapControl(newObj))
        console.log(newObj)
    }


    return (
        <>
            <div id='spacer'></div>
            <div className="newSpotWrapper">

                <div className="newSpot" >

                    <form onSubmit={(e) => handleSubmit(e)} className="newSpotForm">

                        <div className="newSpot--element">
                            <label htmlFor="title">Title:</label>
                            <input
                            type="text"
                            id="title"
                            onChange={(e) => [dispatch(dispatchMapTitle(e.target.value)),setTitle(e.target.value)] }
                            value={title}
                            placeholder="Click on map to move location marker"
                            className="newSpot--element">

                        </input>
                        </div>

                        <div className="newSpot--element">
                            <div><label htmlFor="price">price:</label></div>
                            <input type="text" id="price" onChange={(e) => setPrice(e.target.value)} value={price} className="newSpot--element"></input>
                        </div>

                        <div className="newSpot--element">
                            <label htmlFor="description" >description:</label>
                            <textarea id="description" style={{ height: '90px' }} onChange={(e) => setDescription(e.target.value)} value={description} className="newSpot--element"></textarea>
                        </div>

                        <div className="newSpot--element">
                            <label htmlFor="mainPic">mainPic:</label>
                            <input type="text" id="mainPic" onChange={(e) => setMainPic(e.target.value)} value={mainPic} className="newSpot--element"></input>
                        </div>

                        <div className="newSpot--element">
                            <label htmlFor="allowsFamiliar">allowsFamiliar:</label>
                            <input type="text" id="allowsFamiliar" onChange={(e) => setAllowsFamiliar(e.target.value)} value={allowsFamiliar} className="newSpot--element"></input>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>


                <div className="mapControls">
                    <div className="controlElement"
                        // ref={leftButton}
                    onClick={() =>   [direction.current = "left", adjustMap([{ "mapX": 160 }])]}
                        // [direction.current = "left", adjustMap([{ "mapX": 160 }])]
                    // }
                    >
                        <div className="arrowLeft"></div>
                    </div>

                    <div className="controlElement" onClick={() =>
                        [direction.current = "right", adjustMap([{ "mapX": -160 }])]
                    }>
                        <div className="arrowRight" ></div>
                    </div>

                    <div className="controlElement" onClick={() =>
                        [direction.current = "up", adjustMap([{ "mapY": 160 }])]
                    }>
                        <div className="arrowUp"></div>
                    </div>

                    <div className="controlElement" onClick={() =>
                        [direction.current = "down", adjustMap([{ "mapY": -160 }])]
                    }>
                        <div className="arrowDown"></div>
                    </div>




                    <div className="controlElement" onClick={() => [
                        direction.current = "zoomIn",
                        adjustMap([
                            { "scale": 0.5 },
                            { "offsetX": -175 },
                            { "offsetY": -700 },
                            { "fontSize": -1 },
                            { "padding": -0.5 },
                            { "shadowX": -1 },
                            { "shadowY": -1 },
                            { "shadowBlur": -1 },
                            { "maxMapX": -175 },
                            { "maxMapY": 350 },
                            { "minMapX": 175 },
                            { "minMapY": 700 },
                            { "mapX": null },
                            { "mapY": null },
                            { "dotOffset": 0.5,}
                        ])]}>+</div>
                    <div className="controlElement" onClick={() => [
                        direction.current = "zoomOut",
                        adjustMap([
                            { "scale": -0.5 },
                            { "offsetX": 175 },
                            { "offsetY": 700 },
                            { "fontSize": 1 },
                            { "padding": 0.5 },
                            { "shadowX": 1 },
                            { "shadowY": 1 },
                            { "shadowBlur": 1 },
                            { "maxMapX": 175 },
                            { "maxMapY": -350 },
                            { "minMapX": -175 },
                            { "minMapY": -700 },
                            { "mapX": null },
                            { "mapY": null },
                            { "dotOffset": -0.5,}
                        ])]}>-</div>

                <div className="controlElement resetView" onClick={() => dispatch(dispatchMapControl(initialState))}>reset view</div>

                </div>
                <div className="map" style={{ overflow: "hidden" }}>
                    <div style={{
                        position: "relative",
                        left: `${mapControl.mapX}px`,
                        top: `${mapControl.mapY}px`,
                        transform: `scale(${mapControl.scale})`,
                        transition: "all 0.3s ease-in-out"
                    }}>

                        <Swordcoast />

                    </div>

                </div>





            </div>

        </>


    )
}
