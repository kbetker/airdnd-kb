import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { postCreatedSpot } from '../../store/spot'
import { useHistory } from 'react-router-dom'
import './NewSpot.css'
import "../SpotById/spotById.css"
import { dispatchMapTitle } from "../../store/mapTitle"
import MapController from "../MapController/MapController"
import castle from "./castleBackground.jpg"
import noImage from "./NoImageSelected.png"

// import { useDispatch } from 'react-router-dom';

export default function SpotNew() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const location = "Sword Coast";
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [mainPic, setMainPic] = useState('');
    const [allowsFamiliar, setAllowsFamiliar] = useState(false);


    const userId = useSelector(state => state.session.user)
    const coordinates = useSelector(state => state.coordinates)


    if (!userId) { return null; }
    const payload = {
        title,
        location,
        coordinateX: Math.round(coordinates.X),
        coordinateY: Math.round(coordinates.Y),
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

    return (
        <>
            <div id='spacer'></div>
            <div className="newSpotWrapper" style={{backgroundImage: `url(${castle})`}}>

                <div className="newSpot" >

                    <form onSubmit={(e) => handleSubmit(e)} className="newSpotForm">

                        <div className="newSpot--element flexIt">
                            <div>
                                <label htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    onChange={(e) => [dispatch(dispatchMapTitle(e.target.value)), setTitle(e.target.value)]}
                                    value={title}
                                    placeholder="Click on map to move location marker"
                                    style={{ width: "100px", margin: "0 10px" }}
                                />
                            </div>


                            <div>
                                <label htmlFor="price">Price:</label>
                                <input
                                    type="text"
                                    id="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                    value={price}
                                    style={{ width: "100px" }}
                                />
                            </div>
                        </div>

                        <div className="newSpot--element">
                            <label htmlFor="description" >Description:</label>
                            <textarea
                                id="description"
                                style={{ height: '70px' }}
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                className="newSpot--element">
                            </textarea>
                        </div>

                        <div className="newSpot--element flexIt">

                            <label htmlFor="mainPic">Image URL:</label>
                            <input
                                type="text"
                                id="mainPic"
                                onChange={(e) => setMainPic(e.target.value)}
                                value={mainPic}
                                style={{ width: "240px", marginLeft: "10px" }}
                            >
                            </input>

                        </div>
                        <div className="imageContainer" style={{ backgroundImage: `url(${mainPic || noImage})` }}></div>

                        <div className="newSpot--element flexIt">
                            <label htmlFor="allowsFamiliar">Allow Familiars?:</label>
                            <input
                                name="allowsFamiliar"
                                type="checkbox"
                                checked={allowsFamiliar}

                                onChange={(e) => { setAllowsFamiliar(e.target.checked) }} />

                        </div>

                        <button type="submit" className="submitButton">Submit</button>
                    </form>
                </div>

                <MapController />
            </div>

        </>


    )
}
