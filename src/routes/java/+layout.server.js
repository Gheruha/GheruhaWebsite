import { lessons } from './data.js';

export function load() {
	return {
		summaries: lessons.map((lesson) => ({
			slug: lesson.slug,
			title: lesson.title
		}))
	};
}
