import React from "react";

export default class calendarlendar extends React.Component{
    getDate(){
        const dateName = ['sunday','Monday','tuesday','wednesday','thursday','friday','saturday']
        const monthName = ['january','fabruary','march','april','may','june','july','august','setember','october','november','december']
        const date = new Date()
        const weekDay = dateName[date.getDay()]
        const day = date.getDate()
        const month = monthName[date.getMonth()]
        const year = date.getFullYear()+ 543
        return `วัน${weekDay} ที่ ${day} ${month} ${year}`
        
    }
    render(){
        return <div>{this.getDate()}</div>
    }   
}