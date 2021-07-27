import { useState, useRef, useEffect } from "react";

//for all entries functions: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry

const useInView = ({ root = null, rootMargin, threshold = 0 }) => {
	const [entries, updateEntries] = useState([]);
	const [refsInView, setRefsInView] = useState([]); //instead of ref to avoid constant updating

	//init
	const observer = useRef(null);

	useEffect(() => {
		const options = {
			root,
			rootMargin,
			threshold,
		};

		if (observer.current) observer.current.disconnect();

		//stop watching all nodes (in case we are reassigning new ones and we are disposing old ones)
		observer.current = new window.IntersectionObserver((entries) => {
			updateEntries(entries);
		}, options);

		//safe assignation in case observer is null
		const { current: currentObserver } = observer;

		//check intersection
		if (refsInView && refsInView.length > 0) {
			refsInView.forEach((ref) => {
				if (ref.current) {
					currentObserver.observe(ref.current);
				}
			});
		}

		//stop watching all targets
		return () => currentObserver.disconnect();
	}, [refsInView, root, rootMargin, threshold]); //update

	return [setRefsInView, entries];
};

export default useInView;
