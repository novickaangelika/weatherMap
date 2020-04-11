export interface WeatherMap {
    coord: Coord;
    weather: Weather[];
    main: MainWeatherInfo;
    wind: Wind;
    clouds: Clouds;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
}

interface Coord {
    lon: number;
    lat: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface MainWeatherInfo {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

interface Wind {
    speed: number;
    deg: number;
}

interface Clouds {
    all: number;
}

interface Sys {
    sunrise: number;
    sunset: number;
}