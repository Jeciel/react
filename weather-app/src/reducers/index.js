import { combineReducers} from 'redux';
import { createSelector } from 'reselect'
import { cities, getForeCastDataFromCities as _getForeCastDataFromCities } from './cities'
import { city } from './city'

export default combineReducers({
    cities, city
});

export const getCity = createSelector(state => state.city, city =>city);
export const getForeCastDataFromCities = createSelector(state =>state.cities, getCity, _getForeCastDataFromCities);


