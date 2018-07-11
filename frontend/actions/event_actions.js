import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';

export const fetchEvents = () => {
  return (dispatch) => {
    return APIUtil.fetchEvents().then((payload) => {
      return dispatch(receiveEvents(payload));
    })
  }
}

export const fetchEvent = (id) => {
  return (dispatch) => {
    return APIUtil.fetchEvent(id).then((payload) => {
      return dispatch(receiveEvent(payload));
    })
  }
}

export const createEvent = (event) => {
  return dispatch => {
    return APIUtil.createEvent(event).then((payload) => {
      return dispatch(receiveEvent(payload));
    }, (err) => {
      return dispatch(receiveErrors(err.responseJSON));
    })
  }
}

export const updateEvent = (event) => {
  return dispatch => {
    return APIUtil.updateEvent(event).then((payload) => {
      return dispatch(receiveEvent(payload));
    }, (err) => {
      return dispatch(receiveErrors(err.responseJSON));
    })
  }
}

export const deleteEvent = (id) => {
  return dispatch => {
    return APIUtil.deleteEvent(id).then(() => {
      return dispatch(removeEvent(id));
    }, (err) => {
      return dispatch(receiveErrors(err.responseJSON));
    })
  }
}

export const receiveEvents = (payload) => {
  return {
    type: RECEIVE_EVENTS,
    events: payload.events,
    users: payload.users
  }
}

export const receiveEvent = (payload) => {
  return {
    type: RECEIVE_EVENT,
    event: payload.event,
    user: payload.user
  }
}

export const removeEvent = (id) => {
  return {
    type: REMOVE_EVENT,
    id: id
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_EVENT_ERRORS,
    errors: errors
  }
}
