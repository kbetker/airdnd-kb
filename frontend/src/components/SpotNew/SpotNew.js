import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { postCreatedSpot } from '../../store/spot'
import { useHistory, useParams } from 'react-router-dom'
import './NewSpot.css'
import "../SpotById/spotById.css"
import { dispatchMapTitle } from "../../store/mapTitle"
import MapController from "../MapController/MapController"

// import { useDispatch } from 'react-router-dom';

export default function SpotNew() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState("Sword Coast");
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
                                onChange={(e) => [dispatch(dispatchMapTitle(e.target.value)), setTitle(e.target.value)]}
                                value={title}
                                placeholder="Click on map to move location marker"
                                className="newSpot--element">
                            </input>
                        </div>

                        <div className="newSpot--element">
                            <div><label htmlFor="price">price:</label></div>
                            <input
                                type="text"
                                id="price"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                className="newSpot--element">
                            </input>
                        </div>

                        <div className="newSpot--element">
                            <label htmlFor="description" >description:</label>
                            <textarea
                                id="description"
                                style={{ height: '90px' }}
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                className="newSpot--element">
                            </textarea>
                        </div>

                        <div className="newSpot--element">
                            <label htmlFor="mainPic">mainPic:</label>
                            <input
                                type="text"
                                id="mainPic"
                                onChange={(e) => setMainPic(e.target.value)}
                                value={mainPic}
                                className="newSpot--element">
                            </input>
                        </div>

                        <div className="newSpot--element">
                            <label htmlFor="allowsFamiliar">allowsFamiliar:</label>
                            <input
                                type="text"
                                id="allowsFamiliar"
                                onChange={(e) => setAllowsFamiliar(e.target.value)}
                                value={allowsFamiliar}
                                className="newSpot--element">
                            </input>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>

                <MapController />
            </div>

        </>


    )
}
