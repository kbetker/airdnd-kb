import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { postCreatedSpot } from '../../store/spot'
import { useHistory } from 'react-router-dom'
import './NewSpot.css'
import "../SpotById/spotById.css"
import Swordcoast from "../Swordcoast"
import { dispatchMapControl } from "../../store/mapControl"

// import { useDispatch } from 'react-router-dom';

export default function SpotNew() {
    const history = useHistory();
    const [title, setTitle] = useState('Click on map to place marker');
    const [location, setLocation] = useState('');
    const [coordinateX, setCoordinateX] = useState(0);
    const [coordinateY, setCoordinateY] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [mainPic, setMainPic] = useState('');
    const [allowsFamiliar, setAllowsFamiliar] = useState(false);
    const direction = useRef('')

    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user)
    const mapControl = useSelector(state => state.mapControl)



    if (!userId) { return null; }
    const payload = {
        title,
        location,
        coordinateX,
        coordinateY,
        price,
        description,
        mainPic,
        ownerId: userId.id,
        allowsFamiliar,
    };
    // console.log(userId.id)
    async function handleSubmit(e) {
        e.preventDefault();
        let createSpot = await dispatch(postCreatedSpot(payload))
        //    console.log(createSpot.newSpot.id)
        history.push(`/spot/${createSpot.newSpot.id}`)
    }


    function adjustMap(arr) {
        let newObj = Object.assign({}, mapControl);

        for (let i = 0; i < arr.length; i++) {
            let key = Object.keys(arr[i])[0]
            let value = newObj[Object.keys(arr[i])]
            let newValue = Object.values(arr[i])[0]
            console.log(key,  value + newValue)

            if(direction.current === "right" && value + newValue <= newObj.maxMapX) {
                newObj[key] = newObj.maxMapX
            } else if (direction.current === "down" && value + newValue <= newObj.maxMapY) {
                 newObj[key] = newObj.maxMapY
            } else if (direction.current === "left" && value + newValue >=  newObj.minMapX){
                newObj[key] = newObj.minMapX
            } else if (direction.current === "up" && value + newValue >= newObj.minMapY){
                newObj[key] = newObj.minMapY
            }

            else {
                newObj[key] += newValue

            }

            // console.log(key, value, newValue)
            // console.log([Object.keys(arr[i])])
            // newObj[Object.keys(arr[i])] += Object.values(arr[i])[0]
        }
        dispatch(dispatchMapControl(newObj))

    }


    return (
        <>
            <div id='spacer'></div>
            <div className="newSpotWrapper">

                <div className="newSpot" >

                    <form onSubmit={(e) => handleSubmit(e)} className="newSpotForm">

                        <div className="newSpot--element">
                            <label htmlFor="title">Title:</label>
                            <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title} className="newSpot--element"></input>
                        </div>

                        <div className="newSpot--element">
                            <label htmlFor="location">Location:</label>
                            <input type="text" id="location" onChange={(e) => setLocation(e.target.value)} value={location} className="newSpot--element"></input>
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
                    <div className="controlElement" onClick={() =>
                        [direction.current = "left", adjustMap([{ "mapX": 130 }])]
                        }>
                        <div className="arrowLeft"></div>
                    </div>

                    <div className="controlElement" onClick={() =>
                        [direction.current = "right", adjustMap([{ "mapX": -130 }])]
                        }>
                        <div className="arrowRight" ></div>
                    </div>

                    <div className="controlElement" onClick={() =>
                        [direction.current = "up", adjustMap([{ "mapY": 130 }])]
                        }>
                        <div className="arrowUp"></div>
                    </div>

                    <div className="controlElement" onClick={() =>
                        [direction.current = "down", adjustMap([{ "mapY": -130 }])]
                        }>
                        <div className="arrowDown"></div>
                    </div>

                    <div className="controlElement" onClick={() => adjustMap([
                        { "scale": 0.5 },
                        { "offsetX": -175 },
                        { "offsetY": -700 },
                        { "fontSize": -2 },
                        { "padding": -1 },
                        { "shadowX": -1 },
                        { "shadowY": -1 },
                        { "shadowBlur": -1 },
                        { "maxMapX": -290 },
                        { "maxMapY": 235 },
                        { "minMapX": 175 },
                        { "minMapY": 700 },
                    ])}>+</div>
                    <div className="controlElement" onClick={() => adjustMap([{
                        "scale": -0.5 },
                        { "offsetX": 175 },
                        { "offsetY": 700 },
                        { "fontSize": 2 },
                        { "padding": 1 },
                        { "shadowX": 1 },
                        { "shadowY": 1 },
                        { "shadowBlur": 1 },
                        { "maxMapX": 290 },
                        { "maxMapY": -235 },
                        { "minMapX": -175 },
                        { "minMapY": -700 },
                    ])}>-</div>
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
