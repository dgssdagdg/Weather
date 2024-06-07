<script setup>
import { getGegreeF } from '../utils'
const props = defineProps({
    weatherInfo: {
        type: [Object, null],
        required: true,
    }
})


const time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
var date = new Date();
var days = [
  'su',
  'mo',
  'tu',
  'we',
  'th',
  'fr',
  'sa'
];
var daysMounth = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
var daysFull = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
</script>

<template>
    <div v-if="weatherInfo?.weather" class="app-left-body">
        <div class="app-left-type-degree">
            <span class="app-left-type-c app-left-type-degree-active">C</span>
            <span class="app-left-type-f">F</span>
        </div>
        <div class="app-left-weather-img">
            <img :src="require(`@/assets/img/weather-img/${weatherInfo?.weather[0].description}.png`)" alt="">
        </div>
        <div class="app-left-degree app-left-degree-c app-left-degree-c-active">
            {{ Math.round(weatherInfo?.main?.temp) }} <span>° C</span>
        </div>
        <div class="app-left-degree app-left-degree-f">
            {{ getGegreeF(weatherInfo?.main?.temp) }} <span>° F</span>
        </div>
        <div class="app-left-number"> {{ date.getDay() }}{{ days[date.getDay()] }} {{ daysMounth[date.getMonth()] }} ‘{{ date.toLocaleDateString('en', {year: '2-digit'}) }}</div>
        <div class="app-left-box">
            <div class="app-left-week">{{ daysFull[date.getDay()] }}</div>
            <div class="app-left-line"></div>
            <div class="app-left-time">{{ time }}</div>
        </div>
        <div class="app-left-indicators">
            <div class="app-left-indicators-wind">
                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_240_1333)" filter="url(#filter0_di_240_1333)">
                    <path d="M18.0646 10.8158C18.2274 10.8847 18.2274 11.1153 18.0646 11.1842L6.00205 16.2876C5.83055 16.3602 5.66168 16.1796 5.74556 16.0133L7.73684 12.0667L7.8265 11.885C8.10176 11.3271 8.10176 10.6729 7.8265 10.115L7.73684 9.93333L5.74556 5.98669C5.66168 5.82044 5.83055 5.63985 6.00205 5.7124L18.0646 10.8158ZM20.7776 11.9235C21.5994 11.582 21.5994 10.418 20.7776 10.0766L4.23756 3.20369C3.94126 3.08057 3.59989 3.14945 3.37451 3.37783C3.1483 3.60705 3.08438 3.95087 3.2131 4.24608L5.80937 10.2007C6.03162 10.7104 6.03162 11.2896 5.80937 11.7993L3.2131 17.7539C3.08439 18.0491 3.1483 18.3929 3.37451 18.6222C3.59989 18.8506 3.94126 18.9194 4.23756 18.7963L20.7776 11.9235Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_di_240_1333" x="-1.26241" y="0" width="24.2624" height="25.0165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-1.50827" dy="2.26241"/>
                    <feGaussianBlur stdDeviation="0.377069"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_240_1333"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_240_1333" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-0.754137" dy="0.754137"/>
                    <feGaussianBlur stdDeviation="0.754137"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_240_1333"/>
                    </filter>
                    <clipPath id="clip0_240_1333">
                    <rect width="22" height="22" fill="white" transform="translate(1)"/>
                    </clipPath>
                    </defs>
                </svg>
                Wind
                <span>{{ Math.round(weatherInfo?.wind?.speed) }} km/h</span>
            </div>
            <div class="app-left-line"></div>
            <div class="app-left-indicators-hum">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_240_1343)" filter="url(#filter0_di_240_1343)">
                    <path d="M11.0001 2.84224L6.46263 7.37974C5.5653 8.27716 4.95424 9.4205 4.70671 10.6652C4.45917 11.9099 4.58628 13.2 5.07196 14.3725C5.55764 15.5449 6.38008 16.547 7.43528 17.2521C8.49049 17.9571 9.73106 18.3334 11.0001 18.3334C12.2692 18.3334 13.5098 17.9571 14.565 17.2521C15.6202 16.547 16.4426 15.5449 16.9283 14.3725C17.414 13.2 17.5411 11.9099 17.2935 10.6652C17.046 9.4205 16.4349 8.27716 15.5376 7.37974L11.0001 2.84224ZM11.0001 0.249908L16.8338 6.08358C17.9876 7.23736 18.7733 8.70737 19.0916 10.3077C19.4099 11.9081 19.2465 13.5668 18.6221 15.0743C17.9977 16.5818 16.9403 17.8703 15.5836 18.7768C14.2269 19.6833 12.6318 20.1672 11.0001 20.1672C9.36843 20.1672 7.77338 19.6833 6.41668 18.7768C5.05998 17.8703 4.00256 16.5818 3.37813 15.0743C2.7537 13.5668 2.59032 11.9081 2.90864 10.3077C3.22696 8.70737 4.01269 7.23736 5.16646 6.08358L11.0001 0.249908Z" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_di_240_1343" x="-2.26241" y="0" width="24.2624" height="25.0165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-1.50827" dy="2.26241"/>
                    <feGaussianBlur stdDeviation="0.377069"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_240_1343"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_240_1343" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="-0.754137" dy="0.754137"/>
                    <feGaussianBlur stdDeviation="0.754137"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_240_1343"/>
                    </filter>
                    <clipPath id="clip0_240_1343">
                    <rect width="22" height="22" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                Hum
                <span>{{ weatherInfo?.main?.humidity }} %</span>
            </div>
            <div class="app-left-line">
            </div>
            <div v-if="weatherInfo?.rain" class="app-left-indicators-rain">
                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 4.00001C16.9317 4.00001 17.7801 4.00001 17 4.00001C16 2 14 0 10.5 0C7 0 4.56176 2.12215 4 5.50001C1.78249 5.50001 0 7.74206 0 10C0.5 12.5 1 13.5 3.52173 14H17.6495C20.324 14 22.5 11.7835 22.5 9.05945C22.5 6.3354 20.1744 4.00001 17.5 4.00001ZM21.0998 8.86379C21.0998 10.869 19.4815 12.5 17.4916 12.5H4.33634C2.77226 12.5 1.4998 11.2181 1.4998 9.64235C1.4998 8.06616 2.77226 6.78392 4.33634 6.78392C4.44072 6.78392 4.55466 6.79226 4.69489 6.80934L5.15662 6.86733L5.20284 6.40337C5.48808 3.57156 7.8362 1.43607 10.6648 1.43607C12.979 1.43607 15.0558 2.91494 15.8331 5.11636L15.9801 5.53186L16.3988 5.398C16.7542 5.28519 17.1219 5.22798 17.4916 5.22798C19.4815 5.22798 21.0998 6.85899 21.0998 8.86379Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.12321 16.0214C4.69565 17.0637 5.26809 18.1053 5.84112 19.1476C6.23944 19.8729 7.35212 19.2254 6.9532 18.4995C6.38076 17.4573 5.80833 16.415 5.23529 15.3728C4.83697 14.6474 3.7243 15.2949 4.12321 16.0214Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.38542 16.0214C8.95783 17.0635 9.53023 18.1051 10.1026 19.1473C10.5015 19.8726 11.6141 19.2252 11.2152 18.4993C10.6428 17.4571 10.0704 16.4149 9.49743 15.3728C9.09914 14.6475 7.98594 15.2949 8.38542 16.0214Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8647 16.0213C13.4376 17.0633 14.01 18.1048 14.5823 19.1468C14.9805 19.8721 16.0936 19.2247 15.6948 18.4989C15.1224 17.4568 14.5495 16.4148 13.9772 15.3727C13.5789 14.6475 12.4658 15.2949 12.8647 16.0213Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1934 16.0213C17.7658 17.0633 18.3387 18.1047 18.911 19.1468C19.3093 19.872 20.4223 19.2247 20.0235 18.4989C19.4506 17.4568 18.8782 16.4148 18.3059 15.3727C17.9071 14.6475 16.7946 15.2949 17.1934 16.0213Z" fill="white"/>
                </svg>
                Rain
                <span>{{ weatherInfo?.rain?.['1h'] }} %</span>  
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-left-body {
}
.app-left-type-degree {
    position: absolute;
    top: 63px;
    right: 70px;
    font-weight: 400;
    font-size: 24px;
    line-height: calc(29 / 24 * 100%);
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 91.2px;
    column-gap: 4.2px;
    cursor: pointer;
}
.app-left-type-active {
    justify-content: flex-end;
}
.app-left-type-degree-active {
    padding: 6px 19.2px 6.8px 20px;
    background: rgba(255, 255, 255, 0.18);
    border-radius: 100px;
    justify-content: center;
}
.app-left-weather-img {
    margin-bottom: 5px;
    width: 143px;
    height: 150px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    & img {
        width: 143px;
        height: 150px;
    }
}
.app-left-degree {
    font-weight: 100;
    font-size: 164px;
    line-height: 120%;
    color: #FFFFFF;
    text-shadow: 3px 5px 6px #AE84A6, -6px 3px 3px #AE84A6;
    display: none;
    align-items: flex-start;
    column-gap: 10px;
    margin-bottom: 17px;
    & span {
        font-weight: 400;
        font-size: 32px;
        line-height: 120%;
        letter-spacing: -0.05em;
        color: #FFFFFF;
    }
}
.app-left-degree-c-active {
    display: flex;
}
.app-left-number {
    font-weight: 300;
    font-size: 36px;
    line-height: 120%;
    color: #FFFFFF;
    text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}
.app-left-box {
    font-weight: 300;
    font-size: 24px;
    line-height: 120%;
    color: #FFFFFF;
    text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-bottom: 38px;
}
.app-left-week {
}
.app-left-line {
    height: 16px;
    width: 1px;
    display: inline-flex;
    background-color: #FFFFFF;
}
.app-left-time {
}
.app-left-indicators {
    display: flex;
    align-items: center;
    column-gap: 20px;
    margin-bottom: 74px;
}
.app-left-indicators-wind {
    & svg {
        margin-bottom: 5px;
    }
}
.app-left-indicators-hum {
}
.app-left-indicators-hum,
.app-left-indicators-wind,
.app-left-indicators-rain {
    font-family: 'Overpass';
    font-weight: 400;
    font-size: 22px;
    line-height: calc(28 / 22 * 100%);
    color: #FFFFFF;
    text-shadow: -1.39839px 2.09758px 0.699193px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    & svg {
        margin-right: 10px;
    }
    & span {
        margin-left: 20px;
    }
}
</style>