import { createReducer } from '@reduxjs/toolkit';
import { addWidget, removeWidget } from './actions';

const initialState = {
  categories: [
    {
      id: 1,
      name: 'CSPM  Dashboard',
      widgets: [
        { id: 1, name: 'Cloud Accounts', text: 'Random text for Widget 1' },
        { id: 2, name: 'Cloud ACounts Management', text: 'Random text for Widget 2' },
      ],
    },
    {
      id: 2,
      name: 'CWPP Dashboard',
      widgets: [{ id: 3, name: 'Workload Alerts', text: 'Random text for Widget 3' },
        { id: 4, name: 'Namespaces of companies', text: 'Random text for Widget 4' }
      ],
    },
    {
        id: 3,
        name: 'TSW Scan',
        widgets: [{ id: 5, name: 'Security', text: 'Random text for Widget 5' },
          { id: 6, name: 'Privacy', text: 'Random text for Widget 6' }
        ],
      }
  ],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addWidget, (state, action) => {
      const { categoryId, name, text } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      const newWidget = {
        id: Date.now(),
        name,
        text,
      };
      category.widgets.push(newWidget);
    })
    .addCase(removeWidget, (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);
      category.widgets = category.widgets.filter((widget) => widget.id !== widgetId);
    });
});

export default reducer;
