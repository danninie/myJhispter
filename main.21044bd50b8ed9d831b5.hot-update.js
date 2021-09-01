webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/modules/account/password/password.reducer.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/password/password.reducer.ts ***!
  \**************************************************************************/
/*! exports provided: ACTION_TYPES, default, savePassword, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePassword", function() { return savePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");




const ACTION_TYPES = {
    UPDATE_PASSWORD: 'account/UPDATE_PASSWORD',
    RESET: 'account/RESET',
};
const initialState = {
    loading: false,
    errorMessage: null,
    updateSuccess: false,
    updateFailure: false,
};
// Reducer
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
    if (action.type === Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_2__["SUCCESS"])(ACTION_TYPES.UPDATE_PASSWORD)) {
        const success = action.payload.data.data.updateUser.user.length > 0 ? true : false;
        if (success) {
            react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success(Object(react_jhipster__WEBPACK_IMPORTED_MODULE_1__["translate"])('password.messages.success'));
            return Object.assign(Object.assign({}, initialState), { loading: false, updateSuccess: true, updateFailure: false });
        }
        else {
            react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error(Object(react_jhipster__WEBPACK_IMPORTED_MODULE_1__["translate"])('password.messages.error'));
            return Object.assign(Object.assign({}, initialState), { loading: false, updateSuccess: false, updateFailure: true });
        }
    }
    switch (action.type) {
        case Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_2__["REQUEST"])(ACTION_TYPES.UPDATE_PASSWORD):
            return Object.assign(Object.assign({}, initialState), { errorMessage: null, updateSuccess: false, loading: true });
        case Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_2__["FAILURE"])(ACTION_TYPES.UPDATE_PASSWORD):
            return Object.assign(Object.assign({}, initialState), { loading: false, updateSuccess: false, updateFailure: true });
        case Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_2__["SUCCESS"])(ACTION_TYPES.UPDATE_PASSWORD):
            return Object.assign(Object.assign({}, initialState), { loading: false, updateSuccess: true, updateFailure: false });
        case ACTION_TYPES.RESET:
            return Object.assign({}, initialState);
        default:
            return state;
    }
});
// Actions
const apiUrl = 'api/account';
const savePassword = (currentPassword, newPassword) => (dispatch, getState) => {
    const body = {
        query: `mutation {
      updateUser(input: {filter: {login: {eq: "${getState().authentication.account.login}"}, password: {eq: "${currentPassword}"}}, set: {password: "${newPassword}"}}) {
        user {
          login
        }
      }
    }`,
    };
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzL3Byb3h5IiwiZHVpZCI6IjB4MjJjYjJiYyIsImV4cCI6MTYyODkzODQ1MiwiaXNzIjoicy9hcGkifQ.g8bPCjN1PFb9pAPydPrrVKfPeMTWtqfeXpjGqmVs-2c',
        },
    };
    dispatch({
        type: ACTION_TYPES.UPDATE_PASSWORD,
        payload: axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('graphql', body, options),
    });
};
const reset = () => ({
    type: ACTION_TYPES.RESET,
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "F:\\work\\tuo\\2021\\mytry\\DeployToGithub\\MyJhispter\\src\\main\\webapp\\app\\modules\\account\\password\\password.reducer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "F:\\work\\tuo\\2021\\mytry\\DeployToGithub\\MyJhispter\\src\\main\\webapp\\app\\modules\\account\\password\\password.reducer.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/modules/account/settings/settings.reducer.ts":
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/settings/settings.reducer.ts ***!
  \**************************************************************************/
