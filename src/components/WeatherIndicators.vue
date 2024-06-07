<script setup>
const props = defineProps({
    AirQuality: {
        type: [Object, null],
        required: true,
    }
})
var AirQualityType = [
    '',
    'Good',
    'Moderate',
    'Unhealthy for Sensitive Groups',
    'Unhealthy',
    'Very Unhealthy',
    'Hazardous'
]
</script>

<template>
    <div class="app-right-indicators">
        <div class="app-right-indicators-item">
            <div class="app-right-indicators-name">Air Quality</div>
            <div class="app-right-indicators-block">
                <div class="app-right-indicators-indicator">
                    <span> {{ Math.round(AirQuality?.list?.[0].main?.aqi) }} /6</span>
                    <span>{{ AirQualityType[Math.round(AirQuality?.list?.[0].main?.aqi)] }}</span>
                </div>
                <div
                :style="`transform: rotate(${Math.round(AirQuality?.list?.[0].main?.aqi) * 30}deg)`"
                class="app-right-indicators-crug">
                    <span></span>
                </div>
            </div>
        </div>
        <div class="app-right-indicators-item">
            <div class="app-right-indicators-name">UV Index</div>
            <div class="app-right-indicators-block">
                <div class="app-right-indicators-indicator">
                    <span>6/10</span>
                    <span>High</span>
                </div>
                <div style="transform: rotate(120deg);" class="app-right-indicators-crug">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-right-indicators {
    display: flex;
    column-gap: 90px;
}
.app-right-indicators-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.app-right-indicators-name {
    font-weight: 300;
    font-size: 28px;
    line-height: 120%;
    color: #FFFFFF;
    text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
    margin-bottom: 33px;
}
.app-right-indicators-block {
    width: 183.78px;
    height: 180px;
    background: url('../assets/img/rgb-crug.png');
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.app-right-indicators-indicator {
    font-weight: 300;
    font-size: 19px;
    line-height: 120%;
    text-align: center;
    color: #FFFFFF;
    text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
}
.app-right-indicators-crug {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    & span {
        display: inline-flex;
        background: #FDFDFD;
        position: absolute;
        transform-origin: 50% 80%;
        z-index: 8;
        border-radius: 10px;
        width: 16px;
        height: 16px;
        left: -2%;
        top: 45%;
    }
}
</style>