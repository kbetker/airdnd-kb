import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {fetchspotsByTag} from '../../store/spots'
import { Link } from 'react-router-dom'
import './spotsByTag.css'

export default function SpotsByTag(){
    const { tag } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchspotsByTag(tag))
    }, [dispatch, tag])


    // ================= adds hover effect to locations on map
    useEffect(() => {
        let listDivs = document.querySelectorAll('.list');
        let mapDivs = document.querySelectorAll('.locOnMap-sbt');

        if(listDivs){
            for(let i =0; i < listDivs.length; i++){
                listDivs[i].addEventListener("mouseenter", (e)=>{
                    const getNum = e.target.id.split("-")
                     const num = getNum[1]
                   document.getElementById(`mapLoc-${num}`).classList.add('locOnMap-sbt--hover');
                })

                listDivs[i].addEventListener("mouseleave", (e)=>{
                    const getNum = e.target.id.split("-")
                     const num = getNum[1]
                   document.getElementById(`mapLoc-${num}`).classList.remove('locOnMap-sbt--hover');
                })
            }
        }

        if(mapDivs){
            for(let i =0; i < mapDivs.length; i++){
                mapDivs[i].addEventListener("mouseenter", (e)=>{
                    const getNum = e.target.id.split("-")
                     const num = getNum[1]
                  let getListDiv = document.getElementById(`list-${num}`)
                  getListDiv.classList.add('list--hover');
                  getListDiv.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
                })

                mapDivs[i].addEventListener("mouseleave", (e)=>{
                    const getNum = e.target.id.split("-")
                     const num = getNum[1]
                   document.getElementById(`list-${num}`).classList.remove('list--hover');
                })
            }
        }





    })












    const spotsByTag = useSelector(state => state.spots.spots)
    if(!spotsByTag){return null;}


    function average(arr){
        if(arr.length === 0) return `No reviews`
        let totalReview = 0;
        let numOfReviews = arr.length
        for(let i = 0; i < arr.length; i++){
            totalReview += (arr[i].cleanReview + arr[i].valueReview + arr[i].locationReview) / 3
        }
          return `${(totalReview / numOfReviews).toFixed(1)} / 5`
    }

    return(

    <div className="spotWrapper" >

        <div className="spot">

                {spotsByTag.spotsByTag.map((e) =>
                    <Link to={`/spot/${e.Spot.id}`} key={e.id}>
                        <div id={`list-${e.id}`} className="list">
                            <div><h2>Title: {e.Spot.title}</h2></div>
                            <p>Location: {e.Spot.location}</p>
                            <p>Main Picture: {e.Spot.mainPic}</p>
                            <p>Price: {e.Spot.price}</p>
                            <p>Rating: {average(e.Spot.Reviews)}</p>
                        </div>
                    </Link>

                )}

        </div>

        <div className="map-sbt">

            {spotsByTag.spotsByTag.map((e) =>
                <Link to={`/spot/${e.Spot.id}`} key={`${e.id}`}>
                    <div  id={`mapLoc-${e.id}`} className="locOnMap-sbt" style={{top: e.Spot.coordinateX, left: e.Spot.coordinateY}}>
                            {e.Spot.title}
                    </div>
                </Link>
            )}
            <img src="/images/swordCoastMap.jpg" className="swordCoastMap" alt="sword coast map"></img>

        </div>
    </div>
    )

}
