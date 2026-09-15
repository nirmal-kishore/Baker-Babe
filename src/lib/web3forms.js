// Web3Forms configuration
// Submissions are emailed to the address registered with this access key at https://web3forms.com
// The key is read from the NEXT_PUBLIC_WEB3FORMS_KEY environment variable (see .env.local).
export const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Submit a form payload to Web3Forms.
 * Accepts either a plain object (JSON) or a FormData instance (for file uploads).
 * @param {Object|FormData} payload
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitToWeb3Forms(payload) {
  if (!WEB3FORMS_ACCESS_KEY) {
    return {
      success: false,
      message:
        'Form is not configured. Set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local and restart the dev server.',
    }
  }

  let body
  let headers

  if (payload instanceof FormData) {
    payload.append('access_key', WEB3FORMS_ACCESS_KEY)
    body = payload
    // Let the browser set the multipart boundary automatically
  } else {
    body = JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...payload })
    headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
  }

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers,
    body,
  })

  const data = await res.json()
  return { success: data.success, message: data.message }
}
