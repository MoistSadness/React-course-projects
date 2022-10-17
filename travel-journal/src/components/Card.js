import React from "react"

export default function Card(props) {
    console.log(props.item)
    return (
        <div className="card-container">
            <img src={props.item.imageUrl} className="card-image"/>
            <div className="card-body">
                <div className="location-container">
                    <div className="location">{props.item.location}</div>
                    <a href={props.item.googleMapsUrl} className="map-location">View on Google Maps</a>
                </div>
                <div className="title">{props.item.title}</div>
                <div className="date-container">
                    <b className="date">
                        <span>{props.item.startDate}</span> - <span>{props.item.endDate}</span>
                    </b>
                </div>
                <div className="description">{props.item.description}</div>
            </div>
        </div>
    )
}