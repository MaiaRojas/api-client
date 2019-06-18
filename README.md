# Capa de abstracción para API de Laboratoria

Esta biblioteca es una capa de abstracción de la API, que funciona con React y
Redux. La intención es concentrar todas las tareas comunes que se hacen al
conectar una API con una aplicación que ya está usando react+redux.

En esta biblioteca ya están creados los reducidores, así como también las
acciones para manejar llamadas por GET y POST.

## Instalación

```bash
npm i --save laboratoria-apiclient
```
ó
```bash
yarn add laboratoria-apiclient 
```

## Configuración

Dentro del proyecto es necesario hacer algunos pasos antes de poder usar esta
biblioteca.

### Configuración inicial

Usando la variable de entorno _REACT_APP_API_URL_ se define la url de la API que
será usada :

```bash
REACT_APP_API_URL=https://api.laboratoria.la
```

En el archivo index.js se debe colocar la lista de endpoints que se usará en la
aplicación, de esta forma podemos controlar el lugar donde se guardará la
respuesta en el estado de redux, así como también la ruta relativa de la llamada
:

```javascript
import APIClient from 'laboratoria-apiclient';

APIClient.setAPIActions([
  {
    type: 'GET_USER_PROFILE',
    relativeUrl: '/v2/users/:id',
    method: 'GET',
    saveResponseTo: 'profile'
  }
])
```

También, si es que la API está protegida mediante un sistema de tokens, se puede
introducir una función (síncrona o asíncrona, que use _async_ o _promise_) que
retorne una _API key_ :

```javascript
APIClient.setAPIKeyGenerator(() => 'theAPIKey');
```

### Conexión de reducers

Se debe importar el módulo principal _APIClient_, y luego obtener el reducer a
través del método _getAPIReducers_, como se muestra en el siguiente ejemplo :

```javascript
import APIClient from 'laboratoria-apiclient';

export default combineReducers({
  ...APIClient.getAPIReducers(),
});
```

## Hacer una llamada a la API

Es necesario que en el componente pasemos el _dispatch_ que provee redux a la
acción que haremos, de la siguiente forma :

```javascript
import APIClient from 'laboratoria-apiclient';

const mapDispatchToProps = (dispatch) => {
  getProfile : (userId) => APIClient.doAPICall(dispatch)(
    'GET_USER_PROFILE',
    {
      userId
    }
  ),
}
```

Aunque también se puede poner algo más genérico para hacer cualquier llamada GET
o POST que se quiera.