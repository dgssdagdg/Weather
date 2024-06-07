<script setup>
import { ref, onMounted } from 'vue';
import { API_KEY, BASE_URL, BASE_URL_AIR } from './constants/index.js';
import WeatherSummary from './components/WeatherSummary.vue';
import WeatherTime from './components/WeatherTime.vue';
import WeatherIndicators from './components/WeatherIndicators.vue';
import WeatherSliders from './components/WeatherSliders.vue';

const city = ref('Paris')
const weatherInfo = ref(null)
async function getWeather() {
    await fetch(`${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => weatherInfo.value = data)
        getAirQuality()
}
function classRemove() {
    const top = document.querySelector('.app-right-top');
    top.classList.remove('app-right-top-active');
}
const AirQuality = ref(null)
async function getAirQuality() {
    await fetch(`${BASE_URL_AIR}?lat=${weatherInfo?.value.coord?.lat}&lon=${weatherInfo?.value.coord?.lon}&appid=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => AirQuality.value = data)
}
onMounted(getWeather)


document.addEventListener('click', function (e) {
          if (e.target.closest('.app-right-top-btn')) {
              let top = e.target.closest('.app-right-top');
              top.classList.toggle('app-right-top-active');
          }
          let degreeBtnC = document.querySelector('.app-left-type-c');
          let degreeBtnF = document.querySelector('.app-left-type-f');
          let degreeC = document.querySelector('.app-left-degree-c')
          let degreeF = document.querySelector('.app-left-degree-f')
          if (e.target.closest('.app-left-type-degree')) {
              let item = e.target.closest('.app-left-type-degree')
              item.classList.toggle('app-left-type-active')
              degreeBtnC.classList.toggle('app-left-type-degree-active')
              degreeBtnF.classList.toggle('app-left-type-degree-active')
              degreeC.classList.toggle('app-left-degree-c-active')
              degreeF.classList.toggle('app-left-degree-c-active')
          }
})
</script>

