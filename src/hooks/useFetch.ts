import { useState, useEffect } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
    data: Data<T>;
    loading: Boolean;
    error: ErrorType;
}

export const useFetch = <T>(url:string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<ErrorType>(null);

    useEffect(() => {
        let controller = new AbortController();
        setLoading(true);
        
        const fetchData = async () => {
            try {
                const response = await fetch(url, controller);
                if (!response.ok) {
                    throw new Error("Error when fetching data")
                }
                const jsonData: T = await response.json();
                setData(jsonData);
                setError(null);
            } catch (error) {
                setError(error as Error)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
        return () => {
            controller.abort();
        }
    }, [url]);
    return { data, loading, error };    
}