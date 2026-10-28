import {useEffect} from 'react';

const FEEDBACK_DURATION_MS = 5000;

/** @param {unknown} feedback @param {() => void} clearFeedback */
export default function useFeedbackTimeout(feedback, clearFeedback) {
    useEffect(() => {
        if (!feedback) return undefined;

        const timeout = setTimeout(clearFeedback, FEEDBACK_DURATION_MS);
        return () => clearTimeout(timeout);
    }, [feedback, clearFeedback]);
}
