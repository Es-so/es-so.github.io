import { tags } from '../utils/projects';

export const TAGS_LOADED = 'contact/loadTags';

export const tagsLoaded = tags => ({
  type: TAGS_LOADED,
  tags,
});

export const loadTags = () => (dispatch) => {
  const allTags = tags;
  dispatch(tagsLoaded(allTags));
}
