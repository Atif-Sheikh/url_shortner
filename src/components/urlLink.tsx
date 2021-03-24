import React from 'react';
import { useShortenUrl } from "react-shorten-url";

interface Props {
    url: string;
}

function UrlLink({url}: Props) {
    const { loading, error, data } = useShortenUrl(url);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong</p>;
    return (
        <p>
            {data?.link}
        </p>
    )
}


export default UrlLink;

