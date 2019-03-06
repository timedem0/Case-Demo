import ActionTypes from './ActionTypes';
import { fetchTestCategories } from '../models/Test';
import Category from '../models/Category';

// SHOW ALL
export const categoriesAll_REQ = () => ({
  type: ActionTypes.CATEGORIES_ALL_REQ,
});
export const categoriesAll_OK = (categoryList) => ({
  type: ActionTypes.CATEGORIES_ALL_OK,
  categoryList: categoryList
});
export const categoriesAll_X = () => ({
  type: ActionTypes.CATEGORIES_ALL_X,
});

export function fetchAllCategories() {
  return async (dispatch, getState) => {
    dispatch(categoriesAll_REQ());
    const categoryList = fetchTestCategories();
    if (categoryList.length === 0) {
      dispatch(categoriesAll_X());
    } else {
      dispatch(categoriesAll_OK(categoryList));
    }
  }
};

// ADD
export const categoryAdd_REQ = () => ({
  type: ActionTypes.CATEGORY_ADD_REQ,
});
export const categoryAdd_OK = (category) => ({
  type: ActionTypes.CATEGORY_ADD_OK,
  category: category,
});
export const categoryAdd_X = () => ({
  type: ActionTypes.CATEGORY_ADD_X,
});

export function addCategory(category) {
  return async (dispatch, getState) => {
    dispatch(categoryAdd_REQ());
    // Here would be some async AJAX call with await...
    // ... or some promises or so
    // console.dir(category);

    if (!category.id || !category.name || !category.budget) {
      dispatch(categoryAdd_X());
    } else {
      dispatch(categoryAdd_OK(category));
    }
  }
};

// CATEGORY RANDOM
export const categoryRnd_REQ = () => ({
  type: ActionTypes.CATEGORY_RND_REQ,
});
export const categoryRnd_OK = (categoryRnd) => ({
  type: ActionTypes.CATEGORY_RND_OK,
  category: categoryRnd,
});
export const categoryRnd_X = (categoryDef) => ({
  type: ActionTypes.CATEGORY_RND_X,
  category: categoryDef,
});

export function fetchRndCategory() {
  return async (dispatch, getState) => {
    dispatch(categoryRnd_REQ());
    const categoryList = getState().categories.categoryList;
    const categoryRnd = [categoryList[Math.floor(Math.random() * categoryList.length)]];
    if (categoryList.length === 0) {
      dispatch(categoryRnd_X([new Category('00', 'Category List is Empty', 0,)]));
    } else {
      dispatch(categoryRnd_OK(categoryRnd));
    }
  }
};

// DELETE
export const categoryDel_REQ = () => ({
  type: ActionTypes.CATEGORY_DEL_REQ,
});
export const categoryDel_OK = (newList) => ({
  type: ActionTypes.CATEGORY_DEL_OK,
  categoryList: newList,
});
export const categoryDel_X = () => ({
  type: ActionTypes.CATEGORY_DEL_X,
});

export function deleteCategory(idToChk) {
  return async (dispatch, getState) => {
    dispatch(categoryDel_REQ());
    const categoryList = getState().categories.categoryList;
  
    if (idToChk !== null) {
      const newList = categoryList.filter(
        (element) => {
          return element.id !== idToChk;
        }
      );
      dispatch(categoryDel_OK(newList));
    } else {
      dispatch(categoryDel_X());
    }
    
    /*
    for (let i = 0; i < categoryList.length; i++) { 
      if (categoryList[i].id === id) {
        console.log(i);
        categoryList.splice(i, 1); 
        dispatch(categoryDel_OK());
      }
    } 
    */
  
  }
};
