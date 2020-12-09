import Vue from 'vue'

export const state = Vue.observable({
    chartsContent: {one: [], two: [], three: [], four: []},
    currentTabIndex: 0
})
export const actions = {
    updateChartsContent() {
        return fetch('http://192.168.123.60:8000/api/all')
            .then(response => {
                response.json().then(data => {
                    state.chartsContent = data
                    console.log(data)
                })
            }).finally(() => {
                // do something at finally
            })
    },
    setCurrentTabIndex(index) {
        state.currentTabIndex = index
    }
}

