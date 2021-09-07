import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchspotsByTag } from '../../store/spots'
import { Link } from 'react-router-dom'
import './spotsByTag.css'
import '../SpotNew/NewSpot.css'
import "../SpotById/spotById.css"
import MapController from '../MapController/MapController';
import { dispatchCoordinates } from '../../store/locCoordinates';

export default function SpotsByTag() {
    const { tag } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchspotsByTag(tag))
    }, [dispatch, tag])

    const spotsByTag = useSelector(state => state.spots)
    // scrolls to top of page
    useEffect(() => {
       const topDiv = document.getElementById('spacer')
       topDiv?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })

    }, [])

    // ================= adds hover effect to locations on map
    useEffect(() => {
        let listDivs = document.querySelectorAll('.list');
        let mapDivs = document.querySelectorAll('.locOnMap-sbt');

        if (listDivs) {
            for (let i = 0; i < listDivs.length; i++) {
                listDivs[i].addEventListener("mouseenter", (e) => {
                    const getNum = e.target.id.split("-")
                    const num = getNum[1]
                    document.getElementById(`mapLoc-${num}`).classList.add('locOnMap-sbt--hover');
                })

                listDivs[i].addEventListener("mouseleave", (e) => {
                    const getNum = e.target.id.split("-")
                    const num = getNum[1]
                    document.getElementById(`mapLoc-${num}`).classList.remove('locOnMap-sbt--hover');
                })
            }
        }

        if (mapDivs) {
            for (let i = 0; i < mapDivs.length; i++) {
                mapDivs[i].addEventListener("click", (e) => {
                    const getNum = e.target.id.split("-")
                    const num = getNum[1]
                    let getListDiv = document.getElementById(`list-${num}`)
                    getListDiv.classList.add('list--hover');
                    getListDiv.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
                })

                mapDivs[i].addEventListener("mouseleave", (e) => {
                    const getNum = e.target.id.split("-")
                    const num = getNum[1]
                    document.getElementById(`list-${num}`).classList.remove('list--hover');
                })
            }
        }
    })





    // if (!spotsByTag) { return null; }


    function average(arr) {
        if (arr.length === 0) return `No reviews`
        let totalReview = 0;
        let numOfReviews = arr.length
        for (let i = 0; i < arr.length; i++) {
            totalReview += (arr[i].cleanReview + arr[i].valueReview + arr[i].locationReview) / 3
        }
        return `${(totalReview / numOfReviews).toFixed(1)} / 5`
    }

    return (
        <>
            <div id='spacer'></div>
            <div className="spotWrapper" >

                <div className="spot">

                    { spotsByTag.spots && spotsByTag?.spots.map((e) =>
                        <Link to={`/spot/${e.Spot?.id}`} onMouseOver={()=> dispatch(dispatchCoordinates({ "X": e.Spot?.coordinateX, "Y": e.Spot?.coordinateY })) } key={e.id}>
                            <div id={`list-${e.id}`} className="list">

                                <img src={e.Spot?.mainPic} className="spotImage" alt="Main Pic"></img>

                                <div className="spotContent">
                                    <div className="top">
                                        <h2>{e.Spot?.title}</h2>
                                        <h3>{e.Spot?.location}</h3>
                                        <hr className="spotHr"></hr>
                                        <p>{e.Spot?.description}</p>
                                    </div>

                                    <div className="bottom">
                                        <div>
                                            <img src='/images/redStar.png' style={{ width: '15px' }} alt="rating star"></img>
                                                &nbsp; {e.Spot && average(e.Spot?.Reviews)}</div>
                                        <div>{e.Spot?.price} gp / night</div>
                                    </div>
                                </div>



                                {/*
                            <div><h2>Title: {e.Spot?.title}</h2></div>
                            <p>Location: {e.Spot?.location}</p>
                            <p>Main Picture: {e.Spot?.mainPic}</p>
                            <p>Price: {e.Spot?.price}</p>
                            <p>Rating: {average(e.Spot?.Reviews)}</p> */}
                            </div>
                        </Link>

                    )}

                </div>
                            <MapController  />
                {/* <div className="map-sbt">

                    { spotsByTag.spots  && spotsByTag?.spots.map((e) =>
                        <Link to={`/spot/${e.Spot?.id}`} key={`${e.id}`}>
                            <div id={`mapLoc-${e.id}`} className="locOnMap-sbt" style={{ top: e.Spot?.coordinateY, left: e.Spot?.coordinateX }}>
                                {e.Spot?.title}
                            </div>
                        </Link>
                    )}
                    <img src="/images/swordCoastMap.jpg" className="swordCoastMap" alt="sword coast map"></img>

                </div> */}
            </div>
        </>
    )

}
