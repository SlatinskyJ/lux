import {useEffect, useState} from 'react';

const BASE_URL = 'http://localhost:3000';

export function useScrape(onSuccess?: () => void) {
	const [done, setDone] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const scrape = () => {
		setIsLoading(true);
		fetch(`${BASE_URL}/scrape`)
			.then(() => {
				setDone(true);
				setIsLoading(false);
				if (onSuccess) onSuccess();
			})
			.catch((e) => {
				console.error(e);
				setIsLoading(false);
			})
	}

	return {scrape, done, isLoading}
}

export function useFetch<T>(endpoint: string) {
	const [data, setData] = useState<T>();
	const [isPending, setIsPending] = useState<boolean>(false);
	const [error, setError] = useState<Error>();

	const fetchData = () => {
		setIsPending(true);
		fetch(`${BASE_URL}${endpoint}`, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => {
				return response.json();
			})
			.then(result => {
				setData(result);
				setIsPending(false);
				setError(undefined);
			})
			.catch(e => {
				setIsPending(false);
				setError(e);
				setData(undefined);
				console.error(e);
			});
	}

	useEffect(() => {
		fetchData()
	}, [endpoint])

	return {data, isPending, error, fetchData}
}