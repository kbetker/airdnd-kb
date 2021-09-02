import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBookedSpots } from '../../store/booking';

function UserPage() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const spots = useSelector(state => state.booking.spot)
    useEffect(() => {
        dispatch(getBookedSpots(user.id))

    }, [])



    return (<>
        <div>
            <div style={{ height: "250px" }}></div>
            {spots?.map((el) =>
                <div style={{ margin: "10px", padding: "10px" }}>
                    Name: {el.Spot.title}, Start Date: {el.startDate}, End Date:{el.endDate}, Price: {el.Spot.price}
                    <img src={el.Spot.mainPic} style={{ width: "250px" }}></img>

                </div>

            )}

        </div>
    </>)
}

export default UserPage
