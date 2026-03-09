/* gate.ts contains routines that are used inside Rust code to make queries
* Both functions are required as there are use cases where only blocking
* synchronous calls are possible
*/

type Header = {name: string, value: string};

function prepare_request_headers(url: string, headers_arr: Array<{name: string, value: string}>): [string, Headers] {
    let headers = new Headers(Object.fromEntries(headers_arr.map((h): [string, string] => [h.name, h.value])));
    if (headers.has("range")) {
        const range_value = headers.get("range");
        url += ("?r=" + range_value)
        if (range_value !== "0-")
        headers.set("cache-control", "no-store");
    }
    return [url, headers]
}

function parse_response_headers(headers: Headers): Header[] {
    let headers_arr: Array<{name: string, value: string}> = []
    headers.forEach((value, key) => {
        headers_arr.push({name: key, value})
    })
    return headers_arr
}


export function request(method: string, url: string, headers: Array<{name: string, value: string}>) {
    const [processed_url, processed_headers] = prepare_request_headers(url, headers);
    const xhr = new XMLHttpRequest();
    xhr.open(method, processed_url, false); // false = synchronous (Web Worker only)
    processed_headers.forEach((value, name) => {
        xhr.setRequestHeader(name, value);
    });
    xhr.responseType = 'arraybuffer';
    xhr.send();
    if (xhr.status >= 200 && xhr.status < 300) {
        const responseHeaders: Header[] = [];
        const rawHeaders = xhr.getAllResponseHeaders();
        rawHeaders.split('\r\n').forEach(line => {
            const idx = line.indexOf(': ');
            if (idx !== -1) {
                responseHeaders.push({name: line.substring(0, idx), value: line.substring(idx + 2)});
            }
        });
        return {
            data: new Uint8Array(xhr.response as ArrayBuffer),
            headers: responseHeaders
        };
    }
    throw Error(xhr.statusText);
}

export async function request_async(method: string, url: string, headers: Array<{name: string, value: string}>) {
    const [processed_url, processed_headers] = prepare_request_headers(url, headers);
    const response = await fetch(processed_url, {
        method,
        headers: processed_headers
    })
    if (response.status >= 200 && response.status < 300) {
        return {
            data: new Uint8Array(await response.arrayBuffer()),
            headers: parse_response_headers(response.headers)
        }
    }
    throw Error(response.statusText);
}