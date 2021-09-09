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
import castle from "../SpotNew/castleBackground.jpg"
import noImage from "../SpotNew/NoImageSelected.png"





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

    useEffect(() => {
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
            <div className="newSpotWrapper"  style={{backgroundImage: `url(${castle})`}}>

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