/*! exports provided: ACTION_TYPES, default, saveAccountSettings, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAccountSettings", function() { return saveAccountSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");






const ACTION_TYPES = {
    UPDATE_ACCOUNT: 'account/UPDATE_ACCOUNT',
    RESET: 'account/RESET',
};
const initialState = {
    loading: false,
    errorMessage: null,
    updateSuccess: false,
    updateFailure: false,
};
// Reducer
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
    if (action.type === Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__["SUCCESS"])(ACTION_TYPES.UPDATE_ACCOUNT)) {
        const success = action.payload.data.data.updateUser.user.length > 0 ? true : false;
        if (success) {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success(Object(react_jhipster__WEBPACK_IMPORTED_MODULE_2__["translate"])('settings.messages.success'));
            return Object.assign(Object.assign({}, state), { loading: false, updateSuccess: true, updateFailure: false });
        }
        else {
            react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].error(Object(react_jhipster__WEBPACK_IMPORTED_MODULE_2__["translate"])('settings.messages.error.fail'));
            return Object.assign(Object.assign({}, state), { loading: false, updateSuccess: false, updateFailure: true });
        }
    }
    switch (action.type) {
        case Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__["REQUEST"])(ACTION_TYPES.UPDATE_ACCOUNT):
            return Object.assign(Object.assign({}, state), { errorMessage: null, updateSuccess: false, loading: true });
        case Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__["FAILURE"])(ACTION_TYPES.UPDATE_ACCOUNT):
            return Object.assign(Object.assign({}, state), { loading: false, updateSuccess: false, updateFailure: true });
        case Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__["SUCCESS"])(ACTION_TYPES.UPDATE_ACCOUNT):
            return Object.assign(Object.assign({}, state), { loading: false, updateSuccess: true, updateFailure: false });
        case ACTION_TYPES.RESET:
            return Object.assign({}, initialState);
        default:
            return state;
    }
});
// Actions
const apiUrl = 'api/account';
const saveAccountSettings = account => (dispatch) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const body = {
        query: `mutation {
      updateUser(input: {filter: {login: {eq: "${account.login}"}}, set: {email: "${account.email}", firstName: "${account.firstName}", langKey: "${account.langKey}", lastName: "${account.lastName}"}}) {
        user {
          login
          firstName
          email
          lastName
          langKey
        }
      }
    }`,
    };
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzL3Byb3h5IiwiZHVpZCI6IjB4MjJjYjJiYyIsImV4cCI6MTYyODkzODQ1MiwiaXNzIjoicy9hcGkifQ.g8bPCjN1PFb9pAPydPrrVKfPeMTWtqfeXpjGqmVs-2c',
        },
    };
    yield dispatch({
        type: ACTION_TYPES.UPDATE_ACCOUNT,
        payload: axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('graphql', body, options),
    });
    if (react_jhipster__WEBPACK_IMPORTED_MODULE_2__["Storage"].session.get(`locale`)) {
        react_jhipster__WEBPACK_IMPORTED_MODULE_2__["Storage"].session.remove(`locale`);
    }
    yield dispatch(Object(app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__["getSession"])());
});
const reset = () => ({
    type: ACTION_TYPES.RESET,
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "F:\\work\\tuo\\2021\\mytry\\DeployToGithub\\MyJhispter\\src\\main\\webapp\\app\\modules\\account\\settings\\settings.reducer.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "F:\\work\\tuo\\2021\\mytry\\DeployToGithub\\MyJhispter\\src\\main\\webapp\\app\\modules\\account\\settings\\settings.reducer.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/reducers/application-profile.ts":
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/shared/reducers/application-profile.ts ***!
  \********************************************************************/
/*! exports provided: ACTION_TYPES, default, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");

const ACTION_TYPES = {
    GET_PROFILE: 'applicationProfile/GET_PROFILE',
};
const initialState = {
    ribbonEnv: '',
    inProduction: true,
    isSwaggerEnabled: false,
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
    switch (action.type) {
        case Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_0__["SUCCESS"])(ACTION_TYPES.GET_PROFILE): {
            const { data } = action.payload;
            return Object.assign(Object.assign({}, state), { ribbonEnv: data['display-ribbon-on-profiles'], inProduction: data.activeProfiles.includes('prod'), isSwaggerEnabled: data.activeProfiles.includes('swagger') });
        }
        default:
            return state;
    }
});
const getProfile = () => ({
    type: ACTION_TYPES.GET_PROFILE,
    payload: {
        data: {
            'display-ribbon-on-profiles': 'dev',
            activeProfiles: ['swagger', 'dev'],
        },
    },
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "F:\\work\\tuo\\2021\\mytry\\DeployToGithub\\MyJhispter\\src\\main\\webapp\\app\\shared\\reducers\\application-profile.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "F:\\work\\tuo\\2021\\mytry\\DeployToGithub\\MyJhispter\\src\\main\\webapp\\app\\shared\\reducers\\application-profile.ts"); } }(); 

/***/ }),

/***/ "./src/main/webapp/app/shared/reducers/authentication.ts":
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/shared/reducers/authentication.ts ***!
  \***************************************************************/
