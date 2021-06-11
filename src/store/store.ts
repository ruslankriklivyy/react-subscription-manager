import { createEvent, createStore } from 'effector';

export const setIsVisibleModal = createEvent<boolean>();

export const $isVisibleModal = createStore(false).on(
  setIsVisibleModal,
  (state, visible) => visible,
);

$isVisibleModal.watch((state) => {
  console.log(state);
});