<template>
    <div class="wrapper">
        <div class="app">
            <div class="app-left">
                <WeatherSummary :weatherInfo="weatherInfo"/>
                <WeatherSliders/>
            </div>
            <div class="app-right">
                <div class="app-right-top">
                    <div class="app-right-top-name-city">
                        <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.5001 32.6032L4.21929 23.3224C2.38375 21.4868 1.13373 19.1481 0.627309 16.6021C0.120892 14.0562 0.38082 11.4172 1.37422 9.01889C2.36763 6.62062 4.04989 4.57078 6.20828 3.1286C8.36668 1.68641 10.9043 0.916649 13.5001 0.916649C16.096 0.916649 18.6336 1.68641 20.792 3.1286C22.9504 4.57078 24.6326 6.62062 25.626 9.01889C26.6194 11.4172 26.8794 14.0562 26.3729 16.6021C25.8665 19.1481 24.6165 21.4868 22.781 23.3224L13.5001 32.6032ZM20.7189 21.2603C22.1464 19.8326 23.1186 18.0136 23.5124 16.0334C23.9062 14.0532 23.704 12.0007 22.9313 10.1355C22.1586 8.2702 20.8502 6.67594 19.1715 5.55428C17.4927 4.43262 15.5191 3.83394 13.5001 3.83394C11.4812 3.83394 9.50752 4.43262 7.82879 5.55428C6.15006 6.67594 4.84163 8.2702 4.06896 10.1355C3.29628 12.0007 3.09406 14.0532 3.48787 16.0334C3.88167 18.0136 4.85382 19.8326 6.28138 21.2603L13.5001 28.479L20.7189 21.2603ZM13.5001 16.9582C12.7266 16.9582 11.9847 16.6509 11.4377 16.1039C10.8907 15.5569 10.5835 14.8151 10.5835 14.0415C10.5835 13.268 10.8907 12.5261 11.4377 11.9791C11.9847 11.4322 12.7266 11.1249 13.5001 11.1249C14.2737 11.1249 15.0155 11.4322 15.5625 11.9791C16.1095 12.5261 16.4168 13.268 16.4168 14.0415C16.4168 14.8151 16.1095 15.5569 15.5625 16.1039C15.0155 16.6509 14.2737 16.9582 13.5001 16.9582Z" fill="white"/>
                        </svg>
                        {{ city }}, {{ weatherInfo?.sys?.country }}
                    </div>
                    <div class="app-right-top-input">
                        <input
                        class="input"
                        v-model="city"
                        type="text"
                        @keyup.enter="classRemove"
                        @keydown.enter="getWeather"
                        >
                        <span class="app-right-top-btn">
                            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1239 24.7031C24.8077 24.0075 24.8077 22.8922 24.1239 22.1965L18.7478 16.7278C19.9906 14.989 20.7254 12.8505 20.7254 10.5408C20.7254 4.72875 16.0768 0 10.3622 0C4.6486 0 0 4.72875 0 10.5408C0 16.354 4.6486 21.0817 10.3622 21.0817C12.5283 21.0817 14.5401 20.4024 16.2057 19.2422L21.5741 24.7031C22.2746 25.4158 23.4233 25.4158 24.1239 24.7031ZM3.03943 10.5408C3.03943 6.43283 6.32487 3.09075 10.3632 3.09075C14.4016 3.09075 17.6871 6.43283 17.6871 10.5408C17.6871 14.6488 14.4016 17.9909 10.3632 17.9909C6.3238 17.9909 3.03943 14.6488 3.03943 10.5408Z" fill="white"/>
                                </svg>
                                
                        </span>
                    </div>
                </div>
                <WeatherTime :weatherInfo="weatherInfo" />
                <div class="app-right-line">
                    <span>
                        <svg width="7" height="19" viewBox="0 0 7 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.494318 19H3.57955L5.76136 5.90909H2.67614L0.494318 19ZM4.67045 4.03409C5.65057 4.03409 6.51989 3.28409 6.58807 2.36364C6.66477 1.43466 5.93182 0.684658 4.9517 0.684658C3.96307 0.684658 3.10227 1.43466 3.01705 2.36364C2.94034 3.28409 3.69034 4.03409 4.67045 4.03409Z" fill="white"/>
                            </svg>
                            
                    </span>
                </div>
                <WeatherIndicators :AirQuality="AirQuality" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import url('./assets/styles/main.scss');
.wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.app {
    width: 1440px;
    display: flex;
    background: linear-gradient(248.66deg, #8C6BAE 0%, #F0B5CE 100%);
    height: 900px;
}
.app-left {
    // flex: 0 1 864px;
    width: 864px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 0 0 66px;
    position: relative;
}
.app-right {
    flex: 0 1 576px;
    height: 100%;
    background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
    box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(21px);
    padding: 38px 44px 93px;
}
.app-right-line {
    display: flex;
    align-items: center;
    margin-bottom: 49px;
    & span {
        min-width: 40px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.23);
        border-radius: 100%;
    }
    &::before {
        content: '';
        margin-right: 26px;
        height: 1px;
        position: relative;
        display: inline-flex;
        width: 100%;
        background-color: #FFFFFF;
    }
}

.app-right-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 77px;
    position: relative;
    width: 100%;
}
.app-right-top-name-city {
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: 32px;
    line-height: 120%;
    color: #FFFFFF;
    text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
    column-gap: 31px;
}
.app-right-top-input {
    background: linear-gradient(116.79deg, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.12) 99.45%);
    backdrop-filter: blur(50px);
    border-radius: 20px;
    height: 59px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 16.64px 17px 16px;
    & input {
        height: 100%;
        background-color: transparent;
        width: 100%;
        display: none;
        font-weight: 300;
        font-size: 19px;
        line-height: 120%;
        color: #FFFFFF;
    }
}
.app-right-top-btn {
    cursor: pointer;
}
.app-right-top-active {
    & .app-right-top-name-city {
        display: none;
    }
    & .app-right-top-input {
        width: 100%;
        background: url('./assets/img/rgb-input.png');
        backdrop-filter: blur(0);
        & input {
            display: flex;
        }
    }
}
</style>
