import axios from "axios";
import router from "../../router/index";
import { URL } from "../urlBackend"

const state = {
    user: {},
    registerMessage: "",
    snackbar: false,
    loading: false
};

const getters = {};

const actions = {
    registerUser({ commit }, user) {
        commit("setLoading", true);
        axios
            .post(URL + "api/user/register", {
                name: user.name + " " + user.lastName,
                email: user.email,
                verifierCode: user.verifierCode,
                password: user.password,
            })
            .then((response) => {

                if (response.data.status === "c8usu0") {
                    commit("setSnackbar", true);
                    commit("setRegisterMessage", "");
                    commit("setLoading", false);
                    router.push("/login")
                } else if (response.data.errors) {
                    let errorsJson = response.data.errors
                    let errors = "";
                    // SE RECORRE EL JSON DE ERRORES
                    for (var key of Object.keys(errorsJson)) {
                        errors = errors + errorsJson[key] + ", "
                    }
                    commit("setRegisterMessage", errors);
                    commit("setLoading", false);
                }
                else if (response.data.status === "1F4usu0") {
                    commit("setRegisterMessage", "Ocurrio un error en el servidor, por favor intente más tarde");
                    commit("setLoading", false);
                }
            })
            .catch((error) => {
                console.log(error);
                commit("setLoading", false);
            });
    },
};

const mutations = {

    setRegisterMessage(state, data) {
        state.registerMessage = data;
    },

    setSnackbar(state, data) {
        state.snackbar = data;
    },

    setLoading(state, data) {
        state.loading = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
