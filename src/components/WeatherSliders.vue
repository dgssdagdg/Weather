<script setup>
</script>
<template>
    <div class="app-left-sliders">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="app-left-sliders-item">
                    <div class="app-left-sliders-degree">24°C</div>
                    <div class="app-left-sliders-weather-img">
                        <img src="../assets/img/weather-slider/cloudy.png" alt="Weather">
                    </div>
                    <div class="app-left-sliders-week">Sun</div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="app-left-sliders-item">
                    <div class="app-left-sliders-degree">24°C</div>
                    <div class="app-left-sliders-weather-img">
                        <img src="../assets/img/weather-slider/cloudy.png" alt="Weather">
                    </div>
                    <div class="app-left-sliders-week">Mon</div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="app-left-sliders-item">
                    <div class="app-left-sliders-degree">24°C</div>
                    <div class="app-left-sliders-weather-img">
                        <img src="../assets/img/weather-slider/cloudy.png" alt="Weather">
                    </div>
                    <div class="app-left-sliders-week">Tue</div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="app-left-sliders-item">
                    <div class="app-left-sliders-degree">24°C</div>
                    <div class="app-left-sliders-weather-img">
                        <img src="../assets/img/weather-slider/cloudy.png" alt="Weather">
                    </div>
                    <div class="app-left-sliders-week">Wed</div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="app-left-sliders-item">
                    <div class="app-left-sliders-degree">24°C</div>
                    <div class="app-left-sliders-weather-img">
                        <img src="../assets/img/weather-slider/cloudy.png" alt="Weather">
                    </div>
                    <div class="app-left-sliders-week">Thu</div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="app-left-sliders-item">
                    <div class="app-left-sliders-degree">24°C</div>
                    <div class="app-left-sliders-weather-img">
                        <img src="../assets/img/weather-slider/cloudy.png" alt="Weather">
                    </div>
                    <div class="app-left-sliders-week">Fri</div>
                </div>
            </div>
            <!-- <div class="swiper-slide">
                <div class="app-left-sliders-item">
                    <div class="app-left-sliders-degree">24°C</div>
                    <div class="app-left-sliders-weather-img">
                        <img src="../assets/img/weather-slider/cloudy.png" alt="Weather">
                    </div>
                    <div class="app-left-sliders-week">Sat</div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-left-sliders {
    width: 602px;
    height: 200px;
    position: relative;
}
.swiper-wrapper {
    width: 100%;
    display: flex;
    column-gap: 10px;
}
.swiper-slide {
    max-width: 110px;
    height: 100%;
}
.app-left-sliders-item {
    max-width: 110px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16.36px 14.4px 16px;
    background: rgba(255, 255, 255, 0.2);
    filter: blur(0.569258px);
    border-radius: 11.3852px;
}
.app-left-sliders-degree {
    font-family: 'Overpass';
    font-weight: 400;
    font-size: 24px;
    line-height: calc(30 / 24 * 100%);
    text-align: center;
    color: #FFFFFF;
    text-shadow: -1.13852px 1.70778px 0.569258px rgba(0, 0, 0, 0.1);
    margin-bottom: 8px;
}
.app-left-sliders-weather-img {
    margin-bottom: 8px;
}
.app-left-sliders-week {
    font-family: 'Overpass';
    font-weight: 400;
    font-size: 24px;
    line-height: calc(30 / 24 * 100%);
    text-align: center;
    color: #FFFFFF;
    text-shadow: -1.13852px 1.70778px 0.569258px rgba(0, 0, 0, 0.1);
}
.app-left-button-next {
    position: absolute;
    top: 45%;
    right: -100px;
    z-index: 1;
    cursor: pointer;
}
.swiper-slide {
    opacity: 1;
    visibility: visible;
    transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
  }
  .swiper-slide-active {
    opacity: 1;
    visibility: visible;
  }
  .swiper-slide-active + .swiper-slide {
    opacity: 1;
    visibility: visible;
  }
  .swiper-slide-active + .swiper-slide + .swiper-slide {
    opacity: 1;
    visibility: visible;
  }
  .swiper-slide-active + .swiper-slide + .swiper-slide + .swiper-slide {
    opacity: 1;
    visibility: visible;
  }
</style>