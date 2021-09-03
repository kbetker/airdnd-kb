import React, { useEffect, useState } from "react"

function Swordcoast(){

    // const history = useHistory();
    const [title, setTitle] = useState('Click on map to place marker');
    // const [location, setLocation] = useState('');
    const [coordinateX, setCoordinateX] = useState(0);
    const [coordinateY, setCoordinateY] = useState(0);
    // const [price, setPrice] = useState(0);
    // const [description, setDescription] = useState('');
    // const [mainPic, setMainPic] = useState('');
    // const [allowsFamiliar, setAllowsFamiliar] = useState(false);




    useEffect(() => {
        let getXY = document.getElementById("map")
        if (getXY) {
            getXY.addEventListener("click", (e) => {
                GetCoordinates()
            })
        }

        function FindPosition(mapDiv){

          if(typeof( mapDiv.offsetParent ) != "undefined")
          {
              console.log(mapDiv.offsetParent)
            for(var posX = 118, posY = 494; mapDiv; mapDiv = mapDiv.offsetParent)
            {
              posX += mapDiv.offsetLeft;
              posY += mapDiv.offsetTop;
            //   console.log("offsetLeft", mapDiv.offsetLeft, "offsetTop", mapDiv.offsetTop)
            }
            // console.log(posX, posY, "WTFWTFWTF")
              return [ posX, posY ];
            }
            else
            {
              return [ mapDiv.x, mapDiv.y ];
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
          PosX = (PosX - ImgPos[0]) * (1 / 0.75);
          PosY = (PosY - ImgPos[1]) * (1 / 0.75);
          setCoordinateX(PosX)
          setCoordinateY(PosY)
          console.log(`X:${PosX}, offsetX:${ImgPos[0]}, Y:${PosY}, offsetY:${ImgPos[1]}`)

        }

    }, [])


    return(
    <>
     <div id="locOnMap" draggable="true" style={{ top: coordinateY, left: coordinateX }}>{title}</div>
                    <img src="/images/swordCoastMap.jpg" id="map" className="swordCoastMap" alt="sword coast map"></img>
    </>
    )
}

export default Swordcoast
