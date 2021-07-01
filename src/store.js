import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        colorTitleColor: '',
        colorCount: 6,
        isHard: true,
        colors: [],
        pickedColor: '',
        mensajeRestart: '',
        mensaje: ''
    },
    mutations: {
        resetGame(state, payload) {
            state.colors = payload.newColores;
            state.pickedColor = payload.newPickedColor;
            state.mensajeRestart = 'Nuevos colores';
            state.mensaje = '';
            state.colorTitleColor = '';
        },
        changeDifficulty(state, isHard) {
            if (state.isHard !== isHard) {
                state.isHard = isHard;
                state.colorCount = isHard ? 6 : 3;
            }
        },
        clickSquare(state, payload) {
            if (payload.color === state.pickedColor) {
				state.mensaje = "Correcto!";
				state.mensajeRestart = "Jugá de nuevo";
                state.colorTitleColor = state.pickedColor;
                for(const index in state.colors) {
                    state.colors.splice(index, 1, state.pickedColor);
                }
			} else {
                state.colors.splice(payload.removeIndex, 1, "#232323");
				state.mensaje = "Volvé a intentarlo!";
			}
        }
    }
})

export default store;