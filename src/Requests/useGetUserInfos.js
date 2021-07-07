import axios from "axios";
import { useState } from "react";

export default function useGetUserInfos(user) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [data, setData] = useState({});

    const config = {
        Accept: "application/vnd.github.v3+json"
    }

	function fetchData() {
		setLoading(true);
		axios.get("https://api.github.com/users/" + user, config)
			.then(onSuccess)
			.catch(onError);
	}

	const onSuccess = (res) => {
		setError(false);
		setLoading(false);
		setData(res.data);
	};

	const onError = (error) => {
		setLoading(false);
        console.log(error);
		setError(true);
	};

	return { loading, error, data, fetchData };
}
