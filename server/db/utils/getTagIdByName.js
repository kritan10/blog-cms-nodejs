import _ from 'lodash';

/**
 *
 * @param {string} tag
 */
function getTagIdByName(tag) {
	const val = _.toLower(tag);
	switch (val) {
		case 'blogging':
			return 1;
		case 'writing':
			return 2;
		case 'content':
			return 3;
		case 'inspiration':
			return 4;
		case 'tips':
			return 5;
		case 'opinions':
			return 6;
		case 'ideas':
			return 7;
		case 'stories':
			return 8;
		case 'trends':
			return 9;
		case 'advice':
			return 10;
		default:
			return -1;
	}
}

function getTagsForInsert(originalTags, insertId) {
	const tags = originalTags.map((tag) => {
		const tagId = getTagIdByName(tag);
		if (tagId > 0) return [insertId, tagId];
	});
	const filteredTags = tags.filter((e) => e);
	return filteredTags;
}

export { getTagsForInsert };
