import { useEffect, useState } from "react";

export default function Weather(props) {

    const [temperature, setTemperature] = useState(0);

    async function getTemperature() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=1275339&appid=9f8713ed2c3e5c4b1dfc47d83ad22338&units=metric`)
            .then(res => res.json()) // To get response as JSON othewise the data will be considered as text
            .then(data => {
                console.log(data);
                setTemperature(data.main.temp);
            }, error => {
                console.log("Error: ", error);
            })
    }

    useEffect(() => {
        getTemperature();
        setInterval(function () {
            getTemperature();
        }, 2000);
    }, []);

    return (
        <div>Mumbai temperature: <b>{temperature}</b> Degree</div>
    );
}