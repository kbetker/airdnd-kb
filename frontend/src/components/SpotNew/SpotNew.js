import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { postCreatedSpot } from '../../store/spot'
import { useHistory } from 'react-router-dom'

// import { useDispatch } from 'react-router-dom';

export default function SpotNew(){
    const history = useHistory();
    const [title, setTitle] = useState('Place your marker');
    const [location, setLocation] = useState('');
    const [coordinateX, setCoordinateX] = useState(0);
    const [coordinateY, setCoordinateY] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [mainPic, setMainPic] = useState('');
    // const [ownerId, setOwnerId] = useState('');
    const [allowsFamiliar, setAllowsFamiliar] = useState(false);

    // console.log("xxxxxxxxxxxxxxxxxxxx", userId)

    const dispatch = useDispatch();
    // useEffect()
    const userId = useSelector(state => state.session.user)

    useEffect(() => {
        let getXY = document.querySelector(".map")
        if (getXY) {
            getXY.addEventListener("mouseup", (e) => {
                GetCoordinates()
            })
        }

        function FindPosition(oElement)
        {
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
          if (!e) var e = window.event;
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
        //   document.getElementById("x").innerHTML = PosX;
        //   document.getElementById("y").innerHTML = PosY;
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
        <div className="spotWrapper">

        <div className="spotById">
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title}></input>
            <br/>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" onChange={(e) => setLocation(e.target.value)} value={location}></input>
            <br/>
            <label htmlFor="coordinateX">coordinateX:</label>
            <input type="text" id="coordinateX" onChange={(e) => setCoordinateX(e.target.value)} value={coordinateX}></input>
            <br/>
            <label htmlFor="coordinateY">coordinateY:</label>
            <input type="text" id="coordinateY" onChange={(e) => setCoordinateY(e.target.value)} value={coordinateY}></input>
            <br/>
            <label htmlFor="price">price:</label>
            <input type="text" id="price" onChange={(e) => setPrice(e.target.value)} value={price}></input>
            <br/>
            <label htmlFor="description">description:</label>
            <textarea id="description" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
            <br/>
            <label htmlFor="mainPic">mainPic:</label>
            <input type="text" id="mainPic" onChange={(e) => setMainPic(e.target.value)} value={mainPic}></input>
            <br/>
            <label htmlFor="allowsFamiliar">allowsFamiliar:</label>
            <input type="text" id="allowsFamiliar" onChange={(e) => setAllowsFamiliar(e.target.value)} value={allowsFamiliar}></input>
            <br/>
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
