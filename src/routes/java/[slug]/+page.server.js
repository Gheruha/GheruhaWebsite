// @ts-nocheck
import { lessons } from '../data.js';

export function load({ params }) {
	const the_lesson = lessons.find((the_lesson) => the_lesson.slug === params.slug);

	return {
		the_lesson
	};
}