/*! exports provided: ACTION_TYPES, default, displayAuthError, getSession, login, clearAuthToken, logout, clearAuthentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_TYPES", function() { return ACTION_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayAuthError", function() { return displayAuthError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAuthToken", function() { return clearAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAuthentication", function() { return clearAuthentication; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/reducers/action-type.util */ "./src/main/webapp/app/shared/reducers/action-type.util.ts");
/* harmony import */ var app_shared_reducers_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/reducers/locale */ "./src/main/webapp/app/shared/reducers/locale.ts");





const ACTION_TYPES = {
    LOGIN: 'authentication/LOGIN',
    GET_SESSION: 'authentication/GET_SESSION',
    LOGOUT: 'authentication/LOGOUT',
    CLEAR_AUTH: 'authentication/CLEAR_AUTH',
    ERROR_MESSAGE: 'authentication/ERROR_MESSAGE',
};
const AUTH_TOKEN_KEY = 'jhi-authenticationToken';
const initialState = {
    loading: false,
    isAuthenticated: false,
    loginSuccess: false,
    loginError: false,
    showModalLogin: false,
    account: {},
    errorMessage: null,
    redirectMessage: null,
    sessionHasBeenFetched: false,
    idToken: null,
    logoutUrl: null,
};
// Reducer
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
    if (action.type === Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__["SUCCESS"])(ACTION_TYPES.LOGIN)) {
        const success = action.payload.data.data.queryUser.length > 0 ? true : false;
        if (success) {
            const accountObj = action.payload.data.data.queryUser[0];
            accountObj.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
            accountObj.activated = true;
            return Object.assign(Object.assign({}, state), { loading: false, loginError: false, showModalLogin: false, loginSuccess: true, isAuthenticated: true, sessionHasBeenFetched: true, account: accountObj });
        }
        else {
            return Object.assign(Object.assign({}, initialState), { errorMessage: 'Access denied. You do not have permission to access', showModalLogin: true, loginError: true, isAuthenticated: false, sessionHasBeenFetched: true });
        }
    }
    if (action.type === Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__["SUCCESS"])(ACTION_TYPES.GET_SESSION)) {
        const success = action.payload.data.data.getUser ? true : false;
        if (success) {
            const accountObj = action.payload.data.data.getUser;
            accountObj.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
            accountObj.activated = true;
            const isAuthenticated = true;
            return Object.assign(Object.assign({}, state), { isAuthenticated, loading: false, sessionHasBeenFetched: true, account: accountObj });
        }
        else {
            return Object.assign(Object.assign({}, state), { loading: false, isAuthenticated: false, sessionHasBeenFetched: true, showModalLogin: true, errorMessage: 'Access denied. You do not have permission to access' });
        }
    }
    switch (action.type) {
        case Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__["REQUEST"])(ACTION_TYPES.LOGIN):
        case Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__["REQUEST"])(ACTION_TYPES.GET_SESSION):
            return Object.assign(Object.assign({}, state), { loading: true });
        case Object(app_shared_reducers_action_type_util__WEBPACK_IMPORTED_MODULE_3__["FAILURE"])(ACTION_TYPES.LOGIN):
            return Object.assign(Object.assign({}, initialState), { errorMessage: action.payload, showModalLogin: true, loginError: true });
        // case FAILURE(ACTION_TYPES.GET_SESSION):
        //   return {
        //     ...state,
        //     loading: false,
        //     isAuthenticated: false,
        //     sessionHasBeenFetched: true,
        //     showModalLogin: true,
        //     errorMessage: action.payload,
        //   };
        // case SUCCESS(ACTION_TYPES.LOGIN):
        //   return {
        //     ...state,
        //     loading: false,
        //     loginError: false,
        //     showModalLogin: false,
        //     loginSuccess: true,
        //   };
        case ACTION_TYPES.LOGOUT:
            return Object.assign(Object.assign({}, initialState), { showModalLogin: true });
        // case SUCCESS(ACTION_TYPES.GET_SESSION): {
        //   const isAuthenticated = action.payload && action.payload.data && action.payload.data.activated;
        //   return {
        //     ...state,
        //     isAuthenticated,
        //     loading: false,
        //     sessionHasBeenFetched: true,
        //     account: action.payload.data,
        //   };
        // }
        case ACTION_TYPES.ERROR_MESSAGE:
            return Object.assign(Object.assign({}, initialState), { showModalLogin: true, redirectMessage: action.message });
        case ACTION_TYPES.CLEAR_AUTH:
            return Object.assign(Object.assign({}, state), { loading: false, showModalLogin: true, isAuthenticated: false });
        default:
            return state;
    }
});
const displayAuthError = message => ({ type: ACTION_TYPES.ERROR_MESSAGE, message });
const setlangKey = () => (dispatch, getState) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const { account } = getState().authentication;
    if (account && account.langKey) {
        const langKey = react_jhipster__WEBPACK_IMPORTED_MODULE_2__["Storage"].session.get('locale', account.langKey);
        yield dispatch(Object(app_shared_reducers_locale__WEBPACK_IMPORTED_MODULE_4__["setLocale"])(langKey));
    }
});
const getSession = () => (dispatch, getState) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const body = {
        query: `query {getUser(login: "${getState().authentication.account.login}") {
        login
        email
        langKey
        firstName
        lastName
      }
    }`,
    };
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzL3Byb3h5IiwiZHVpZCI6IjB4MjJjYjJiYyIsImV4cCI6MTYyODkzODQ1MiwiaXNzIjoicy9hcGkifQ.g8bPCjN1PFb9pAPydPrrVKfPeMTWtqfeXpjGqmVs-2c',
        },
    };
    yield dispatch({
        type: ACTION_TYPES.GET_SESSION,
        payload: axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('graphql', body, options),
    });
    yield dispatch(setlangKey());
    // const { account } = getState().authentication;
    // if (account && account.langKey) {
    //   const langKey = Storage.session.get('locale', account.langKey);
    //   await dispatch(setLocale(langKey));
    // }
});
const login = (username, password, rememberMe = false) => (dispatch, getState) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const body = {
        query: `query { queryUser(filter: {login: {eq: "${username}"}, password: {eq: "${password}"}}) {
        login
        email
        langKey
        firstName     
        lastName
      }
    }`,
    };
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzL3Byb3h5IiwiZHVpZCI6IjB4MjJjYjJiYyIsImV4cCI6MTYyODkzODQ1MiwiaXNzIjoicy9hcGkifQ.g8bPCjN1PFb9pAPydPrrVKfPeMTWtqfeXpjGqmVs-2c',
        },
    };
    const result = yield dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('graphql', body, options),
    });
    const bearerToken = 'Bearer result.value.headers.authorization';
    // if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
    const jwt = bearerToken.slice(7, bearerToken.length);
    if (rememberMe) {
        react_jhipster__WEBPACK_IMPORTED_MODULE_2__["Storage"].local.set(AUTH_TOKEN_KEY, jwt);
    }
    else {
        react_jhipster__WEBPACK_IMPORTED_MODULE_2__["Storage"].session.set(AUTH_TOKEN_KEY, jwt);
    }
    // }
    // await dispatch(getSession());
    yield dispatch(setlangKey());
});
const clearAuthToken = () => {
    if (react_jhipster__WEBPACK_IMPORTED_MODULE_2__["Storage"].local.get(AUTH_TOKEN_KEY)) {
        react_jhipster__WEBPACK_IMPORTED_MODULE_2__["Storage"].local.remove(AUTH_TOKEN_KEY);
    }
    if (react_jhipster__WEBPACK_IMPORTED_MODULE_2__["Storage"].session.get(AUTH_TOKEN_KEY)) {
        react_jhipster__WEBPACK_IMPORTED_MODULE_2__["Storage"].session.remove(AUTH_TOKEN_KEY);
    }
};
const logout = () => dispatch => {
    clearAuthToken();
    dispatch({
        type: ACTION_TYPES.LOGOUT,
    });
};
const clearAuthentication = messageKey => (dispatch, getState) => {
    clearAuthToken();
    dispatch(displayAuthError(messageKey));
    dispatch({
        type: ACTION_TYPES.CLEAR_AUTH,
    });
};

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "F:\\work\\tuo\\2021\\mytry\\DeployToGithub\\MyJhispter\\src\\main\\webapp\\app\\shared\\reducers\\authentication.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "F:\\work\\tuo\\2021\\mytry\\DeployToGithub\\MyJhispter\\src\\main\\webapp\\app\\shared\\reducers\\authentication.ts"); } }(); 

/***/ })

})
//# sourceMappingURL=main.21044bd50b8ed9d831b5.hot-update.js.map