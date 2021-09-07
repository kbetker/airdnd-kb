import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { dispatchCoordinates } from "../../store/locCoordinates";
import '../SpotsByTag/spotsByTag.css'
import '../SpotNew/NewSpot.css'
import "../SpotById/spotById.css"

function Swordcoast({ props }) {
  // const spots = useRef()
  const title = useSelector(state => state.mapTitle)
  const titleWhenEmpty = "Click on map to move location marker"
  const getXY = useRef()
  const FindPosition = useRef('')
  const GetCoordinates = useRef('')
  const dispatch = useDispatch()
  const [coordinateX, setCoordinateX] = useState(50);
  const [coordinateY, setCoordinateY] = useState(50);
  const mapControl = useSelector(state => state.mapControl)
  const spots = useSelector(state => state.spots.spots)
  const currentPage = window.document.URL.substring(window.document.URL.lastIndexOf('/') + 1)

  // useEffect(()=>{
  //   spots = props.spots
  // }, [])


  useEffect(() => {
    getXY.current.addEventListener("click", (e) => {
      GetCoordinates.current()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    FindPosition.current = function (mapDiv) {

      if (typeof (mapDiv.offsetParent) != "undefined") {
        for (var posX = mapControl.offsetX, posY = mapControl.offsetY; mapDiv; mapDiv = mapDiv.offsetParent) {
          console.log(mapControl.offsetX, mapControl.offsetY)
          posX = (posX + mapDiv.offsetLeft);
          posY = (posY + mapDiv.offsetTop);
        }
        return [posX, posY];
      }
      else {
        return [mapDiv.x, mapDiv.y];
      }
    }
  }, [mapControl])

  useEffect(() => {

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
      if(currentPage === "new"){
        dispatch(dispatchCoordinates({ "X": PosX, "Y": PosY }))
      }
      // console.log(`X:${PosX}, offsetX:${ImgPos[0]}, Y:${PosY}, offsetY:${ImgPos[1]}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapControl])

  return (
    <div className="mapContainer">



      <img src="/images/swordCoast2800faded.jpg" ref={getXY} className="swordCoastMap" alt="sword coast map" ></img>

      {currentPage === "new" &&

        <div className="locOnMap" draggable="true" style={{
          top: coordinateY,
          left: coordinateX,
          fontSize: `${mapControl.fontSize}px`,
          padding: `${mapControl.padding}px`,
          boxShadow: `${mapControl.shadowX}px ${mapControl.shadowY}px ${mapControl.shadowBlur}px rgba(0, 0, 0, 0.6)`,
          zIndex: "10",
        }
        }>{title ? title : titleWhenEmpty}
          <img className="locationDot" src="/images/locationDot.png" style={{
            width: `${mapControl.fontSize}px`,
            height: `${mapControl.fontSize}px`,
            bottom: `${mapControl.dotOffset}px`,
            left: `${mapControl.dotOffset}px`,
          }}></img>
        </div>
        }



      {currentPage !== "new" && spots && spots.map((el) =>
          <div id={`mapLoc-${el.id}`}
          className="locOnMap-sbt"
          draggable="true"
          onClick={(e)=>dispatch(dispatchCoordinates({"X": el.Spot.coordinateY, "Y": el.Spot.coordinateX}))}
          key={`loc-${el.id}`} style={{
            top: el.Spot?.coordinateX,
            left: el.Spot?.coordinateY,
            fontSize: `${mapControl.fontSize}px`,
            padding: `${mapControl.padding}px`,
            boxShadow: `${mapControl.shadowX}px ${mapControl.shadowY}px ${mapControl.shadowBlur}px rgba(0, 0, 0, 0.6)`,
            zIndex: "1000",
          }
          }>{el.Spot.title}
            <img className="locationDot" src="/images/locationDot.png" style={{
              width: `${mapControl.fontSize}px`,
              height: `${mapControl.fontSize}px`,
              bottom: `${mapControl.dotOffset}px`,
              left: `${mapControl.dotOffset}px`,
            }}></img>
          </div>

        )}
    </div>
  )
}

export default Swordcoast
