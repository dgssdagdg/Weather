<script setup>
import { computed } from 'vue';
import { getTime, getAmTime } from '../utils';
const props = defineProps({
    weatherInfo: {
        type: [Object, null],
        required: true,
    }
})


const timezone = computed(() => props.weatherInfo?.timezone)
const sunriseTime = computed(() => {
    return getTime(props.weatherInfo?.sys?.sunrise + timezone.value)
})
const sunsetTime = computed(() => {
    return getTime(props.weatherInfo?.sys?.sunset + timezone.value)
})
const sunsetGoldHourtTime = computed(() => {
    return getAmTime(props.weatherInfo?.sys?.sunset + timezone.value)
})
const sunriseGoldHourtTime = computed(() => {
    return getAmTime(props.weatherInfo?.sys?.sunrise + timezone.value)
})
</script>

<template>
    <div class="app-right-times">
        <div class="app-right-times-block">
            <div class="app-right-times-title">Sunrise</div>
            <div class="app-right-times-time">
                <div class="app-right-times-arrows">
                    <div style="transform: rotate(-15.65deg);" class="app-right-hours-container">
                        <div class="hours"></div>
                    </div>
                    <div style="transform: rotate(-90deg);" class="app-right-minutes-container">
                        <div class="minutes"></div>
                    </div>
                    <div style="transform: rotate(44.33deg);" class="app-right-seconds-container">
                        <div class="seconds"></div>
                    </div>
                </div>
                <div class="app-right-times-period">
                    <span>{{ sunriseTime }}</span>
                    <span>{{ sunriseTime }}</span>
                </div>
            </div>
        </div>
        <div class="app-right-times-block app-right-times-gold-time">
            <div class="app-right-times-title">Golden Hour</div>
            <div class="app-right-times-time">
                <div class="app-right-times-arrows">
                    <div style="transform: rotate(-15.65deg);" class="app-right-hours-container">
                        <div class="hours"></div>
                    </div>
                    <div style="transform: rotate(-90deg);" class="app-right-minutes-container">
                        <div class="minutes"></div>
                    </div>
                    <div style="transform: rotate(44.33deg);" class="app-right-seconds-container">
                        <div class="seconds"></div>
                    </div>
                </div>
                <div class="app-right-times-period">
                    <span>{{ sunriseGoldHourtTime }}</span>
                    <span>{{ sunsetGoldHourtTime  }}</span>
                </div>
            </div>
        </div>
        <div class="app-right-times-block">
            <div class="app-right-times-title">Sunset</div>
            <div class="app-right-times-time">
                <div class="app-right-times-arrows">
                    <div style="transform: rotate(-15.65deg);" class="app-right-hours-container">
                        <div class="hours"></div>
                    </div>
                    <div style="transform: rotate(-90deg);" class="app-right-minutes-container">
                        <div class="minutes"></div>
                    </div>
                    <div style="transform: rotate(44.33deg);" class="app-right-seconds-container">
                        <div class="seconds"></div>
                    </div>
                </div>
                <div class="app-right-times-period">
                    <span>{{ sunsetTime }}</span>
                    <span>{{ sunsetTime }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-right-times {
    display: flex;
    align-items: flex-end;
    column-gap: 43px;
    margin-bottom: 49px;
}
.app-right-times-block {
    display: flex;
    align-items: center;
    flex-direction: column;
    & .app-right-times-period span:first-child {
        margin-bottom: 7.19px;
    }
    & .minutes {
        height: 50%;
        top: 0;
        width: 4px;
    }
    & .hours {
        width: 4px;
        height: 30%;
        top: 25%;
    }
    & .seconds {
        height: 70%;
        top: -13%;
        width: 2px;
    }
}
.app-right-times-title {
    font-weight: 300;
    font-size: 28px;
    line-height: 120%;
    color: #FFFFFF;
    text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
    margin-bottom: 28px;
}
.app-right-times-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 105px;
    background: rgba(255, 255, 255, 0.26);
    border-radius: 100px;
    height: 210px;
}
.app-right-times-arrows {
    border-radius: 50%;
    height: 69px;
    position: relative;
    width: 20em;
    margin-bottom: 8px;
} 
.app-right-hours-container, .app-right-minutes-container, .app-right-seconds-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.app-right-hours-container {
    z-index: 2;
}
.app-right-minutes-container {
    z-index: 1;
}
.hours {
    background: #E0E0E0;
    left: 48.75%;
    position: absolute;
    transform-origin: 50% 100%;
    border-radius: 10px;
    z-index: 1;
}
.minutes {
    background: #000;
    left: 49%;
    position: absolute;
    transform-origin: 50% 100%;
    border-radius: 10px;
}
.seconds {
    background: #885FFC;
    left: 49.5%;
    position: absolute;
    transform-origin: 50% 80%;
    z-index: 8;
    border-radius: 10px;
    
}

.app-right-times-period {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    font-size: 28px;
    line-height: calc(34 / 28 * 100%);
    color: #FFFFFF;
    & span:nth-of-type(2) {
        font-size: 22px;
        line-height: calc(27 / 22 * 100%);
    }
}
.app-right-times-gold-time {
    & .hours {
        height: 40%;
        top: 15%;
        width: 4px;
    }
    & .minutes {
        height: 70%;
        top: -20%;
        width: 4px;
    }
    & .seconds {
        height: 70%;
        top: -20%;
        width: 2px;
    }
    & .app-right-times-arrows {
        height: 76px;
        margin-bottom: 12px;
    }
    & .app-right-times-title {
        margin-bottom: 36px;
    }
    & .app-right-times-time {
        width: 130px;
        height: 245px;
    }
    & .app-right-times-period {
        font-weight: 400;
        font-size: 29px;
        line-height: calc(35 / 29 * 100%);
        color: #FFFFFF;
        & span:first-child {
            margin-bottom: 12px;
        }
    }
    & span:nth-of-type(2) {
        font-size: 24px;
        line-height: calc(29 / 24 * 100%);
    }
}
</style>