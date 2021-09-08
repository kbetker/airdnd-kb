import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { postCreatedSpot } from '../../store/spot'
import { useHistory } from 'react-router-dom'
import '../SpotNew/NewSpot.css'
import "../SpotById/spotById.css"
import { dispatchMapTitle } from "../../store/mapTitle"
import MapController from "../MapController/MapController"
import { fetchSpotById } from "../../store/spot"
import { useParams } from 'react-router';
import { editSpot } from "../../store/spot"

// import { useDispatch } from 'react-router-dom';

export default function SpotNew() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams()

    const userId = useSelector(state => state.session.user)
    const coordinates = useSelector(state => state.coordinates)
    const spot = useSelector(state => state.spot.spot)

    const [title, setTitle] = useState(spot?.title);
    const location = "Sword Coast";
    const [price, setPrice] = useState(spot?.price);
    const [description, setDescription] = useState(spot?.description);
    const [mainPic, setMainPic] = useState(spot?.mainPic);
    const [allowsFamiliar, setAllowsFamiliar] = useState(spot?.allowsFamiliar);

    useEffect(() => {
        dispatch(fetchSpotById(id))
    }, [dispatch, id])

    useEffect(()=>{
        setTitle(spot?.title);
        setPrice(spot?.price);
        setDescription(spot?.description);
        setMainPic(spot?.mainPic);
        setAllowsFamiliar(spot?.allowsFamiliar);
    }, [spot])


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
        await dispatch(editSpot(parseInt(id), payload))
        history.push(`/spot/${id}`)
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
