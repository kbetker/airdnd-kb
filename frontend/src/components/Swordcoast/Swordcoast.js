import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux";

function Swordcoast() {

  // const history = useHistory();
  const [title, setTitle] = useState('Click on map to place marker');
  // const [location, setLocation] = useState('');
  const getXY = useRef()
  const FindPosition = useRef('')
  const GetCoordinates = useRef('')

  const [coordinateX, setCoordinateX] = useState(0);
  const [coordinateY, setCoordinateY] = useState(0);
  // const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState('');
  // const [mainPic, setMainPic] = useState('');
  // const [allowsFamiliar, setAllowsFamiliar] = useState(false);
  const mapControl = useSelector(state => state.mapControl)



  // useEffect(() => {
  //   let getXY = document.getElementById("map")
  //   if (getXY) {
    useEffect(()=>{
      getXY.current.addEventListener("click", (e) => {
          GetCoordinates.current()
        })
      }, [])

      useEffect(()=>{
        FindPosition.current = function(mapDiv) {

        if (typeof (mapDiv.offsetParent) != "undefined") {
          for (var posX = mapControl.offsetX, posY = mapControl.offsetY; mapDiv; mapDiv = mapDiv.offsetParent) {
            console.log(mapControl.offsetX, mapControl.offsetY)
            posX = (posX + mapDiv.offsetLeft);
            posY = (posY + mapDiv.offsetTop);
            // console.log("offsetLeft", mapDiv.offsetLeft, "offsetTop", mapDiv.offsetTop)
          }
          return [posX, posY];
        }
        else {
          return [mapDiv.x, mapDiv.y];
        }
      }
      }, [mapControl])

      useEffect(()=>{
        GetCoordinates.current = function (e) {
          let PosX = 0;
          let PosY = 0;
          let ImgPos;
          ImgPos = FindPosition.current(getXY.current);
          if (!e) e = window.event;
          if (e.pageX || e.pageY) {
            PosX = e.pageX;
            PosY = e.pageY;
          }
          else if (e.clientX || e.clientY) {
            PosX = e.clientX + document.body.scrollLeft
              + document.documentElement.scrollLeft;
            PosY = e.clientY + document.body.scrollTop
              + document.documentElement.scrollTop;
          }
          PosX = ((PosX - ImgPos[0]) / mapControl.scale);
          PosY = ((PosY - ImgPos[1]) / mapControl.scale);
          setCoordinateX(PosX)
          setCoordinateY(PosY)
          console.log(`X:${PosX}, offsetX:${ImgPos[0]}, Y:${PosY}, offsetY:${ImgPos[1]}`)
        }
      },[mapControl])


  return (
    <div style={{ width: "2800px", height: "2800px" }}>
      <img src="/images/swordCoast2800.jpg" ref={getXY} className="swordCoastMap" alt="sword coast map" ></img>
      <div id="locOnMap" draggable="true" style={{ top: coordinateY, left: coordinateX, fontSize: "12px", padding: "7px", boxShadow: "5px 5px 9px rgba(0, 0, 0, 0.6)" }}>{title}</div>
    </div>
  )
}

export default Swordcoast
