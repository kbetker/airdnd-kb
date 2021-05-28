import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { postCreatedSpot } from '../../store/spot'
import { useHistory } from 'react-router-dom'
import './NewSpot.css'

// import { useDispatch } from 'react-router-dom';

export default function SpotNew(){
    const history = useHistory();
    const [title, setTitle] = useState('Click on map to place marker');
    const [location, setLocation] = useState('');
    const [coordinateX, setCoordinateX] = useState(0);
    const [coordinateY, setCoordinateY] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [mainPic, setMainPic] = useState('');
    const [allowsFamiliar, setAllowsFamiliar] = useState(false);


    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user)

    useEffect(() => {
        let getXY = document.querySelector(".map")
        if (getXY) {
            getXY.addEventListener("click", (e) => {
                GetCoordinates()
            })
        }

        function FindPosition(oElement){
          if(typeof( oElement.offsetParent ) != "undefined")
          {
            for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
            {
              posX += oElement.offsetLeft;
              posY += oElement.offsetTop;
            }
              return [ posX, posY ];
            }
            else
            {
              return [ oElement.x, oElement.y ];
            }
        }

        function GetCoordinates(e)
        {
          let PosX = 0;
          let PosY = 0;
          let ImgPos;
          ImgPos = FindPosition(getXY);
          if (!e) e = window.event;
          if (e.pageX || e.pageY)
          {
            PosX = e.pageX;
            PosY = e.pageY;
          }
          else if (e.clientX || e.clientY)
            {
              PosX = e.clientX + document.body.scrollLeft
                + document.documentElement.scrollLeft;
              PosY = e.clientY + document.body.scrollTop
                + document.documentElement.scrollTop;
            }
          PosX = PosX - ImgPos[0];
          PosY = PosY - ImgPos[1];
          setCoordinateX(PosX)
          setCoordinateY(PosY)

        }

    })





    if(!userId){return null;}
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
    async function handleSubmit(e){
        e.preventDefault();
       let createSpot = await dispatch(postCreatedSpot(payload))
    //    console.log(createSpot.newSpot.id)
        history.push(`/spot/${createSpot.newSpot.id}`)
    }





    return(
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
                <textarea id="description" style={{height: '90px'}} onChange={(e) => setDescription(e.target.value)} value={description} className="newSpot--element"></textarea>
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

        <div className="map">
        <div id="locOnMap" draggable="true" style={{ top: coordinateY, left: coordinateX }}>{title}</div>
                    <img src="/images/swordCoastMap.jpg" className="swordCoastMap" alt="sword coast map"></img>
                </div>





</div>

</>


    )
}
