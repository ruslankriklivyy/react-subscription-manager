import { createEvent, createStore } from 'effector';
import { ISubsItem } from '../interfaces/interfaces';

// Events
export const addToSubsItems = createEvent<ISubsItem>();
export const removeItemFromSubs = createEvent<number>();
export const setIsVisibleModal = createEvent<boolean>();
export const setIsVisiblePicker = createEvent<boolean>();

/// Stores
export const $isVisibleModal = createStore(false).on(
  setIsVisibleModal,
  (state, visible) => visible,
);
export const $isVisiblePicker = createStore(false).on(
  setIsVisiblePicker,
  (state, visible) => visible,
);
export const $subsItems = createStore([
  { id: 1, name: 'Netflix', price: 14.5, payment: 1, color: [66, 153, 118] },
])
  .on(addToSubsItems, (state, sub) => [...state, sub])
  .on(removeItemFromSubs, (state, subId) => state.filter((item) => item.id !== subId));
