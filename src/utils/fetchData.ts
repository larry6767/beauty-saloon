export async function fetchData<T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
): Promise<T> {
  const res = await fetch(input, init)

  if (!res.ok) {
    // This will activate the closest `error.tsx` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json() as Promise<T>
}
