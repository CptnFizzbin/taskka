const ACTION_TYPES = {
  ACCESS_TOKEN: {
    SET: 'ACCESS_TOKEN.SET',
    REMOVE: 'ACCESS_TOKEN.REMOVE',
  },
  PROJECTS: {
    SET: 'PROJECTS.SET',
    ADD: 'PROJECTS.ADD',
    UPDATE: 'PROJECTS.UPDATE',
    DELETE: 'PROJECTS.DELETE',
    SET_CURRENT: 'PROJECTS.SET_CURRENT',
  },
  TASKS: {
    SET: 'TASKS.SET',
    ADD: 'TASKS.ADD',
    UPDATE: 'TASKS.UPDATE',
    DELETE: 'TASKS.DELETE',
  },
  UI: {
    PROJECTS_PANEL: {
      OPEN: 'UI.PROJECTS_PANEL.OPEN',
      CLOSE: 'UI.PROJECTS_PANEL.CLOSE',
    },
  },
  USER: {
    SET: 'USER.SET',
    LOGIN: 'USER.LOGIN',
    LOGOUT: 'USER.LOGOUT',
  }
};


export default ACTION_TYPES;
